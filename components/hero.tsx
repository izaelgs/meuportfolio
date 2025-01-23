import Link from "next/link";

export default function Hero() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div className="text-center">
				<h1 className="dark:text-white text-5xl font-semibold tracking-tight sm:text-7xl">
					{/* Surprise your clients or recruiters with an amazing presentation */}
					Surpreenda seus clientes ou recrutadores com uma apresentação incrível
				</h1>
				<p className="mt-8 dark:text-gray-300 text-gray-700 text-lg font-medium sm:text-xl/8">
					Não deixe seu currículo ser apenas outro documento chato. Faça ele se destacar com um design moderno e profissional em minutos.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/sign-up"
						className="rounded-md bg-gray-900 dark:bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 dark:focus-visible:outline-gray-200">
						Começar
					</Link>
					<Link href="#how-it-works" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
						Saiba mais <span aria-hidden="true">→</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
