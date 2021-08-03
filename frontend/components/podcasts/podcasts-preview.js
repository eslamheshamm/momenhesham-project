import PodcastPreview from "./podcast-preview";
import cn from "classnames";
export default function PodcastsPreview(props) {
	const { posts, className, podcastClassName } = props;
	return (
		<section
			className={cn(
				"grid gap-12 md:gap-6 mx-auto w-11/12 sm:w-10/12",
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
