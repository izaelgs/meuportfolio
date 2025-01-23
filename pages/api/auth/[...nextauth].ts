import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          const parseResult = credentialsSchema.safeParse(credentials);
          if (!parseResult.success) {
            return null;
          }

          const { email, password } = parseResult.data;
          const user = await prisma.user.findFirst({ where: { email } });

          if (user && (await bcrypt.compare(password, user.password))) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error during authentication:', error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile: async (profile) => {
        let user = await prisma.user.findFirst({ where: { email: profile.email } });

        if (!user) {
          user = await prisma.user.create({ data: { email: profile.email, googleId: profile.sub, name: profile.name, password: "" } });
        } else {
          user = await prisma.user.update({
            where: { id: user.id },
            data: { googleId: profile.sub }
          });
        }
        return user;
      }
    })

  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
    newUser: '/sign-in',
  }
})