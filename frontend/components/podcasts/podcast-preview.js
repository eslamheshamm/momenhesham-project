import cn from "classnames";
import { imageBuilder } from "../../lib/sanity";
export default function PodcastPreview({
	coverImage,
	link,
	title,
	excerpt,
	links,
	className,
}) {
	return (
		<article className={cn(className)}>
			<figure>
				{" "}
				<a href={`${link}`} target="_blank" rel="noopener noreferrer">
					<img
						src={imageBuilder(coverImage).url()}
						className="  object-cover  rounded-[56px]"
					/>
				</a>
			</figure>

			<div className="flex flex-col">
				<h2 className="font-space font-bold text-2xl ">{title}</h2>
				<p className="my-6 font-NeueLight">{excerpt}</p>
				{links && (
					<ul className="flex font-NeueBold text-sm mt-5 mb-6">
						{links &&
							links.map((link, index) => {
								if (link.route)
									return (
										<li key={index} className="flex items-center mr-5 ">
											<img
												src={imageBuilder(link.icon.asset._ref).url()}
												alt={`${link.title}`}
												className="mr-[10px] w-3 h-3"
											/>
											<Link
												as={`/${link.route}`}
												href={`/${link.route}`}
												className="hover:underline"
											>
												{link.title}
											</Link>
										</li>
									);
								if (link.link)
									return (
										<li key={index} className="flex items-center mr-5">
											<img
												src={imageBuilder(link.icon.asset._ref).url()}
												alt={`${link.title}`}
												className="mr-[10px] w-3 h-3"
											/>
											<a
												href={`${link.link}`}
												target="_blank"
												rel="noopener noreferrer"
												className="hover:underline"
											>
												{" "}
												{link.title}
											</a>
										</li>
									);
							})}
					</ul>
				)}
			</div>
		</article>
	);
}
