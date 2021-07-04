import Container from "../components/container";
import PostsPreview from "../components/posts-preview";
import Layout from "../components/layout";
import { getAllWidgets } from "../lib/api";
import Head from "next/head";
import Widgets from "../components/widgets";
export default function Index({ allPosts, preview }) {
	// const heroPost = allPosts[0];
	// const morePosts = allPosts.slice(1);
	const morePosts = allPosts;
	console.log(allPosts);
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Widgets | Momen Hesham</title>
				</Head>
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
				{morePosts.length > 0 && <Widgets widgets={morePosts} />}
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllWidgets(preview);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
