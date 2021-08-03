import Link from "next/link";
import { imageBuilder } from "../../lib/sanity";
export default function PostPreview({ title, coverImage, excerpt, slug }) {
	return (
		<article className="w-full">
			<Link as={`/posts/${slug}`} href="/posts/[slug]">
				<img
					src={imageBuilder(coverImage)
						.width(1240)
						.height(640)
						.fit("scale")
						.url()}
					className=" object-cover cursor-pointer  rounded-2xl"
				/>
			</Link>
			<h3 className="text-xl sm:text-2xl font-NeueLight font-medium  my-4 ">
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a className="hover:underline  ">{title}</a>
				</Link>
			</h3>
			<p className=" font-NeueLight font-medium opacity-70">{excerpt}</p>
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
