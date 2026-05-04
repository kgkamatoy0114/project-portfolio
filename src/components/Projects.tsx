import { useState } from "react";
import ProjectModal from "../modals/project-modals";
import { type Project } from "../types/project";

const projects: Project[] = [
	{
		title: "Property Booking System",
		role: "Full Stack",
		status: "Production",
		description:
			"Full booking platform with stay extensions, invoice generation, and real-time API integration.",
		stack: ["React", "TypeScript", "Node.js", "API"],
	},
	{
		title: "Simple CRUD Form",
		role: "Frontend",
		status: "Live",
		description:
			"Simple CRUD form with create, read, update, and delete functionality.",
		stack: ["Vue", "Vuetify", "API"],
	},
];

export default function Projects() {
	const [selected, setSelected] = useState<Project | null>(null);

	return (
		<section id="projects" className="bg-gray-50 py-24">
			<div className="max-w-6xl mx-auto px-4">
				{/* Header */}
				<div className="mb-10">
					<h2 className="text-3xl font-semibold">Projects</h2>
					<p className="text-gray-500 mt-2">
						Click a project to view full details
					</p>
				</div>

				{/* Cards */}
				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project, i) => (
						<div
							key={i}
							onClick={() => setSelected(project)}
							className="cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition"
						>
							{/* Top */}
							<div className="flex justify-between items-center">
								<h3 className="text-lg font-semibold">{project.title}</h3>

								<span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
									{project.status}
								</span>
							</div>

							{/* Role */}
							<p className="text-sm text-gray-500 mt-1">Role: {project.role}</p>

							{/* Description preview */}
							<p className="text-sm text-gray-600 mt-3 line-clamp-2">
								{project.description}
							</p>

							{/* Stack */}
							<div className="flex flex-wrap gap-2 mt-4">
								{project.stack.slice(0, 3).map((item, i) => (
									<span
										key={i}
										className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600"
									>
										{item}
									</span>
								))}
							</div>

							<p className="text-xs text-gray-400 mt-4">
								Click to view details →
							</p>
						</div>
					))}
				</div>

				{/* Modal */}
				<ProjectModal project={selected} onClose={() => setSelected(null)} />
			</div>
		</section>
	);
}
