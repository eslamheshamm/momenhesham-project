const SectionOne = () => {
	return (
		<section className=" relative flex flex-col items-center">
			<article className="w-11/12 sm:w-10/12 mx-auto h-full mt-36">
				<h2 className="mt-2 font-NeueBold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
					Hey, I’m Momen <br />{" "}
					<span className=" font-NeueLight">Digital Maker</span>
				</h2>
				<p className="font-Neue mt-4 mb-10 text-xl sm:text-2xl">
					Always Curios, Always Questioning!
				</p>
			</article>
			<div className="gradientOne w-[550px] h-[550px] z-[-10]  hidden md:block absolute right-0 top-32"></div>
			<div className="gradientTwo w-[550px] h-[550px] z-[-10]  hidden md:block absolute right-0 -bottom-44"></div>
		</section>
	);
};
export default SectionOne;
