import PostPreview from "./post-preview";

export default function PostsPreview({ posts }) {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6   mx-auto mb-32">
			{posts.map((post) => (
				<PostPreview
					key={post.slug}
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					slug={post.slug}
					categories={post.categories}
					excerpt={post.excerpt}
				/>
			))}
		</section>
	);
}
