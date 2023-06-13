import React from "react";
import { secondary, primary } from "../../../constants/colors";
import useUser from "../../../hooks/useUser";
import Time from "../../Shared/Time/Time";
import { DEFAULT_URL_SERVER } from "../../../constants/url";
const Recent = ({ recent, index }) => {
	const { createdAt, type, name, email } = recent;
	const [, , userDetails] = useUser(email);
	// console.log(recent);
	return (
		<div
			className={`sm:ml-5 text-white bg-[${secondary}] rounded-md shadow-md  px-3 py-4 mt-3`}
		>
			<div className="flex items-center mb-2">
				{userDetails && userDetails?.image && (
					<img
						className="w-6 h-6 mr-3 rounded-full sm:w-10 sm:h-10"
						src={
							userDetails?.image && userDetails?.image.includes("i.ibb.co")
								? userDetails?.image
								: userDetails?.image.includes("uploads/profile")
								? `${DEFAULT_URL_SERVER}/${userDetails?.image}`
								: userDetails?.image
						}
						alt=""
					/>
				)}

				<h3>{name}</h3>
			</div>
			<hr className="mb-2" />
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
