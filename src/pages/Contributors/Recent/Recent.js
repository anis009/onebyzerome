import React from "react";
import { secondary, primary } from "../../../constants/colors";
import Time from "../../Shared/Time/Time";
const Recent = ({ recent, index }) => {
	const { createdAt, type } = recent;
	return (
		<div
			className={`sm:ml-5 text-white bg-[${secondary}] rounded-md shadow-md  px-3 py-4 mt-3`}
		>
			<div className="recent">
				{recent.type === "question" ? (
					<h1 className="mb-2">{recent.examName} </h1>
				) : (
					<h1 className="mb-2">{recent.bookName} </h1>
				)}

				<Time time={createdAt} />
				<span className="badge badge-primary">{type}</span>
			</div>
		</div>
	);
};

export default Recent;
