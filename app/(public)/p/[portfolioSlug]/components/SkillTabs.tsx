"use client";

import { Skill } from "@prisma/client";
// import Image from "next/image";

type CustomTextsProps = {
	skills?: string;
};

export default function SkillTabs({
	customText,
	skills,
}: {
	customText?: CustomTextsProps;
	skills: Skill[];
}) {
	return (
		<section id="skills" className="text-center">
			<h2 className="title appear">Habilidades</h2>
			<p className="description appear">
				{customText?.skills ||
					"A brief overview of my technical skills and expertise in various technologies."}
			</p>

			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
				{skills.map((skill) => (
					<div
						className="flex flex-col items-center justify-center appear"
						key={skill.skill}>
						{/* <Image
							src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
							alt="React Logo"
							width={512}
							height={512}
						/> */}
						<div className="card-body relative">
							<h5 className="card-title text-center">{skill.skill}</h5>
              <p className="card-description text-center">{skill.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
