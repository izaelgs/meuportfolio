"use server";

import { prisma } from "@/lib/prisma";
import { UnauthorizedException } from "@/utils/exceptions";
import bcrypt from 'bcrypt';
import { userSchema } from "../pages/api/users";

export const signUpAction = async (formData: FormData) => {
  try {
    const formName = formData.get("name")?.toString();
    const formEmail = formData.get("email")?.toString();
    const formPassword = formData.get("password")?.toString();
    const parseResult = userSchema.safeParse({
      name: formName,
      email: formEmail,
      password: formPassword,
    });
    if (!parseResult.success) {
      return {
        error: "Erro ao criar usuário",
      }
    }

    const { name, email, password } = parseResult.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        googleId: "",
      },
    });

    return {
      success: "Usuário criado com sucesso",
      user,
    }
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
    }
  }
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  console.log(email);
  // const supabase = await createClient();
  // const origin = (await headers()).get("origin");
  // const callbackUrl = formData.get("callbackUrl")?.toString();

  // if (!email) {
  //   return encodedRedirect("error", "/forgot-password", "Email is required");
  // }

  // const { error } = await supabase.auth.resetPasswordForEmail(email, {
  //   redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  // });

  // if (error) {
  //   console.error(error.message);
  //   return encodedRedirect(
  //     "error",
  //     "/forgot-password",
  //     "Could not reset password",
  //   );
  // }

  // if (callbackUrl) {
  //   return redirect(callbackUrl);
  // }

  // return encodedRedirect(
  //   "success",
  //   "/forgot-password",
  //   "Check your email for a link to reset your password.",
  // );
};

export const resetPasswordAction = async (formData: FormData) => {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  console.log(password, confirmPassword);

  // if (!password || !confirmPassword) {
  //   encodedRedirect(
  //     "error",
  //     "/protected/reset-password",
  //     "Password and confirm password are required",
  //   );
  // }

  // if (password !== confirmPassword) {
  //   encodedRedirect(
  //     "error",
  //     "/protected/reset-password",
  //     "Passwords do not match",
  //   );
  // }

  // const { error } = await supabase.auth.updateUser({
  //   password: password,
  // });

  // if (error) {
  //   encodedRedirect(
  //     "error",
  //     "/protected/reset-password",
  //     "Password update failed",
  //   );
  // }

  // encodedRedirect("success", "/protected/reset-password", "Password updated");
};
