import React from "react";
import Contributor from "../Contributor/Contributor";

const TopTenContributors = ({ data }) => {
	return (
		<div className="text-white bg-teal-800 rounded-md shadow-md p-5">
			<h1 className="text-2xl mb-5 font-semibold text-center">
				Top 10 Contributors
			</h1>
			{data?.map((contributor, index) => (
				<Contributor
					topTenContributors
					key={index}
					index={index + 1}
					contributor={contributor}
				/>
			))}
		</div>
	);
};

export default TopTenContributors;
