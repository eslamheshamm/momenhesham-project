import Head from "next/head";
import Layout from "../components/layout";
import { getAllPodcasts } from "../lib/api";
import PodcastsPreview from "../components/podcasts/podcasts-preview";
export default function Index({ allPosts }) {
	const ALLPOSTS = allPosts;
	return (
		<Layout>
			<Head>
				<title>Podcasts | Momen Hesham</title>
			</Head>

			{ALLPOSTS.length > 0 && <PodcastsPreview posts={ALLPOSTS} />}
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
