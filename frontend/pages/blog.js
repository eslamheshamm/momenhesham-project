import React, { useState } from "react";
import Head from "next/head";
import PostsPreview from "../components/blog/posts-preview";
import Layout from "../components/layout";
import {
	getAllPostsForHome,
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
			<section className="w-11/12 mx-auto mt-16">
				{" "}
				<ul className="flex my-6">
					<li>
						<button
							className={
								all
									? "py-4 px-8 rounded-[36px] mr-4 font-bold border-0 text-white bg-black"
									: "py-4 px-8 border border-black rounded-[36px] mr-4"
							}
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
							className={
								design
									? "py-4 px-8 rounded-[36px] mr-4 font-bold border-0 text-white bg-black"
									: "py-4 px-8 border border-black rounded-[36px] mr-4"
							}
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
							className={
								personal
									? "py-4 px-8 rounded-[36px] mr-4 font-bold border-0 text-white bg-black"
									: "py-4 px-8 border border-black rounded-[36px] mr-4"
							}
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
							className={
								philosphy
									? "py-4 px-8 rounded-[36px] mr-4 font-bold border-0 text-white bg-black"
									: "py-4 px-8 border border-black rounded-[36px] mr-4"
							}
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
	const allPosts = await getAllPostsForHome(preview);
	const designPosts = await getAllPostsForDesign(preview);
	const philosophyPosts = await getAllPostsForPhilosophy(preview);
	const personalPosts = await getAllPostsForPersonal(preview);
	return {
		props: { allPosts, designPosts, philosophyPosts, personalPosts, preview },
		revalidate: 1,
	};
}
