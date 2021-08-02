import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/blog/post-body";
import MoreStories from "../../components/blog/more-stories";
import PostHeader from "../../components/blog/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Form from "../../components/form";
import Comments from "../../components/comments";

export default function Post({ post, morePosts, preview }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout preview={preview}>
			<section className="w-11/12 my-24 mx-auto">
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article className="  md:w-9/12 lg:w-6/12 mx-auto my-10">
							<Head>
								<title>{post.title}</title>
								<meta property="og:image" content={post.coverImage} />
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								categories={post.categories}
							/>
							<PostBody content={post.body} />
						</article>
						{/* 
						<Comments comments={post.comments} />
						<Form _id={post._id} /> */}

						<SectionSeparator />
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</>
				)}
			</section>
		</Layout>
	);
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getPostAndMorePosts(params.slug, preview);
	return {
		props: {
			preview,
			post: data?.post || null,
			morePosts: data?.morePosts || null,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug();
	return {
		paths:
			allPosts?.map((post) => ({
				params: {
					slug: post.slug,
				},
			})) || [],
		fallback: true,
	};
}
