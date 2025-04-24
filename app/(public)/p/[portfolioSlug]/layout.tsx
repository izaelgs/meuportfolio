import { GeistSans } from "geist/font/sans";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={GeistSans.className} suppressHydrationWarning>
			<body className="w-full h-full scrollbar-minimal">
				{children}
			</body>
		</html>
	);
}
