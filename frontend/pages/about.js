import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Reading, Ball, Piano, Movies } from "../components/about/icons";

const About = () => {
	return (
		<Layout>
			<Head>
				<title>About Me | Momen Hesham</title>
			</Head>
			<section className="w-11/12 sm:w-10/12 grid md:grid-cols-[1fr,2fr] gap-6 mx-auto my-7">
				<div className="flex items-start justify-center">
					<figure className="">
						<img
							src="/momen.png"
							alt="Momen Hesham"
							className="w-full h-full"
						/>
					</figure>
				</div>
				<article>
					<h2 className="uppercase font-space font-bold text-2xl mb-6">
						About me
					</h2>
					<p className="font-NeueLight mb-14 w-12/12 sm:w-11/12 lg:w-full">
						Always curious, always questioning! That's who am I, someone who
						loves always knows and learns new things and asking some stupid
						questions to understand more.
						<br /> <br />
						Started at design 4 or 5 years ago, not sure really because the
						journey itself started since I was a kid "I still young", but the
						pro career start at some point when I got paid 😀
					</p>
					<h2 className="uppercase font-space font-bold text-2xl mb-6">
						Hobbies
					</h2>
					<ul className="flex flex-wrap">
						<li className="bg-[#F9F9F9] p-6 mt-2 font-NeueLight flex items-center mr-6 rounded-2xl">
							<span className="mr-4">
								<Reading />
							</span>
							<span>Reading</span>
						</li>
						<li className="bg-[#F9F9F9] p-6 mt-2 font-NeueLight flex items-center mr-6 rounded-2xl">
							<span className="mr-4">
								<Piano />
							</span>
							<span>Piano</span>
						</li>
						<li className="bg-[#F9F9F9] p-6 mt-2 font-NeueLight flex items-center mr-6 rounded-2xl">
							<span className="mr-4">
								<Movies />
							</span>
							<span>Watching Movies</span>
						</li>
						<li className="bg-[#F9F9F9] p-6 mt-2 font-NeueLight flex items-center rounded-2xl">
							<span className="mr-4">
								<Ball />
							</span>
							<span>Playing Football</span>
						</li>
					</ul>
					<h2 className="uppercase font-space font-bold text-2xl mt-14">
						I’m on Adplist!
					</h2>
					<p className="font-NeueLight my-7">
						I’m Mentoring on Adplist, let’s have a talk and discussi
					</p>
					<button className="py-5 px-10 bg-black rounded-3xl font-NeueBold text-sm text-white">
						<a href="http://" target="_blank" rel="noopener noreferrer">
							Book Session
						</a>
					</button>
				</article>
			</section>
		</Layout>
	);
};
export default About;
