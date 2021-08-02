import PostPreview from "./post-preview";

export default function PostsPreview(props) {
	const { posts } = props;
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6   mx-auto mb-32 mt-8 w-11/12">
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
