"use client";

import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import HeaderAuth from "./header-auth";

export default function NavHome() {
	return (
		<SessionProvider>
			<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
				<div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
					<div className="flex gap-5 items-center font-semibold">
						<Link href={"/"}>Meu portfólio</Link>
					</div>
					<HeaderAuth />
				</div>
			</nav>
		</SessionProvider>
	);
}
