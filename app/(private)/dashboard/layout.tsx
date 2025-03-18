import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import NavHome from "@/components/nav-home";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://127.0.0.1:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Meu portfólio",
	description: "O jeito mais fácil e rápido de ter seu portfólio online",
};

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={GeistSans.className} suppressHydrationWarning>
			<body className="bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem>
					<main className="min-h-screen flex flex-col items-center">
						<div className="flex-1 w-full flex flex-col gap-12 items-center">
							<NavHome />
							<div className="flex flex-col gap-20 max-w-5xl p-5 w-full">
								<div className="max-w-7xl flex flex-col gap-12 items-start">
									{children}
								</div>
							</div>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
