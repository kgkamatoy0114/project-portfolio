import { type Project } from "../types/project";

type Props = {
	project: Project | null;
	onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
	if (!project) return null;

	return (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
			onClick={onClose}
		>
			<div
				className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-xl"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="flex justify-between items-start">
					<div>
						<h2 className="text-2xl font-semibold">{project.title}</h2>
						<p className="text-sm text-gray-500">
							Role: {project.role} • {project.status}
						</p>
					</div>

					<button onClick={onClose} className="text-gray-500 hover:text-black">
						✕
					</button>
				</div>

				{/* Description */}
				<p className="text-gray-700 mt-4 leading-relaxed">
					{project.description}
				</p>

				{/* Stack */}
				<div className="flex flex-wrap gap-2 mt-5">
					{project.stack.map((item, i) => (
						<span
							key={i}
							className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600"
						>
							{item}
						</span>
					))}
				</div>

				{/* Footer actions */}
				<div className="flex gap-3 mt-6">
					<button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
						Live Demo
					</button>
					<button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
						GitHub
					</button>
				</div>
			</div>
		</div>
	);
}
