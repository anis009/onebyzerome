import React from "react";
import ContributorsLeftSide from "../ContributorsLeftSide/ContributorsLeftSide";
import ContributorsRightSide from "../ContributorsRightSide/ContributorsRightSide";

const Contributors = () => {
	return (
		<div className="py-32 sm:px-12 px-5 flex md:flex-row flex-col">
			<div className="md:w-[70%] w-full">
				<ContributorsLeftSide />
			</div>
			<div className="md:w-[25%] w-full flex-1">
				<ContributorsRightSide />
			</div>
		</div>
	);
};

export default Contributors;
