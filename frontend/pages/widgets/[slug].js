import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { getWidgetPost, getAllWidgetsWithSlug } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Form from "../../components/form";
import Comments from "../../components/comments";
import BlockContent from "@sanity/block-content-to-react";
import markdownStyles from "../../components/markdown-styles.module.css";
export default function Widget({ post, preview }) {
	console.log(post, "post");
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout preview={preview}>
			<section className="w-10/12 my-24 mx-auto">
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<Head>
							<title>{post.title}</title>
						</Head>

						<article className="  md:w-9/12 lg:w-6/12 mx-auto my-10">
							<h1 className="  font-space text-2xl uppercase font-bold">
								{post.title}
							</h1>
							<div className="my-6">
								<BlockContent
									blocks={post.body}
									projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
									dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
									className={markdownStyles.markdown}
								/>
							</div>
							<ul className="flex items-center">
								<li className="mr-4">
									<button>
										<a
											href="http://google.com"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center font-NeueBold"
										>
											<svg
												width="16"
												height="14"
												viewBox="0 0 16 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="mr-2"
											>
												<path
													d="M5.03181 13.4966C11.0698 13.4966 14.3718 8.49826 14.3718 4.16387C14.3718 4.0219 14.3689 3.88057 14.3625 3.73988C15.0035 3.27688 15.5606 2.6991 16 2.04137C15.4118 2.3026 14.7789 2.47846 14.1149 2.55776C14.7926 2.15168 15.3129 1.5093 15.5584 0.74352C14.9241 1.11923 14.2218 1.39229 13.4739 1.53972C12.8749 0.90216 12.0221 0.503387 11.0778 0.503387C9.26495 0.503387 7.79491 1.97234 7.79491 3.78304C7.79491 4.04044 7.8237 4.29081 7.88003 4.53096C5.15174 4.39379 2.7325 3.08856 1.11341 1.10388C0.831492 1.58862 0.668933 2.15169 0.668933 2.75251C0.668933 3.8905 1.24847 4.89513 2.12975 5.48285C1.59118 5.46623 1.08525 5.3185 0.643054 5.07261C0.642571 5.08637 0.642569 5.09979 0.642569 5.1145C0.642569 6.70304 1.7741 8.02934 3.27614 8.32988C3.0003 8.40502 2.71008 8.44531 2.41055 8.44531C2.19935 8.44531 1.99358 8.42454 1.79359 8.38616C2.2115 9.68945 3.42336 10.6379 4.86012 10.6644C3.73659 11.5443 2.32126 12.0684 0.783025 12.0684C0.518384 12.0684 0.256947 12.0534 0 12.023C1.45281 12.9535 3.17789 13.4964 5.03199 13.4964"
													fill="black"
												/>
											</svg>
											<span>Tweet</span>
										</a>
									</button>
								</li>
								<li>
									<button>
										<a
											href="http://google.com"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center font-NeueBold"
										>
											<svg
												width="13"
												height="10"
												viewBox="0 0 13 10"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="mr-2"
											>
												<path
													d="M0.702707 7.70718C0.638616 7.83375 0.661664 7.98702 0.760146 8.08915C0.858627 8.19127 1.01096 8.21987 1.13977 8.16042L2.806 7.39139C4.2064 6.74506 5.73463 6.44938 7.26022 6.51893C7.27834 7.00883 7.30523 7.4985 7.34089 7.98768L7.38652 8.61366C7.4142 8.99342 7.83765 9.20571 8.15851 9.00069C9.55117 8.11081 10.7619 6.96418 11.7261 5.62191L12.0329 5.19483C12.1164 5.07862 12.1164 4.92209 12.0329 4.80588L11.7261 4.3788C10.7619 3.03653 9.55117 1.8899 8.15851 1.00002C7.83765 0.794994 7.4142 1.00729 7.38652 1.38705L7.34089 2.01303C7.31028 2.43293 7.28613 2.85319 7.26845 3.27365H6.83972C4.4524 3.27364 2.26792 4.61608 1.18946 6.74591L0.702707 7.70718Z"
													fill="black"
												/>
											</svg>
											<span>Share</span>
										</a>
									</button>
								</li>
							</ul>
						</article>
						{/* 
						<Comments comments={post.comments} />
						<Form _id={post._id} /> */}
						{/* 
						<SectionSeparator />
						{morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
					</>
				)}
			</section>
		</Layout>
	);
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getWidgetPost(params.slug, preview);
	return {
		props: {
			preview,
			post: data?.post || null,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllWidgetsWithSlug();
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
