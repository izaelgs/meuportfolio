"use server";

import { prisma } from "@/lib/prisma";
import { UnauthorizedException } from "@/utils/exceptions";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { FieldValues } from "react-hook-form";
import { Prisma } from "@prisma/client";
import { getPortfolioCustomTextsFromOpenAi } from "./openAi";

const portFolioSchema = z.object({
  presentationName: z.string(),
  whatsapp: z.string().optional(),
  telephone: z.string().optional(),
  email: z.string().optional(),
  profession: z.string().optional(),
  slug: z.string(),
});

export const createPortfolioAction = async (formData: FieldValues) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user?.email;

    if (!userEmail) {
      throw new UnauthorizedException("Usuário não autenticado");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      throw new UnauthorizedException("Usuário não autenticado");
    }

    const formPresentationName = formData.presentationName?.toString();
    const formWhatsapp = formData.whatsapp?.toString();
    const formTelephone = formData.telephone?.toString();
    const formEmail = formData.email?.toString();
    const formProfession = formData.profession?.toString();
    const formSlug = formData.slug?.toString();

    const parseResult = portFolioSchema.safeParse({
      presentationName: formPresentationName,
      whatsapp: formWhatsapp,
      telephone: formTelephone,
      email: formEmail,
      profession: formProfession,
      slug: formSlug,
    });

    if (!parseResult.success) {
      throw new Error(parseResult.error.message);
    }
    const { presentationName, whatsapp, telephone, email, profession, slug } = parseResult.data;

    // First, create the portfolio
    const portfolio = await prisma.portfolio.create({
      data: {
        presentationName,
        whatsapp,
        telephone,
        email,
        profession,
        contact: {
          whatsapp,
          telephone,
          email,
        },
        slug,
        User: { connect: { id: user.id } },
        customTexts: {} as Prisma.InputJsonValue
      },
    });

    await generatePortfolioTexts(portfolio.id);

    return {
      success: "Portfólio criado com sucesso",
      portfolio,
    };
  } catch (error) {
    console.error(error);
    let errorMessage = "";
    if (error instanceof UnauthorizedException) {
      errorMessage = error.message;
    } else {
      errorMessage = "Erro desconhecido";
    }
    return {
      error: errorMessage,
    };
  }
};

export const getPortfolioAction = async (portfolioSlug: string) => {
  const portfolio = await prisma.portfolio.findFirst({
    where: {
      slug: portfolioSlug,
    },
  });
  return portfolio;
};

async function generatePortfolioTexts(portfolioId: string) {
  const portfolio = await prisma.portfolio.findUnique({
    where: { id: portfolioId },
  });
  if (portfolio) {
    await getPortfolioCustomTextsFromOpenAi(portfolio.slug);
  }
}
