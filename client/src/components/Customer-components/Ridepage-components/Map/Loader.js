import React from "react";
import loading from "../../../../images/map_loader.gif"

export default function mapLoader() {
	return (
		<>
		<img src={loading} alt="loading animation" />
        <p>Loading...</p>
		</>
	);
}
