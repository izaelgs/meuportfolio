"use client";

import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UnauthorizedException } from "@/utils/exceptions";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login(props: { searchParams: Promise<Message> }) {
	const [searchParams, setSearchParams] = useState<Message>();
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			const email = formData.get("email");
			const password = formData.get("password");

			const result = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});

			if (result?.error) {
				if (result.status === 401) {
					throw new UnauthorizedException("E-mail ou senha inválidos");
				}

				throw new Error("Erro desconhecido");
			}

			router.push("/dashboard");
		} catch (error) {
			let errorMessage = "";
			if (error instanceof UnauthorizedException) {
				errorMessage = error.message;
			} else {
				errorMessage = "Erro desconhecido";
			}
			router.push("?message=" + errorMessage);
		}
	};

	useEffect(() => {
		const fetchSearchParams = async () => {
			const params = await props.searchParams;
			setSearchParams(params);
		};
		fetchSearchParams();
	}, [props.searchParams]);

	return (
		<form className="flex flex-col min-w-64 max-w-64 mx-auto" onSubmit={handleSubmit}>
			<h1 className="text-2xl font-medium">Entrar</h1>
			<p className="text-sm text-foreground">
				Não tem uma conta?{" "}
				<Link className="text-foreground font-medium underline" href="/sign-up">
					Cadastre-se
				</Link>
			</p>
			<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
				<Label htmlFor="email">Email</Label>
				<Input name="email" placeholder="seu@email.com" required />
				<div className="flex justify-between items-center">
					<Label htmlFor="password">Senha</Label>
					<Link
						className="text-xs text-foreground underline"
						href="/forgot-password">
						Esqueceu sua senha?
					</Link>
				</div>
				<Input
					type="password"
					name="password"
					placeholder="Sua senha"
					required
				/>
				<SubmitButton pendingText="Entrando...">Entrar</SubmitButton>
				<SubmitButton pendingText="Entrando..." type="button" onClick={() => signIn("google", {callbackUrl: "/dashboard"})}>Entrar com Google</SubmitButton>
				<FormMessage message={searchParams} />
			</div>
		</form>
	);
}
