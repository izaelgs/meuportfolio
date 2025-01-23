import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://127.0.0.1:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Meu portfólio",
	description: "O jeito mais fácil e rápido de ter seu portfólio online",
};

export default function Portfolio({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={GeistSans.className} suppressHydrationWarning>
			{children}
		</html>
	);
}
