import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Image from "next/image";
export default function CaseStudies({ allPosts, preview }) {
	// const heroPost = allPosts[0];
	// const morePosts = allPosts.slice(1);
	const morePosts = allPosts;

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Case Studies | Momen Hesham</title>
				</Head>
				<section className="min-h-screen flex flex-col justify-center items-center my-10 md:my-0">
					<Image
						src="/coming-soon.svg"
						width={345}
						height={272}
						alt="coming soon"
					/>
					<h2 className=" font-NeueBold text-4xl mt-8 mb-4">
						Work in Progress.
					</h2>
					<p className=" font-Neue ">Designer life is messy</p>
				</section>
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
