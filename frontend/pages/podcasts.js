import Head from "next/head";
import Layout from "../components/layout";
import { getAllPodcasts } from "../lib/api";
import PodcastsPreview from "../components/podcasts/podcasts-preview";
export default function Index({ allPosts }) {
	const ALLPOSTS = allPosts;
	console.log(ALLPOSTS);
	return (
		<Layout>
			<Head>
				<title>Podcasts | Momen Hesham</title>
			</Head>

			{ALLPOSTS.length > 0 && (
				<PodcastsPreview
					posts={ALLPOSTS}
					className=" mt-24 mb-36 "
					podcastClassName="grid sm:grid-cols-2 gap-8 sm:gap-16 items-center place-items-center  sm:w-11/12 lg:w-9/12 mx-auto"
				/>
			)}
		</Layout>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPodcasts(preview);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
