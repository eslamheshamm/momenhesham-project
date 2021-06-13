const Card = (props) => {
	const { title, text } = props;
	return (
		<div className="p-6 border rounded-lg">
			<h2 className="mb-[10px] text-[22px] font-NeueBold uppercase">{title}</h2>
			<p className="font-Neue opacity-60">{text}</p>
		</div>
	);
};
const SectionTwo = () => {
	return (
		<section className="w-11/12 mx-auto min-h-screen">
			<h1 className="font-NeueBold text-5xl md:text-6xl my-9">What I do?</h1>
			<p className="font-Neue mb-28 opacity-50">
				Understand the most critical areas of improvements for your <br />
				product. Extract powerful insights and assumptions to test.
			</p>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 ">
				<Card
					title="UX Audit"
					text="Understand the most critical areas of improvements for your product. Extract powerful insights and assumptions to test.
"
				/>
				<Card
					title=" User research"
					text="Understand the most critical areas of improvements for your product. Extract powerful insights and assumptions to test.
"
				/>{" "}
				<Card
					title="Product strategy"
					text="Understand the most critical areas of improvements for your product. Extract powerful insights and assumptions to test.
"
				/>{" "}
				<Card
					title="Design systems"
					text="Understand the most critical areas of improvements for your product. Extract powerful insights and assumptions to test.
"
				/>{" "}
				<Card
					title="Product feature & MVP"
					text="Understand the most critical areas of improvements for your product. Extract powerful insights and assumptions to test.
"
				/>
			</div>
		</section>
	);
};
export default SectionTwo;
