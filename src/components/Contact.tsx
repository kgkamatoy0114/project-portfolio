export default function Contact() {
	return (
		<section
			id="contact"
			className="min-h-screen flex flex-col justify-center items-center bg-black text-white"
		>
			<h2 className="text-3xl font-bold mb-4">Contact Me</h2>
			<p>Email: kgkamatoy0114@gmail.com</p>
			<p>mobile/viber: 09951389332</p>
			<a
				href="/KRISTAL_KAMATOY.pdf"
				download
				className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition"
			>
				⬇ Download CV
			</a>
		</section>
	);
}
