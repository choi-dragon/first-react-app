import React from "react";
import "./card.css";

function Card(props) {
	return (
		<div className="card-container">
			<img
				alt="monster"
				src={`https://robohash.org/${props.objects.id}?set=set2&size=180x180`}
			/>
			<h1>{props.objects.name}</h1>
			<p>{props.objects.email}</p>
		</div>
	);
}

export default Card;
