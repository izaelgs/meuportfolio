"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, useFieldArray } from "react-hook-form";
import { FormMessage, Message } from "@/components/form-message";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";
import { createPortfolioAction } from "@/app/actions/portfolio";

export default function CreatePortfolio() {
	const [searchParams, setSearchParams] = useState<Message>();
	const router = useRouter();
	const form = useForm();
	const { control } = form;
	const {
		fields: experienceFields,
		append: appendExperience,
		remove: removeExperience,
	} = useFieldArray({
		control,
		name: "experiences",
	});
	const {
		fields: skillFields,
		append: appendSkill,
		remove: removeSkill,
	} = useFieldArray({
		control,
		name: "skills",
	});
	const {
		fields: projectFields,
		append: appendProject,
		remove: removeProject,
	} = useFieldArray({
		control,
		name: "projects",
	});

	const handleSubmit = async () => {
		try {
			const formData = form.getValues();

			const portfolioResult = await createPortfolioAction(formData);

			if (portfolioResult?.error) {
				setSearchParams({ message: portfolioResult.error });
				return;
			}

			router.push("/dashboard");
		} catch (error) {
			console.error(error);
			setSearchParams({ message: "Erro ao criar portfólio" });
		}
	};

	const generatePortfolioSlug = useCallback(() => {
		const slug = form
			.getValues()
			.presentationName?.toLowerCase()
			.trim()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9-]/g, '-')
			.replace(/-+/g, '-')
			.replace(/^-+|-+$/g, '');
		return slug;
	}, [form]);

	const presentationName = form.getValues().presentationName;

	useEffect(() => {
		const slug = generatePortfolioSlug();
		form.setValue("slug", slug);
	}, [form, presentationName, generatePortfolioSlug]);

	return (
		<div className="container">
			<Form {...form}>
				<form className="space-y-4">
					<h1 className="text-2xl font-semibold">Criar portfólio</h1>
					<Accordion type="single" collapsible>
						{/* Basic Data */}
						<AccordionItem value="basic-data">
							<AccordionTrigger>Dados básicos</AccordionTrigger>
							<AccordionContent>
								<FormField
									control={control}
									name="presentationName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nome de Apresentação</FormLabel>
											<FormControl>
												<Input placeholder="Seu nome" {...field} />
											</FormControl>
											<FormDescription>
												Insira seu nome de apresentação.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="slug"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Link do portfólio</FormLabel>
											<FormControl>
												<div className="flex items-center">
													<span className="px-3 py-2 bg-muted text-muted-foreground rounded-l-md border">
														{window.location.origin}/p/
													</span>
													<Input 
														className="rounded-l-none"
														placeholder="seu-nome" 
														{...field} 
													/>
												</div>
											</FormControl>
											<FormDescription>
												Este será o endereço público do seu portfólio.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="whatsapp"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Número do WhatsApp</FormLabel>
											<FormControl>
												<Input placeholder="Seu WhatsApp" {...field} />
											</FormControl>
											<FormDescription>
												Insira seu número do WhatsApp.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="telephone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Telefone</FormLabel>
											<FormControl>
												<Input placeholder="Seu telefone" {...field} />
											</FormControl>
											<FormDescription>
												Insira seu número de telefone.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder="Seu email"
													{...field}
												/>
											</FormControl>
											<FormDescription>Insira seu email.</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="profession"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Profissão</FormLabel>
											<FormControl>
												<Input placeholder="Sua profissão" {...field} />
											</FormControl>
											<FormDescription>Insira sua profissão.</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
							</AccordionContent>
						</AccordionItem>

						{/* Experiences */}
						<AccordionItem value="experiences">
							<AccordionTrigger>Experiência</AccordionTrigger>
							<AccordionContent>
								{experienceFields.map((item, index) => (
									<div key={item.id} className="mb-4">
										<FormField
											control={control}
											name={`experiences.${index}.jobTitle`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Cargo</FormLabel>
													<FormControl>
														<Input placeholder="Seu cargo" {...field} />
													</FormControl>
													<FormDescription>
														Insira seu cargo na empresa.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name={`experiences.${index}.company`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Empresa</FormLabel>
													<FormControl>
														<Input placeholder="Nome da empresa" {...field} />
													</FormControl>
													<FormDescription>
														Insira o nome da empresa.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name={`experiences.${index}.duration`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Duração</FormLabel>
													<FormControl>
														<Input placeholder="Ex: 2020 - 2022" {...field} />
													</FormControl>
													<FormDescription>
														Insira a duração do seu trabalho.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name={`experiences.${index}.description`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Descrição</FormLabel>
													<FormControl>
														<Input
															placeholder="Descrição da experiência"
															{...field}
														/>
													</FormControl>
													<FormDescription>
														Insira uma breve descrição da sua experiência.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name={`experiences.${index}.link`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Link</FormLabel>
													<FormControl>
														<Input
															placeholder="Link para mais informações"
															{...field}
														/>
													</FormControl>
													<FormDescription>
														Insira um link relacionado à sua experiência.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<button
											type="button"
											onClick={() => removeExperience(index)}
											className="text-red-500">
											Remover
										</button>
									</div>
								))}
								<button
									type="button"
									onClick={() =>
										appendExperience({
											jobTitle: "",
											company: "",
											duration: "",
											description: "",
											link: "",
										})
									}
									className="mt-4 bg-green-500 text-white p-2 rounded">
									Adicionar Experiência
								</button>
							</AccordionContent>
						</AccordionItem>

						{/* Skills */}
						<AccordionItem value="skills">
							<AccordionTrigger>Habilidades</AccordionTrigger>
							<AccordionContent>
								{skillFields.map((item, index) => (
									<div key={item.id} className="mb-4">
										<FormField
											control={control}
											name={`skills.${index}.skill`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Habilidade</FormLabel>
													<FormControl>
														<Input
															placeholder="Nome da habilidade"
															{...field}
														/>
													</FormControl>
													<FormDescription>
														Insira o nome da habilidade.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name={`skills.${index}.description`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Descrição</FormLabel>
													<FormControl>
														<Input
															placeholder="Descrição da habilidade"
															{...field}
														/>
													</FormControl>
													<FormDescription>
														Insira uma breve descrição da habilidade.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<button
											type="button"
											onClick={() => removeSkill(index)}
											className="text-red-500">
											Remover
										</button>
									</div>
								))}
								<button
									type="button"
									onClick={() => appendSkill({ skill: "", description: "" })}
									className="mt-4 bg-green-500 text-white p-2 rounded">
									Adicionar Habilidade
								</button>
							</AccordionContent>
						</AccordionItem>

						{/* Projects */}
						<AccordionItem value="projects">
							<AccordionTrigger>Projetos</AccordionTrigger>
							<AccordionContent>
								{projectFields.map((item, index) => (
									<div key={item.id} className="mb-4">
										<FormField
											control={control}
											name={`projects.${index}.title`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Título do Projeto</FormLabel>
													<FormControl>
														<Input placeholder="Título do projeto" {...field} />
													</FormControl>
													<FormDescription>
														Insira o título do seu projeto.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name={`projects.${index}.description`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Descrição</FormLabel>
													<FormControl>
														<Input
															placeholder="Descrição do projeto"
															{...field}
														/>
													</FormControl>
													<FormDescription>
														Insira uma breve descrição do seu projeto.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name={`projects.${index}.link`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Link</FormLabel>
													<FormControl>
														<Input
															placeholder="Link para o projeto"
															{...field}
														/>
													</FormControl>
													<FormDescription>
														Insira um link relacionado ao seu projeto.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<button
											type="button"
											onClick={() => removeProject(index)}
											className="text-red-500">
											Remover
										</button>
									</div>
								))}
								<button
									type="button"
									onClick={() =>
										appendProject({ title: "", description: "", link: "" })
									}
									className="mt-4 bg-green-500 text-white p-2 rounded">
									Adicionar Projeto
								</button>
							</AccordionContent>
						</AccordionItem>

						{/* Contact */}
						<AccordionItem value="contact">
							<AccordionTrigger>Contato</AccordionTrigger>
							<AccordionContent>
								<FormField
									control={control}
									name="contact.whatsapp"
									render={({ field }) => (
										<FormItem>
											<FormLabel>WhatsApp</FormLabel>
											<FormControl>
												<Input placeholder="Seu WhatsApp" {...field} />
											</FormControl>
											<FormDescription>
												Insira seu número do WhatsApp.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.telephone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Telefone</FormLabel>
											<FormControl>
												<Input placeholder="Seu telefone" {...field} />
											</FormControl>
											<FormDescription>
												Insira seu número de telefone.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder="Seu email"
													{...field}
												/>
											</FormControl>
											<FormDescription>Insira seu email.</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.github"
									render={({ field }) => (
										<FormItem>
											<FormLabel>GitHub</FormLabel>
											<FormControl>
												<Input placeholder="Seu GitHub" {...field} />
											</FormControl>
											<FormDescription>
												Insira o link do seu GitHub.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.behance"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Behance</FormLabel>
											<FormControl>
												<Input placeholder="Seu Behance" {...field} />
											</FormControl>
											<FormDescription>
												Insira o link do seu Behance.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.linkedin"
									render={({ field }) => (
										<FormItem>
											<FormLabel>LinkedIn</FormLabel>
											<FormControl>
												<Input placeholder="Seu LinkedIn" {...field} />
											</FormControl>
											<FormDescription>
												Insira o link do seu LinkedIn.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.twitter"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Twitter</FormLabel>
											<FormControl>
												<Input placeholder="Seu Twitter" {...field} />
											</FormControl>
											<FormDescription>
												Insira o link do seu Twitter.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.instagram"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Instagram</FormLabel>
											<FormControl>
												<Input placeholder="Seu Instagram" {...field} />
											</FormControl>
											<FormDescription>
												Insira o link do seu Instagram.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.facebook"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Facebook</FormLabel>
											<FormControl>
												<Input placeholder="Seu Facebook" {...field} />
											</FormControl>
											<FormDescription>
												Insira o link do seu Facebook.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.state"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Estado</FormLabel>
											<FormControl>
												<Input placeholder="Seu estado" {...field} />
											</FormControl>
											<FormDescription>Insira seu estado.</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="contact.city"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Cidade</FormLabel>
											<FormControl>
												<Input placeholder="Sua cidade" {...field} />
											</FormControl>
											<FormDescription>Insira sua cidade.</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<SubmitButton
						type="submit"
						className="mt-4 bg-blue-500 text-white p-2 rounded"
						formAction={handleSubmit}
						pendingText="Cadastrando...">
						Salvar
					</SubmitButton>
					<FormMessage message={searchParams} />
				</form>
			</Form>
		</div>
	);
}
