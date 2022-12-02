import React from "react";
import loading from "../../../../images/Loader.gif"

export default function mapLoader() {
	return (
		<>
		<img src={loading} alt="loading animation" />
        <p>Loading...</p>
		</>
	);
}
