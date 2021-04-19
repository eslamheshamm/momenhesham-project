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
					<title>Freebies | Momen Hesham</title>
				</Head>
				<div className="flex flex-col items-center justify-center min-h-screen ">
					<h2 className="text-3xl  xl:text-6xl font-bold mb-6">Freebies</h2>
					<h3 className="sm:text-lg md:text-xl lg:text-3xl ">Coming Soon!</h3>
				</div>
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
