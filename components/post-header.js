import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
export default function PostHeader({ title, coverImage, date, categories }) {
	return (
		<div className="mt-20 md:mt-32 ">
			<CoverImage title={title} imageObject={coverImage} url={coverImage} />
			<div className="flex items-center mt-24">
				<ul className="flex">
					{categories &&
						categories.map((category, index) => (
							<li
								key={index++}
								className="font-bold text-sm text-[#646464] mr-2"
							>
								{category}
							</li>
						))}
				</ul>
				<div className="h-1 w-1 bg-[#646464] rounded-full mr-2"></div>
				<Date dateString={date} />
			</div>
			<PostTitle>{title}</PostTitle>
		</div>
	);
}
