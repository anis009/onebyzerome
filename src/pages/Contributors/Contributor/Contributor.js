import React from "react";
import { DEFAULT_URL_SERVER } from "../../../constants/url";
import { IoDiamondSharp } from "react-icons/io5";
import { GiChessKing } from "react-icons/gi";

const Contributor = ({ contributor, index, topTenContributors }) => {
	const { name, image, totalPoints, email } = contributor;

	return (
		<div className="text-white justify-between w-[80%] mx-auto mt-3 px-4 py-5 rounded-md shadow-md flex items-center bg-teal-900">
			<div className="flex items-center">
				<span className="font-xl font-semibold mr-4">{index}. </span>
				<img
					className="w-20 h-20 rounded-full"
					src={
						image && image.includes("i.ibb.co")
							? image
							: image.includes("uploads/profile")
							? `${DEFAULT_URL_SERVER}/${image}`
							: image
					}
					alt=""
				/>
				<div className="ml-2">
					<h3 className="flex items-center">
						<span>{name}</span>
						{topTenContributors && <GiChessKing className="text-yellow-900" />}
					</h3>
					<small>{email}</small>
				</div>
			</div>

			<div className="flex items-center">
				<span className="text-xl mr-2">{totalPoints} </span>{" "}
				<IoDiamondSharp className="w-8 h-8 font-semibold text-yellow-900 mt-1" />
			</div>
		</div>
	);
};

export default Contributor;
