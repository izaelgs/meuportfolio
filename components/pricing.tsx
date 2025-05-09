"use client";

import { Check } from "lucide-react";

export default function Pricing() {
	const tiers = [
		{
			name: "Básico",
			price: "R$ 5",
			description: "Um portfólio simples para começar.",
			features: ["Dados básicos", "Layout padrão"],
			cta: "Comprar Básico",
		},
		{
			name: "Intermediário",
			price: "R$ 10",
			description: "Mais seções para mostrar suas habilidades.",
			features: [
				"Dados básicos",
				"Seção de Habilidades",
				"Seção de Projetos",
				"Seção de Experiências",
				"Layout aprimorado",
			],
			cta: "Comprar Intermediário",
		},
		{
			name: "Completo",
			price: "R$ 20",
			description: "Totalmente personalizável para impressionar.",
			features: [
				"Dados básicos",
				"Seção de Habilidades",
				"Seção de Projetos",
				"Seção de Experiências",
				"Layout totalmente personalizável",
				"Suporte prioritário",
			],
			cta: "Comprar Completo",
		},
	];

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		for (const card of document.querySelectorAll(".highlight-border-card")) {
			const rect = card.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;
			// Cast the Element to HTMLElement to access style property
			(card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
			(card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
		}
	};

	return (
		<section id="pricing" className="py-16 bg-background">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-12">Preços</h2>
				<div
					className="grid grid-cols-1 md:grid-cols-3 gap-8 card-container"
					onMouseMove={handleMouseMove}>
					{tiers.map((tier) => (
						<div key={tier.name} className="shadow-lg highlight-border-card">
							<div className="card-content flex flex-col p-6 text-card-foreground">
								<h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
								<p className="text-3xl font-bold mb-4">{tier.price}</p>
								<p className="text-muted-foreground mb-6">{tier.description}</p>
								<ul className="space-y-2 mb-8 flex-grow">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-center">
											<Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
								<button className="w-full bg-primary text-primary-foreground py-2 px-4 hover:bg-primary/90 transition-colors mt-auto">
									{tier.cta}
								</button>
							</div>
							<div className="card-border"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
