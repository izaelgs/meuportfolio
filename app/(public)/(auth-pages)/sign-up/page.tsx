"use client";

import { signUpAction } from "@/app/actions/auth";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UnauthorizedException } from "@/utils/exceptions";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

export default function Signup(props: { searchParams: Promise<Message> }) {
	const [searchParams, setSearchParams] = useState<Message>();
	const router = useRouter();

	useEffect(() => {
		const fetchSearchParams = async () => {
			const params = await props.searchParams;
			setSearchParams(params);
		};
		fetchSearchParams();
	}, [props.searchParams]);

	const handleSubmit = async (formData: FormData) => {
		try {
			const registerResult = await signUpAction(formData);

			if (registerResult?.error) {
				setSearchParams({ message: registerResult.error });
				return;
			}
			const email = formData.get("email");
			const password = formData.get("password");

			const signInResult = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});

			if (signInResult?.error) {
				if (signInResult.status === 401) {
					throw new UnauthorizedException("E-mail ou senha inválidos");
				}

				throw new Error("Erro desconhecido");
			}

			router.push("/dashboard/create-portfolio");
		} catch (error) {
			console.error(error);
			setSearchParams({ message: "Erro ao criar usuário" });
		}
	};

	return (
		<>
			<form className="flex flex-col min-w-64 max-w-64 mx-auto">
				<h1 className="text-2xl font-medium">Cadastre-se</h1>
				<p className="text-sm text text-foreground">
					Já tem uma conta?{" "}
					<Link className="text-primary font-medium underline" href="/sign-in">
						Entrar
					</Link>
				</p>
				<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
					<Label htmlFor="name">Nome</Label>
					<Input name="name" placeholder="Seu nome" required />
					<Label htmlFor="email">Email</Label>
					<Input name="email" placeholder="seu@email.com" required />
					<Label htmlFor="password">Senha</Label>
					<Input
						type="password"
						name="password"
						placeholder="Sua senha"
						minLength={6}
						required
					/>
					<SubmitButton formAction={handleSubmit} pendingText="Cadastrando...">
						Cadastrar
					</SubmitButton>
					<SubmitButton pendingText="Cadastrando..." type="button" onClick={() => signIn("google", {callbackUrl: "/dashboard/create-portfolio"})}>Cadastrar com Google</SubmitButton>
					<FormMessage message={searchParams} />
				</div>
			</form>
		</>
	);
}
