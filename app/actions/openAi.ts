"use server";

import { prisma } from "@/lib/prisma";
import { openai, PORTFOLIO_ASSISTANT_PROMPT } from "../config/openai";
import { Prisma } from "@prisma/client";

export const getPortfolioCustomTextsFromOpenAi = async (portfolioSlug: string) => {
  try {
    const portfolio = await prisma.portfolio.findFirst({
      where: { slug: portfolioSlug },
    });

    if (!portfolio) {
      throw new Error("Portfolio not found");
    }

    // Create a context string with portfolio information
    const contextPrompt = `
You will receive the raw portfolio data in JSON format.
Fill in any missing fields with "Not provided" or empty lists, and deliver the completed JSON:

${JSON.stringify(portfolio)}`.trim();

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: PORTFOLIO_ASSISTANT_PROMPT },
        { role: "user", content: contextPrompt }
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 2000,
    });

    const generatedContent = completion.choices[0].message.content;
    
    if (!generatedContent) {
      throw new Error("Failed to generate content");
    }

    // Parse the JSON response
    const customTexts = JSON.parse(generatedContent);

    // Update the portfolio with the new custom texts
    const updatedPortfolio = await prisma.portfolio.update({
      where: { id: portfolio.id },
      data: {
        customTexts: customTexts as Prisma.InputJsonValue
      }
    });

    return updatedPortfolio;
  } catch (error) {
    console.error('Error generating custom texts:', error);
    throw error;
  }
};
