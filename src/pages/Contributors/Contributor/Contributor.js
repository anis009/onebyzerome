import React, { useEffect, useState } from "react";
import { DEFAULT_URL_SERVER } from "../../../constants/url";
import { IoDiamondSharp } from "react-icons/io5";
import { GiChessKing } from "react-icons/gi";

const Contributor = ({ contributor, index, topTenContributors }) => {
	const { name, image, totalPoints, email } = contributor;
	const [width, setWidth] = useState();
	const handleResize = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, [width]);

	return (
		<div className="text-white justify-between md:w-[80%] w-full mx-auto mt-3 px-4 py-5 rounded-md shadow-md flex items-center bg-teal-900">
			<div className="flex items-center">
				<span className="font-xl font-semibold sm:mr-4 mr-1">{index}. </span>
				<img
					className="sm:w-20 sm:h-20 w-10 h-10 rounded-full"
					src={
						image && image.includes("i.ibb.co")
							? image
							: image.includes("uploads/profile")
							? `${DEFAULT_URL_SERVER}/${image}`
							: image
					}
					alt=""
				/>
				<div className="sm:ml-2 ml-1">
					<h3 className="flex items-center">
						<span className="sm:text-base text-sm">{name}</span>
						{topTenContributors && <GiChessKing className="text-yellow-900" />}
					</h3>
					{width > 460 && <small>{email}</small>}
				</div>
			</div>

			<div className="flex items-center">
				<span className="sm:text-xl text-sm sm:mr-2 mr-1">{totalPoints} </span>{" "}
				<IoDiamondSharp className="sm:w-8 sm:h-8 w-4 h-4 font-semibold text-yellow-900 mt-1" />
			</div>
		</div>
	);
};

export default Contributor;
