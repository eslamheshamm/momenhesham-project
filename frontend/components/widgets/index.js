import React from "react";
import WidgetPreview from "./widget-preview";
const Widgets = (props) => {
	const { widgets } = props;
	return (
		<div className="my-24 w-11/12 mx-auto">
			{widgets.map((widget) => {
				return (
					<WidgetPreview
						key={widget.slug}
						title={widget.title}
						content={widget.body}
						slug={widget.slug}
						excerpt={widget.excerpt}
					/>
				);
			})}
		</div>
	);
};
export default Widgets;
