import React from "react";
import ContributorsLeftSide from "../ContributorsLeftSide/ContributorsLeftSide";
import ContributorsRightSide from "../ContributorsRightSide/ContributorsRightSide";

const Contributors = () => {
	return (
		<div className="py-32 px-12 flex md:flex-row flex-col">
			<div className="md:w-[70%] w-full">
				<ContributorsLeftSide />
			</div>
			<div className="w-[25%] flex-1">
				<ContributorsRightSide />
			</div>
		</div>
	);
};

export default Contributors;
