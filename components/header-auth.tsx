"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
	const { data: session } = useSession();

	return (
		<SessionProvider session={session}>
			{session ? (
				<div className="flex items-center gap-4">
					Hey, {session.user?.email}!
					<form action={() => signOut()}>
						<Button type="submit" variant={"outline"}>
							Sign out
						</Button>
					</form>
				</div>
			) : (
				<div className="flex gap-2">
					<Button
						asChild
						size="sm"
						variant={"outline"}
						onClick={() => signIn()}>
						<Link href="#">Sign in</Link>
					</Button>
					<Button asChild size="sm" variant={"default"}>
						<Link href="/sign-up">Sign up</Link>
					</Button>
				</div>
			)}
		</SessionProvider>
	);
}
