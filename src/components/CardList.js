import React from "react";
import "./card-list.css";
import Card from "../card/Card";

export const CardList = (props) => {
	return (
		<div className="card-list">
			{props.users.map((objects, index) => (
				<Card key={index} objects={objects} />
			))}
		</div>
	);
};
