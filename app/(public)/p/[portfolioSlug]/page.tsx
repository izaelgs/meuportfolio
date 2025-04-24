import { getPortfolioAction } from "@/app/actions/portfolio";
import "./index.css";
import { Metadata } from "next";
import NavMenu from "./components/NavMenu";
import SkillTabs from "./components/SkillTabs";
import type { Project } from "@prisma/client";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://127.0.0.1:3000";

type Props = {
	params: { portfolioSlug: string };
};

export async function generateMetadata(
	{ params }: Props,
): Promise<Metadata> {
	// Fetch portfolio data
	const portfolio = await getPortfolioAction(params.portfolioSlug);
	
	if (!portfolio) {
		return {
			title: "Portfolio Not Found",
			description: "The requested portfolio could not be found",
		};
	}

	const customTexts = portfolio.customTexts as CustomTexts;

	// Construct metadata
	return {
		metadataBase: new URL(defaultUrl),
		title: `${portfolio.presentationName} | ${portfolio.profession || "Portfolio"}`,
		description: customTexts?.personalPresentation?.formal || 
			`${portfolio.presentationName} - ${portfolio.profession || "Professional Portfolio"}. View my skills, projects and get in touch.`,
		openGraph: {
			title: `${portfolio.presentationName} | ${portfolio.profession || "Portfolio"}`,
			description: customTexts?.personalPresentation?.formal ||
				`${portfolio.presentationName} - ${portfolio.profession || "Professional Portfolio"}. View my skills, projects and get in touch.`,
			url: `${defaultUrl}/p/${portfolio.slug}`,
			type: "website",
		},
	};
}

// Define the interface for customTexts
interface CustomTexts {
	personalPresentation?: {
		formal?: string;
		informal?: string;
	};
	missionVisionValues?: {
		mission?: string;
		vision?: string;
		values?: string;
	};
	callToAction?: {
		contact?: string;
		hire?: string;    
	};
	curatedDescriptions?: {
		experience?: string;
		skills?: string;
		projects?: string;
	};
	testimonials?: {
		client?: string;
		colleague?: string;
	};
	differentiation?: string;
}

export default async function PortfolioPage({
	params,
}: {
	params: { portfolioSlug: string };
}) {
	const portfolioSlug = params.portfolioSlug;
	const portfolio = await getPortfolioAction(portfolioSlug);
	const customTexts = portfolio?.customTexts as CustomTexts;

	if (!portfolio) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h1 className="text-4xl font-bold">Portfolio Not Found</h1>
					<p className="mt-4">The requested portfolio could not be found</p>
				</div>
			</div>
		);
	}

	return (
		<>
			<NavMenu />

			<main className="md:container mx-auto px-4">
				{/* Perfil */}
				<section className="main appear">
					<div className="title rounded-4">
						<h1>{portfolio?.presentationName}</h1>
						<p className="font-semibold mb-4 opacity-75">
							{customTexts?.personalPresentation?.informal || "Ensure exceptional experiences for your users."}
						</p>
						{portfolio?.whatsapp && (
							<a
								className="ring-2 ring-orange-900 hover:ring-orange-400 font-semibold hover:bg-orange-400 rounded-full px-4 py-2 transition-all duration-300 opacity-75"
								href={`https://api.whatsapp.com/send/?phone=${portfolio?.whatsapp}&text&type=phone_number&app_absent=0`}
								target="_blank">
								{customTexts?.callToAction?.contact || 'Get in Touch!'}
							</a>
						)}
					</div>
				</section>

				{/* Skills Section */}
				<SkillTabs customText={customTexts?.curatedDescriptions} skills={portfolio?.skills || []} />

				{/* Projects */}
				<section id="projects" className="text-center">
					<h2 className="title appear mb-4">Projects</h2>
					<p>{customTexts?.curatedDescriptions?.projects ?? 'Excited to start new collaborations and contribute to the success of future initiatives.'}</p>
					
					{/* Dynamic Projects Grid */}
					{portfolio.projects && portfolio.projects.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
							{portfolio.projects.map((project: Project, index: number) => (
								<div key={index} className="ring-1 ring-orange-400 p-4 rounded-lg flex flex-col appear">
									<h5 className="title">{project.title}</h5>
									{project.description && (
										<p className="flex-grow mb-2">
											{project.description}
										</p>
									)}
									<div className="flex justify-between items-center mt-auto pt-2 w-full"> {/* Use mt-auto to push to bottom */}
										{project.link ? (
											<a
												href={project.link}
												className="font-semibold hover:text-orange-400"
												target="_blank"
												rel="noopener noreferrer"> {/* Added rel for security */}
												Access
											</a>
										) : (
											<span className="font-semibold text-gray-500/70"> {/* Style for unavailable link */}
												Link unavailable
											</span>
										)}
										{/* Assuming no separate repo link for now based on schema, adjust if needed */}
										{/* If a repo link exists in data, add it here */}
										{/* Example: 
										{project.repositoryUrl && (
											<a
												href={project.repositoryUrl}
												target="_blank"
												rel="noopener noreferrer">
												<i className="devicon-github-original text-xl hover:text-orange-400"></i> 
											</a>
										)} 
										*/}
									</div>
								</div>
							))}
						</div>
					) : (
						<p className="my-10 text-gray-500">No projects available yet.</p> // Message when no projects exist
					)}

					{/* Remove Old Static Projects Section if it exists */}
					{/* Example: If there was a separate "Old Projects" h3 and grid, remove them here */}

				</section>
			</main>

			<footer className="md:container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="grid grid-cols-2 mb-4 md:mb-0">
						{portfolio?.whatsapp && (
							<div className="col">
								<a
									href={`https://api.whatsapp.com/send/?phone=${portfolio?.whatsapp}&text&type=phone_number&app_absent=0`}
									target="_blank"
									className="flex hover:opacity-75 transition-opacity duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-whatsapp"
										viewBox="0 0 16 16">
										<path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
									</svg>
									WhatsApp
								</a>
							</div>
						)}
					</div>
					<ul className="mb-4 md:mb-0 text-center md:text-start">
						<li>
							<p className="text-sm-start my-0">Serra - ES</p>
						</li>
						<li>
							<p className="text-sm-start my-0">2024</p>
						</li>
						{portfolio?.email && (
							<li>
								<a
									href={`mailto:${portfolio?.email}`}
									className="my-0 text-white flex justify-center md:block">
									{portfolio?.email}
								</a>
							</li>
						)}
						{portfolio?.telephone && (
							<li>
								<a
									href={`tel:${portfolio?.telephone}`}
									className="my-0 text-white flex justify-center md:block">
									{portfolio?.telephone}
								</a>
							</li>
						)}
					</ul>
				</div>
			</footer>
		</>
	);
}
