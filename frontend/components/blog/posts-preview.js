import PostPreview from "./post-preview";
import cn from "classnames";
export default function PostsPreview(props) {
	const { posts, className } = props;
	return (
		<section
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6   mx-auto w-11/12 sm:w-10/12",
				className
			)}
		>
			{posts.map((post) => (
				<PostPreview
					key={post._id}
					title={post.title}
					coverImage={post.coverImage}
					slug={post.slug}
					excerpt={post.excerpt}
				/>
			))}
		</section>
	);
}
