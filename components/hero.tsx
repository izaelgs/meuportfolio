import Link from "next/link";

export default function Hero() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div className="text-center">
				<h1 className="dark:text-white text-5xl font-semibold tracking-tight sm:text-7xl">
					Portfólio profissional <span className="text-primary">criado por IA</span> em minutos
				</h1>
				<p className="mt-8 dark:text-gray-300 text-gray-700 text-xl max-w-2xl mx-auto">
					Forneça informações básicas sobre você e nossa IA criará um portfólio impressionante que destaca suas habilidades e experiências de forma profissional.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/sign-up"
						className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
						Criar meu portfólio
					</Link>
					<Link href="#how-it-works" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1">
						Como funciona <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
