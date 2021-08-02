import PodcastPreview from "./podcast-preview";

export default function PodcastsPreview(props) {
	const { posts } = props;
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6   mx-auto mb-32 mt-8 w-11/12">
			{posts.map((post) => (
				<PodcastPreview
					key={post._id}
					coverImage={post.coverImage}
					link={post.link}
				/>
			))}
		</section>
	);
}
