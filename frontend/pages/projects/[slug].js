import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/blog/post-body";
import MoreStories from "../../components/blog/more-stories";
import PostHeader from "../../components/blog/post-header";
import Layout from "../../components/layout";
import { getProjectPost, getAllProjectsWithSlug } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Form from "../../components/form";
import Comments from "../../components/comments";
import { isValid, parseISO, format } from "date-fns";
import { imageBuilder } from "../../lib/sanity";
import Link from "next/link";
export default function Post({ post, preview }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	if (!isValid(parseISO(post.date))) {
		return "No date";
	}
	const date = parseISO(post.date);
	return (
		<Layout preview={preview}>
			<section className="w-11/12 my-24 mx-auto min-h-screen">
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<Head>
							<title>{post.title}</title>
							<meta property="og:image" content={post.coverImage} />
						</Head>
						<article className="  md:w-9/12 lg:w-6/12 mx-auto my-10">
							<figure>
								{post.coverImage && (
									<img
										src={imageBuilder(post.coverImage)
											.width(1240)
											.height(640)
											.fit("scale")
											.url()}
										className=" rounded-xl object-cover w-full mb-8"
									/>
								)}
							</figure>
							{post.title && (
								<h2 className=" font-space uppercase text-2xl font-bold mb-3">
									{post.title}
								</h2>
							)}
							{post.date && (
								<time dateTime={date} className=" font-NeueLight">
									{format(date, "LLLL yyyy")}
								</time>
							)}
							{post.links && (
								<ul className="flex font-NeueBold text-sm mt-5 mb-6">
									{post.links &&
										post.links.map((link, index) => {
											if (link.route)
												return (
													<li key={index} className="flex items-center mr-5 ">
														<img
															src={imageBuilder(link.icon.asset._ref).url()}
															alt={`${link.title}`}
															className="mr-[10px] w-3 h-3"
														/>
														<Link
															as={`/${link.route}`}
															href={`/${link.route}`}
															className="hover:underline"
														>
															{link.title}
														</Link>
													</li>
												);
											if (link.link)
												return (
													<li key={index} className="flex items-center mr-5">
														<img
															src={imageBuilder(link.icon.asset._ref).url()}
															alt={`${link.title}`}
															className="mr-[10px] w-3 h-3"
														/>
														<a
															href={`${link.link}`}
															target="_blank"
															rel="noopener noreferrer"
															className="hover:underline"
														>
															{" "}
															{link.title}
														</a>
													</li>
												);
										})}
								</ul>
							)}
							{post.body && <PostBody content={post.body} />}
						</article>
						{/* 
						<Comments comments={post.comments} />
						<Form _id={post._id} /> */}
					</>
				)}
			</section>
		</Layout>
	);
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getProjectPost(params.slug, preview);
	return {
		props: {
			preview,
			post: data?.post || null,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllProjectsWithSlug();
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
