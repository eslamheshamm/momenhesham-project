import { isValid, parseISO, format } from "date-fns";

export default function Date({ dateString }) {
	if (!isValid(parseISO(dateString))) {
		return "No date";
	}
	const date = parseISO(dateString);
	return (
		<time dateTime={dateString} className="text-sm text-[#646464] font-bold">
			{format(date, "LLLL	d, yyyy")}
		</time>
	);
}
