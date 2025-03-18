import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import NavHome from "@/components/nav-home";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Examples from "@/components/examples";
import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://127.0.0.1:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Meu portfólio - Criado por IA em minutos",
  description: "Crie um portfólio profissional com IA. Forneça informações básicas e receba um site completo para impressionar recrutadores e clientes.",
};

export default async function Index() {
	return (
		<html lang="pt-BR" className={GeistSans.className} suppressHydrationWarning>
			<body className="bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem>
					<main className="min-h-screen flex flex-col items-center">
						<div className="flex-1 w-full flex flex-col gap-4 items-center">
							<NavHome />
							<div className="flex flex-col w-full">
								<Hero />
								<Features />
								<HowItWorks />
								<Examples />
							</div>
						</div>
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
