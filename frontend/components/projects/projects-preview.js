import ProjectPreview from "./project-preview";

export default function ProjectsPreview(props) {
	const { posts } = props;
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-5 md:gap-6   mx-auto mb-32 mt-24 w-11/12">
			{posts.map((post) => (
				<ProjectPreview
					key={post.slug}
					coverImage={post.coverImage}
					slug={post.slug}
				/>
			))}
		</section>
	);
}
