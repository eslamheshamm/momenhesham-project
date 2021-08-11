import PodcastPreview from "./podcast-preview";
import cn from "classnames";
export default function PodcastsPreview(props) {
	const { posts, className, podcastClassName } = props;
	return (
		<section
			className={cn(
				"grid md:grid-cols-2 gap-12 lg:gap-32   mx-auto w-11/12 sm:w-10/12",
				className
			)}
		>
			{posts.map((post) => (
				<PodcastPreview
					key={post._id}
					coverImage={post.coverImage}
					link={post.link}
					title={post.title}
					links={post.links}
					excerpt={post.excerpt}
					className={podcastClassName}
				/>
			))}
		</section>
	);
}
