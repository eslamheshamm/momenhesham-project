import Link from "next/link";
import { imageBuilder } from "../../lib/sanity";
export default function ProjectPreview({ coverImage, slug }) {
	return (
		<article className="w-full h-full">
			<Link as={`/projects/${slug}`} href="/projects/[slug]">
				<img
					src={imageBuilder(coverImage)
						.width(1240)
						.height(640)
						.fit("scale")
						.url()}
					className="   cursor-pointer  rounded-2xl "
				/>
			</Link>

			{/* <div>
				<p className=" my-6 opacity-60 break-words">{excerpt}</p>
			</div>
			<ul className="flex">
				{categories &&
					categories.map((category, index) => (
						<li key={index++} className="font-bold mr-4">
							{category}
						</li>
					))}
			</ul> */}
		</article>
	);
}
