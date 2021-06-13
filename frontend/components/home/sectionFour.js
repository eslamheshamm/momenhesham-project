import Image from "next/image";
const Card = (props) => {
	const { name, position, text, img } = props;
	return (
		<div className="p-6 border rounded-lg">
			<figure>
				{img ? (
					<Image src={img} width={56} height={56} className=" rounded-full" />
				) : (
					<div className=" w-14 h-14 rounded-full bg-[#DEDEDE] mb-3"></div>
				)}
			</figure>
			<h3 className=" font-NeueBold text-xl">{name}</h3>
			<span className="my-2 text-xs opacity-30">{position}</span>
			<p className=" opacity-60">{text}</p>
		</div>
	);
};
const SectionFour = () => {
	return (
		<section className="min-h-screen w-11/12 mx-auto">
			<h2 className="text-4xl md:text-6xl font-NeueBold my-20">
				What People I’ve worked with said?
			</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 font-Neue ">
				<div className="p-6 border rounded-lg">
					<div className=" w-14 h-14 rounded-full bg-[#DEDEDE] mb-3"></div>
					<h3 className=" font-NeueBold text-xl">Rami Elsawy</h3>
					<span className="my-2 text-xs opacity-30">CEO at Sevenhugs</span>
					<p className=" opacity-60">
						Understand the most critical areas of improvements for your product.
						Extract powerful insights and assumptions to test.
					</p>
				</div>
				<Card
					name="Rami Elsawy"
					position="CEO at Sevenhugs"
					text="Understand the most critical areas of improvements for your product.
						Extract powerful insights and assumptions to test."
				/>{" "}
				<Card
					name="Rami Elsawy"
					position="CEO at Sevenhugs"
					text="Understand the most critical areas of improvements for your product.
						Extract powerful insights and assumptions to test."
				/>
			</div>
		</section>
	);
};
export default SectionFour;
