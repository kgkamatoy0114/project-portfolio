import { useState } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="bg-gray-950 text-white text-center p-4 text-white shadow-lg">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold">Welcome</h1>

				<div className="hidden md:flex gap-6">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#projects">Projects</a>
					<a href="#skills">Skills</a>
					<a href="#contact">Contact</a>
				</div>

				<button className="md:hidden" onClick={() => setOpen(!open)}>
					☰
				</button>
			</div>

			{open && (
				<div className="md:hidden flex flex-col bg-black p-4 gap-4">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#projects">Projects</a>
					<a href="#skills">Skills</a>
					<a href="#contact">Contact</a>
				</div>
			)}
		</nav>
	);
}
