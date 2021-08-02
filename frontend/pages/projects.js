import Head from "next/head";
import Layout from "../components/layout";
import { getAllProjects } from "../lib/api";
import ProjectsPreview from "../components/projects/projects-preview";
export default function Projects({ allPosts }) {
	const ALLPOSTS = allPosts;
	return (
		<Layout>
			<Head>
				<title>Projects | Momen Hesham</title>
			</Head>

			{ALLPOSTS.length > 0 && <ProjectsPreview posts={ALLPOSTS} />}
		</Layout>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllProjects(preview);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
