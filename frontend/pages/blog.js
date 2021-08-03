import React, { useState } from "react";
import Head from "next/head";
import PostsPreview from "../components/blog/posts-preview";
import Layout from "../components/layout";
import cn from "classnames";
import {
	getAllPostsForBlog,
	getAllPostsForDesign,
	getAllPostsForPhilosophy,
	getAllPostsForPersonal,
} from "../lib/api";
export default function Blog({
	allPosts,
	designPosts,
	philosophyPosts,
	personalPosts,
}) {
	const AllPosts = allPosts;
	const DesignPosts = designPosts;
	const PersonalPosts = personalPosts;
	const PhilosphyPosts = philosophyPosts;
	const [all, SetAll] = useState(true);
	const [design, SetDesign] = useState(false);
	const [philosphy, setPhilosophy] = useState(false);
	const [personal, setPersonal] = useState(false);
	return (
		<Layout>
			<Head>
				<title>Blog | Momen Hesham</title>
			</Head>
			<section className="w-11/12 sm:w-10/12 mx-auto mt-7 mb-8">
				{" "}
				<ul className="flex flex-wrap sm:flex-nowrap justify-around sm:justify-start   text-sm sm:text-base font-NeueLight">
					<li>
						<button
							className={cn(
								"p-3 sm:py-4 sm:px-8 w-32 sm:w-auto  border border-black rounded-3xl sm:rounded-[36px]  my-2 sm:my-0 sm:mr-4",
								all && "border-0 text-white bg-black font-NeueBold"
							)}
							onClick={() => {
								SetAll(true);
								SetDesign(false);
								setPersonal(false);
								setPhilosophy(false);
							}}
						>
							All
						</button>
					</li>
					<li>
						<button
							className={cn(
								"p-3 sm:py-4 sm:px-8 w-32 sm:w-auto  border border-black rounded-3xl sm:rounded-[36px]  my-2 sm:my-0 sm:mr-4 ",
								design && "font-NeueBold border-0 text-white bg-black"
							)}
							onClick={() => {
								SetDesign(true);
								SetAll(false);
								setPersonal(false);
								setPhilosophy(false);
							}}
						>
							Design
						</button>
					</li>
					<li>
						<button
							className={cn(
								"p-3 sm:py-4 sm:px-8 w-32 sm:w-auto  border border-black rounded-3xl sm:rounded-[36px]  my-2 sm:my-0 sm:mr-4 ",
								personal && "font-NeueBold border-0 text-white bg-black"
							)}
							onClick={() => {
								SetAll(false);
								SetDesign(false);
								setPersonal(true);
								setPhilosophy(false);
							}}
						>
							Personal
						</button>
					</li>{" "}
					<li>
						<button
							className={cn(
								"p-3 sm:py-4 sm:px-8 w-32 sm:w-auto  border border-black rounded-3xl sm:rounded-[36px]  my-2 sm:my-0 mx-0 ",
								philosphy && "font-NeueBold border-0 text-white bg-black"
							)}
							onClick={() => {
								SetAll(false);
								SetDesign(false);
								setPersonal(false);
								setPhilosophy(true);
							}}
						>
							Philosophy
						</button>
					</li>
				</ul>
			</section>
			{all && AllPosts.length > 0 && <PostsPreview posts={AllPosts} />}
			{design && DesignPosts.length > 0 && <PostsPreview posts={DesignPosts} />}
			{personal && PersonalPosts.length > 0 && (
				<PostsPreview posts={PersonalPosts} />
			)}
			{philosphy && PhilosphyPosts.length > 0 && (
				<PostsPreview posts={PhilosphyPosts} />
			)}
		</Layout>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForBlog(preview);
	const designPosts = await getAllPostsForDesign(preview);
	const philosophyPosts = await getAllPostsForPhilosophy(preview);
	const personalPosts = await getAllPostsForPersonal(preview);
	return {
		props: { allPosts, designPosts, philosophyPosts, personalPosts, preview },
		revalidate: 1,
	};
}
