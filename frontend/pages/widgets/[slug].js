import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { getWidgetPost, getAllWidgetsWithSlug } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import markdownStyles from "../../components/markdown-styles.module.css";
import { TwitterShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Widget({ post, preview }) {
	const [copy, setCopy] = React.useState(false);
	function blocksToText(blocks) {
		return blocks.map((block) =>
			block.children.map((child) => child.text).join("")
		);
	}
	const text = blocksToText(post.body);
	const tweet = text[0];

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
									<TwitterShareButton
										title={`${post.title} 
${tweet.slice(0, 180).trim()}...
							 `}
										via="momenheshamahmed"
										url={`https://momenhesham-portfolio.vercel.app/widgets/${post.slug}`}
									>
										<div className="flex items-center font-NeueBold">
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
										</div>
									</TwitterShareButton>
								</li>

								<li className="flex ">
									<CopyToClipboard
										text={`https://momenhesham-portfolio.vercel.app/widgets/${post.slug}`}
										onCopy={() => setCopy(true)}
									>
										<button className="flex items-center font-NeueBold focus:outline-none">
											<svg
												width="12"
												height="12"
												viewBox="0 0 12 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="mr-2"
											>
												<path
													d="M0.166748 4C0.166748 1.88291 1.88299 0.166672 4.00008 0.166672H8.67532C8.95146 0.166672 9.17532 0.390529 9.17532 0.666672C9.17532 0.942814 8.95146 1.16667 8.67532 1.16667H4.00008C2.43527 1.16667 1.16675 2.4352 1.16675 4V8.73792C1.16675 9.01406 0.94289 9.23792 0.666748 9.23792C0.390606 9.23792 0.166748 9.01406 0.166748 8.73792V4Z"
													fill="black"
												/>
												<path
													d="M10.2684 2.52884C8.10782 2.28736 5.89237 2.28736 3.73173 2.52884C3.11622 2.59764 2.62159 3.08203 2.54904 3.70232C2.29279 5.89331 2.29279 8.1067 2.54904 10.2977C2.62159 10.918 3.11622 11.4024 3.73173 11.4712C5.89237 11.7126 8.10782 11.7126 10.2684 11.4712C10.884 11.4024 11.3786 10.918 11.4511 10.2977C11.7074 8.1067 11.7074 5.89331 11.4511 3.70232C11.3786 3.08203 10.884 2.59764 10.2684 2.52884Z"
													fill="black"
												/>
											</svg>
											<span>Copy Link</span>
										</button>
									</CopyToClipboard>
									{copy && <span className="mx-4">Copied!</span>}
								</li>
							</ul>
						</article>
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
