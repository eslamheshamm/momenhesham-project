import ProjectPreview from "./project-preview";
import cn from "classnames";
export default function ProjectsPreview(props) {
	const { posts, className } = props;
	return (
		<section
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-5 md:gap-6   mx-auto w-11/12 sm:w-10/12",
				className
			)}
		>
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
