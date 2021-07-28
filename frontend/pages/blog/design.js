import React from "react";
import Head from "next/head";

import Link from "../../components/Link";
import Layout from "../../components/layout";
import { getAllPostsForDesign } from "../../lib/api";
import PostsPreview from "../../components/posts-preview";
export default function Design({ designPosts }) {
	const Posts = designPosts;
	console.log(Posts);
	return (
		<Layout>
			<Head>
				<title>Design | Momen Hesham</title>
			</Head>
			<section className="w-11/12 mx-auto mt-16">
				{" "}
				<ul className="flex my-6">
					<li>
						<Link
							href="/blog"
							activeClassName="font-bold border-0 text-white bg-black"
						>
							<a className="py-4 px-8 border border-black rounded-[36px] mr-4">
								All
							</a>
						</Link>
					</li>
					<li>
						<Link
							href="/blog/design"
							activeClassName="font-bold border-0 text-white bg-black"
						>
							<a className="py-4 px-8 border border-black rounded-[36px] mr-4">
								Design
							</a>
						</Link>
					</li>{" "}
					<li>
						<Link
							href="/blog/personal"
							activeClassName="font-bold border-0 text-white bg-black"
						>
							<a className="py-4 px-8 border border-black rounded-[36px] mr-4">
								Personal
							</a>
						</Link>
					</li>{" "}
					<li>
						<Link
							href="/blog/philosophy"
							activeClassName="font-bold border-0 text-white bg-black"
						>
							<a className="py-4 px-8 border border-black rounded-[36px]">
								Philosophy
							</a>
						</Link>
					</li>
				</ul>
			</section>
			{Posts && <PostsPreview posts={Posts} />}
		</Layout>
	);
}
export async function getStaticProps({ preview = false }) {
	const designPosts = await getAllPostsForDesign(preview);
	return {
		props: { designPosts, preview },
		revalidate: 1,
	};
}
