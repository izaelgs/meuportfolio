import { getPortfolioAction } from "@/app/actions/portfolio";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import "../../globals.css";
import "./index.css";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://127.0.0.1:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Meu portfólio",
	description: "O jeito mais fácil e rápido de ter seu portfólio online",
};

export default async function CreatePortfolio({
	params: { portfolioSlug },
}: {
	params: { portfolioSlug: string };
}) {
	const portfolio = await getPortfolioAction(portfolioSlug);

	return (
		<html lang="en" className={GeistSans.className} suppressHydrationWarning>
			<body className="w-full h-full scrollbar-minimal">
				<nav className="fixed p-4 w-full bg-black/50 backdrop-blur">
					<div className="relative">
						<a
							className="flex align-items-baseline w-1/3 hover:opacity-75 transition-opacity duration-300"
							href="https://github.com/izaelgs"
							target="_blank"
							aria-label="Perfil do GitHub">
							<i className="devicon-github-original" aria-hidden="true"></i>
							<h1>/Izaelgs</h1>
						</a>
						<button
							id="nav-toggle"
							className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2"
							aria-label="Menu de navegação"
							aria-expanded="false">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path d="M4 6h16M4 12h16m-16 6h16" />
							</svg>
						</button>
						<ul
							id="nav-menu"
							className="absolute top-full left-0 w-full backdrop-blur-sm lg:backdrop-blur-none mt-4 p-4 lg:p-0 lg:mt-0 lg:w-auto lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 hidden lg:flex flex-col lg:flex-row shadow-lg lg:shadow-none rounded-lg"
							role="navigation">
							<li className="px-4">
								<a
									className="font-semibold hover:text-orange-400 hover:text-primary relative transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
									aria-current="page"
									href="#"
									aria-label="Go to the initial section">
									Home
								</a>
							</li>
							<li className="px-4">
								<a
									className="font-semibold hover:text-orange-400 relative transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
									aria-current="page"
									href="#skills"
									aria-label="Go to the skills section">
									Skills
								</a>
							</li>
							<li className="px-4">
								<a
									className="font-semibold hover:text-orange-400 hover:text-primary relative transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
									aria-current="page"
									href="#projects"
									aria-label="Go to the projects section">
									Projects
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<main className="md:container mx-auto px-4">
					{/* Perfil */}
					<section className="main appear">
						<div className="title rounded-4">
							<h1>{portfolio?.presentationName}</h1>
							<p className="font-semibold mb-4 opacity-75">
								Ensure exceptional experiences for your users.
							</p>
							{portfolio?.whatsapp && (
								<a
									className="ring-2 ring-orange-900 hover:ring-orange-400 font-semibold hover:bg-orange-400 rounded-full px-4 py-2 transition-all duration-300 opacity-75"
									href={`https://api.whatsapp.com/send/?phone=${portfolio?.whatsapp}&text&type=phone_number&app_absent=0`}
									target="_blank">
									Get in Touch!
								</a>
							)}
						</div>
					</section>

					{/* Skills Section */}
					<section id="skills" className="text-center">
						<h2 className="title appear">Skills</h2>
						<p className="description appear">
							A brief overview of my technical skills and expertise in various
							technologies.
						</p>

						{/* Tab Navigation */}
						<div className="tabs appear">
							<button className="tab-button active">Frontend</button>
							<button className="tab-button">Backend</button>
							<button className="tab-button">DevOps</button>
							<button className="tab-button">Testing</button>
							<button className="tab-button">Mobile</button>
						</div>

						{/* Tab Content */}
						<div id="frontend" className="tab-content active">
							<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
								{/* React */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
										alt="React Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">React</h5>
									</div>
								</div>
								{/* Vue.js */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
										alt="Vue Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Vue</h5>
									</div>
								</div>
								{/* jQuery */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
										alt="jQuery Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">jQuery</h5>
									</div>
								</div>
								{/* Electron */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"
										alt="Electron Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Electron</h5>
									</div>
								</div>
								{/* Next.js */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
										alt="Next.js Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Next.js</h5>
									</div>
								</div>
								{/* Vite */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
										alt="Vite Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Vite</h5>
									</div>
								</div>
								{/* Bootstrap */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
										alt="Bootstrap Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Bootstrap</h5>
									</div>
								</div>
								{/* Tailwind */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-1024x615-fdeis5r1.png"
										alt="Tailwind Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Tailwind</h5>
									</div>
								</div>
								{/* Nuxt.js */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
										alt="Nuxt.js Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Nuxt.js</h5>
									</div>
								</div>
							</div>
						</div>

						<div id="backend" className="tab-content">
							<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
								{/* Node.js */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
										alt="Node.js Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Node.js</h5>
									</div>
								</div>
								{/* Nest.js */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png"
										alt="Nest.js Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Nest.js</h5>
									</div>
								</div>
								{/* Laravel */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"
										alt="Laravel Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Laravel</h5>
									</div>
								</div>
								{/* PHP */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
										alt="PHP Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">PHP</h5>
									</div>
								</div>
								{/* Java */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
										alt="Java Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Java</h5>
									</div>
								</div>
								{/* Spring */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
										alt="Spring Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Spring</h5>
									</div>
								</div>
							</div>
						</div>

						<div id="devops" className="tab-content">
							<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
								{/* AWS */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
										alt="AWS Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">AWS</h5>
									</div>
								</div>
								{/* DigitalOcean */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg"
										alt="DigitalOcean Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">DigitalOcean</h5>
									</div>
								</div>
								{/* Docker */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
										alt="Docker Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Docker</h5>
									</div>
								</div>
								{/* GitHub Actions */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
										alt="GitHub Actions Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">GitHub Actions</h5>
									</div>
								</div>
								{/* Google Cloud */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
										alt="Google Cloud Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Google Cloud</h5>
									</div>
								</div>
								{/* Nginx */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
										alt="Nginx Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Nginx</h5>
									</div>
								</div>
								{/* Ubuntu */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"
										alt="Ubuntu Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Ubuntu</h5>
									</div>
								</div>
							</div>
						</div>

						<div id="testing" className="tab-content">
							<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
								{/* Jest */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
										alt="Jest Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">Jest</h5>
									</div>
								</div>
							</div>
						</div>

						<div id="mobile" className="tab-content">
							<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
								{/* React Native */}
								<div className="flex flex-col items-center justify-center appear">
									<Image
										src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
										alt="React Native Logo"
										width={512}
										height={512}
									/>
									<div className="card-body relative">
										<h5 className="card-title text-center">React Native</h5>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Projects */}
					<section id="projects" className="text-center">
						<h2 className="title appear mb-4">Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
							{/* Socialmarket */}
							<div className="ring-1 ring-orange-400 p-4 rounded-lg flex flex-col appear">
								<h5 className="title">Socialmarket</h5>
								<p className="flex-grow">
									Social interaction platform between partners, clients, and
									other interested parties in the process of selling and
									delivering products, being developed with Nest.js, TypeORM,
									MySQL, Vue.js, GitHub Actions, and AWS EC2 instances.
								</p>

								<div className="flex justify-between bottom-0 mt-2 w-full">
									<a
										href="https://socialmarket.iza.dev.br/"
										className="font-semibold hover:text-orange-400"
										target="_blank">
										Acessar
									</a>
									<a
										href="https://github.com/izaelgs/socialmarket-front"
										target="_blank">
										<i className="devicon-github-original"></i>
									</a>
								</div>
							</div>
						</div>

						{/* Projetos Antigos */}
						<h3 className="title appear mb-4 text-xl">Old Projects</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 opacity-75">
							{/* Web Chat */}
							<div className="ring-1 ring-orange-400 p-4 rounded-lg flex flex-col appear">
								<h5 className="title">Web Chat</h5>
								<p className="flex-grow">
									Real-time communication platform developed with Laravel
									Jetstream, Laravel WebSockets, and Tailwind CSS
								</p>

								<div className="flex justify-between bottom-0 mt-2 w-full">
									<span className="font-semibold text-orange-400/50">
										Discontinued
									</span>
									<a href="https://github.com/izaelgs/chat" target="_blank">
										<i className="devicon-github-original"></i>
									</a>
								</div>
							</div>

							{/* Target Manager */}
							<div className="ring-1 ring-orange-400 p-4 rounded-lg flex flex-col appear">
								<h5 className="title">Target Manager</h5>
								<p className="flex-grow">
									Platform for managing goals and objectives and classification
									by priority, cost, return, deadline, and urgency calculated
									automatically
								</p>

								<div className="flex justify-between bottom-0 mt-2 w-full">
									<span className="font-semibold text-orange-400/50">
										Discontinued
									</span>
									<a
										href="https://github.com/izaelgs/targetManager"
										target="_blank">
										<i className="devicon-github-original"></i>
									</a>
								</div>
							</div>

							{/* Mini Store */}
							<div className="ring-1 ring-orange-400 p-4 rounded-lg flex flex-col appear">
								<h5 className="title">Mini Store</h5>
								<p className="flex-grow">
									Study material on basic principles for building an e-commerce
									using Laravel, Vue.js, and the PagSeguro API
								</p>

								<div className="flex justify-between bottom-0 mt-2 w-full">
									<span className="font-semibold text-orange-400/50">
										Discontinued
									</span>
									<a
										href="https://github.com/izaelgs/miniStore"
										target="_blank">
										<i className="devicon-github-original"></i>
									</a>
								</div>
							</div>
						</div>
					</section>
				</main>

				<footer className="md:container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="grid grid-cols-2 mb-4 md:mb-0">
							{/* <div className="flex-1">
							<a
								href="https://github.com/izaelgs"
								target="_blank"
								className="flex hover:opacity-75 transition-opacity duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
								<i className="devicon-github-original"></i>GitHub
							</a>
						</div> */}
							{/* <div className="col">
							<a
								href="https://www.instagram.com/izael_hs/"
								target="_blank"
								className="flex hover:opacity-75 transition-opacity duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-instagram"
									viewBox="0 0 16 16">
									<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
								</svg>
								Instagram
							</a>
						</div> */}
							{/* <div className="col">
							<a
								href="https://br.linkedin.com/in/izaelgs"
								target="_blank"
								className="flex hover:opacity-75 transition-opacity duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
								<i className="devicon-linkedin-plain"></i>LinkedIn
							</a>
						</div> */}
							{/* <div className="col">
							<a
								href="https://twitter.com/Izael65"
								target="_blank"
								className="flex hover:opacity-75 transition-opacity duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
								<i className="devicon-twitter-plain"></i>Twitter
							</a>
						</div> */}
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
			</body>
		</html>
	);
}
