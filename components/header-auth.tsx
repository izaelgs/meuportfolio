import Link from "next/link";
import { Button } from "./ui/button";
import { SessionProvider, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
	const { data: session } = useSession();

	return (
		<SessionProvider session={session}>
			{session ? (
				<div className="flex items-center gap-4">
					Olá, {session.user?.name?.split(" ")[0]}!
					<form action={() => signOut()}>
						<Button type="submit" variant={"outline"}>
							Sair
						</Button>
					</form>
				</div>
			) : (
				<div className="flex gap-2">
					<Button
						asChild
						size="sm"
						variant={"outline"}>
						<Link href="/sign-in">Entrar</Link>
					</Button>
					<Button asChild size="sm" variant={"default"}>
						<Link href="/sign-up">Cadastrar</Link>
					</Button>
				</div>
			)}
		</SessionProvider>
	);
}
