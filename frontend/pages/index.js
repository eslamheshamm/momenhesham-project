import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import { getAllPostsForHome } from "../lib/api";
import ProjectsPreview from "../components/projects/projects-preview";
import PostsPreview from "../components/blog/posts-preview";
import PodcastsPreview from "../components/podcasts/podcasts-preview";
import { imageBuilder } from "../lib/sanity";
import SectionOne from "../components/home/sectionOne";
export default function Index({ allPosts }) {
	const AllPosts = allPosts;

	return (
		<Layout>
			<Head>
				<title>Home | Momen Hesham</title>
			</Head>
			<SectionOne />
			<section className="w-10/12 mx-auto  mt-44">
				<h2 className="inline-block">
					<Link href="/projects">
						<a href="/projects" className="flex items-center hover:underline">
							<span className="text-2xl md:text-6xl font-NeueBold">
								Projects
							</span>
							<Arrow className="ml-5 " />
						</a>
					</Link>
				</h2>
				<p className="font-NeueLight opacity-70 mt-9">
					Collection of projects I've worked on and would love to get your
					feedback on{" "}
				</p>
			</section>
			{AllPosts && AllPosts.projects.length > 0 && (
				<ProjectsPreview className="mt-[104px]" posts={AllPosts.projects} />
			)}
			<section className="w-10/12 mx-auto mt-[104px] ">
				<h2 className="inline-block">
					<Link href="/blog">
						<a href="/blog" className="flex items-center hover:underline">
							<span className="text-2xl md:text-6xl font-NeueBold">
								I Love Writing!
							</span>
							<Arrow className="ml-5 " />
						</a>
					</Link>
				</h2>
				<p className="font-NeueLight opacity-70 mt-9">
					I love to share thoughts and discuss it to see the different
					perspectives, <br className="hidden md:block" />
					and idea is more clear when it comes out.
				</p>
			</section>
			{AllPosts && AllPosts.blogPosts.length > 0 && (
				<PostsPreview className="mt-20" posts={AllPosts.blogPosts} />
			)}
			<section className="w-10/12 mx-auto mt-52 ">
				<h2 className="inline-block">
					<Link href="/podcasts">
						<a href="/podcasts]" className="flex items-center hover:underline">
							<span className="text-2xl md:text-6xl font-NeueBold">
								I Love Podcasting Too!
							</span>
							<Arrow className="ml-5 " />
						</a>
					</Link>
				</h2>
				<p className="font-NeueLight opacity-70 mt-9">
					another platform for sharing thoughts and discussing it with people
					who has <br className="hidden md:block" /> good experience in the
					industry or love discussions.{" "}
				</p>
			</section>

			<section className="mt-[104px] w-11/12 sm:w-10/12 mx-auto  grid md:grid-cols-2 gap-6 place-items-center items-center mb-48">
				{AllPosts &&
					AllPosts.podcasts.length > 0 &&
					AllPosts.podcasts.map((podcast) => {
						console.log(podcast);
						return (
							<figure key={podcast._id}>
								<a
									href={`${podcast.link}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={imageBuilder(podcast.coverImage).url()}
										className="  object-cover rounded-3xl  lg:rounded-[56px] "
									/>
								</a>
							</figure>
						);
					})}
			</section>
		</Layout>
	);
}
function Arrow(props) {
	return (
		<svg width={16} height={16} viewBox="0 0 11 10" fill="none" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.5.5A.5.5 0 015 0h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V1H5a.5.5 0 01-.5-.5z"
				fill="#000"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.354.146a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"
				fill="#000"
			/>
		</svg>
	);
}
export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
