import Image from "next/image";
const SectionThree = () => {
	return (
		<section className="min-h-screen w-11/12 mx-auto text-center">
			<h2 className="font-NeueBold text-4xl md:text-6xl my-10">
				I Love Podcasting Too
			</h2>
			<p className="font-Neue opacity-70 mb-28">
				Made for music events, Shazam Band allows you to put your phone away
				while making <br className="hidden md:block" /> sure you never miss a
				song.
			</p>
			<div className=" relative">
				<a href="http://google.com" target="_blank" rel="noopener noreferrer">
					<Image
						src={"/podcast.svg"}
						alt="listen to ask designer podcast"
						width={600}
						height={600}
						quality={100}
					/>
				</a>
			</div>
		</section>
	);
};
export default SectionThree;
