const SectionOne = () => {
	return (
		<section className=" relative min-h-screen w-full flex flex-col items-center">
			<article className="w-10/12 mx-auto h-full mt-36">
				<h2 className="mt-2 font-NeueBold text-6xl leading-tight">
					Hey, I’m Momen <br />{" "}
					<span className="font-Neue">Digital Product Designer</span>
				</h2>
				<p className="font-Neue mt-4 mb-10 text-2xl">
					Always Curios, Always Questioning!
				</p>
				<button className="py-5 px-10 font-NeueBold text-sm bg-[#2B2B2B] text-white rounded-3xl">
					{" "}
					<a href="http://googl.com" target="_blank" rel="noopener noreferrer">
						Let’s Work Together?
					</a>
				</button>
			</article>
			<div className="gradientOne w-[550px] h-[550px]   absolute right-0  top-0"></div>
			<div className="gradientTwo w-[550px] h-[550px]   absolute right-0 bottom-0"></div>
		</section>
	);
};
export default SectionOne;
