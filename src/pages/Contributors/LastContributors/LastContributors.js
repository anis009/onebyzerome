import React from "react";
import Contributor from "../Contributor/Contributor";

const LastContributors = ({ data }) => {
	return (
		<div className="text-white bg-yellow-900 mt-5 rounded-md shadow-md p-5">
			{data?.map((contributor, index) => (
				<Contributor key={index} index={index + 11} contributor={contributor} />
			))}
		</div>
	);
};

export default LastContributors;
