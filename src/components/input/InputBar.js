import React from "react";
import "./inputbar.css";
export const InputBar = (props) => {
	return (
		<input
			className="search"
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
		/>
	);
};
