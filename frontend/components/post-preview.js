import CoverImage from "./cover-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
export default function PostPreview({
	title,
	coverImage,
	excerpt,
	slug,
	categories,
}) {
	return (
		<article className="w-full p-6 border rounded-3xl">
			<Link as={`/posts/${slug}`} href="/posts/[slug]">
				<img
					src={imageBuilder(coverImage)
						.width(1240)
						.height(640)
						.fit("scale")
						.url()}
					className="rounded-3xl object-cover w-[352px] h-[362px] cursor-pointer "
				/>
			</Link>
			<h3 className="text-xl sm:text-2xl lg:text-2xl font-bold mt-4  ">
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a className="hover:underline ">{title}</a>
				</Link>
			</h3>
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
