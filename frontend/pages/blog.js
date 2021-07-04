import Container from "../components/container";
import PostsPreview from "../components/posts-preview";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts, preview }) {
	// const heroPost = allPosts[0];
	// const morePosts = allPosts.slice(1);
	const morePosts = allPosts;

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Blog | Momen Hesham</title>
				</Head>
				<div className="text-center my-20 md:my-24  ">
					<h2 className="text-4xl md:text-5xl  xl:text-6xl font-bold mb-6">
						Blog
					</h2>
					<h3 className="sm:text-lg md:text-xl lg:text-3xl ">
						Always Curios, Always Questioning!
					</h3>
				</div>
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
				{morePosts.length > 0 && <PostsPreview posts={morePosts} />}
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
