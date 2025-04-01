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
  skills: z.array(
    z.object({
      skill: z.string(),
      description: z.string().optional()
    })
  ).optional().default([]),
  experiences: z.array(
    z.object({
      jobTitle: z.string(),
      company: z.string(),
      duration: z.string(),
      description: z.string().optional(),
      link: z.string().optional()
    })
  ).optional().default([]),
  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string().optional(),
      link: z.string().optional()
    })
  ).optional().default([]),
  contact: z.object({
    whatsapp: z.string().optional(),
    telephone: z.string().optional(),
    email: z.string().optional(),
    github: z.string().optional(),
    behance: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
  }).optional().default({}),
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
      skills: formData.skills?.map((skill: { skill: string; description?: string }) => ({
        skill: skill.skill,
        description: skill.description
      })) || [],
      experiences: formData.experiences?.map((exp: { jobTitle: string; company: string; duration: string; description?: string; link?: string }) => ({
        jobTitle: exp.jobTitle,
        company: exp.company,
        duration: exp.duration,
        description: exp.description,
        link: exp.link
      })) || [],
      projects: formData.projects?.map((project: { title: string; description?: string; link?: string }) => ({
        title: project.title,
        description: project.description,
        link: project.link
      })) || [],
      contact: formData.contact || {},
    });

    if (!parseResult.success) {
      throw parseResult.error;
    }
    const { presentationName, whatsapp, telephone, email, profession, slug, skills, experiences, projects, contact } = parseResult.data;

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
          ...(contact || {}),
        },
        slug,
        User: { connect: { id: user.id } },
        skills: skills.map((skill: { skill: string; description?: string }) => ({
          skill: skill.skill,
          description: skill.description,
        })),
        experiences: experiences,
        projects: projects,
        customTexts: {},
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
    } else if (error instanceof z.ZodError) {
      errorMessage = "Erro de validação";
    } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        errorMessage = "Este slug já está em uso";
      } else {
        errorMessage = "Erro ao criar portfólio";
      }
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
