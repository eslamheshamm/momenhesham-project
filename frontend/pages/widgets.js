import Layout from "../components/layout";
import { getAllWidgets } from "../lib/api";
import Head from "next/head";
import Widgets from "../components/widgets";
export default function Index({ allPosts, preview }) {
	const morePosts = allPosts;
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Widgets | Momen Hesham</title>
				</Head>
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
