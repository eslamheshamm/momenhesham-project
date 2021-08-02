import Head from "next/head";
import PostsPreview from "../components/blog/posts-preview";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Link from "../components/Link";
export default function Index({ allPosts }) {
	// const heroPost = allPosts[0];
	// const morePosts = allPosts.slice(1);
	const ALLPOSTS = allPosts;
	return (
		<Layout>
			<Head>
				<title>Blog | Momen Hesham</title>
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

			{/* {heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)} */}

			{ALLPOSTS.length > 0 && <PostsPreview posts={ALLPOSTS} />}
		</Layout>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
