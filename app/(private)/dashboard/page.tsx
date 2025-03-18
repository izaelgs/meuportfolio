import { GeistSans } from "geist/font/sans";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://127.0.0.1:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Meu portfólio",
	description: "O jeito mais fácil e rápido de ter seu portfólio online",
};

export default function Dashboard() {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
			<body className="w-full h-full scrollbar-minimal">
        <div className="flex flex-col gap-12 items-center">
          <h1>Portfólio</h1>
        </div>
			</body>
		</html>
  );
}
