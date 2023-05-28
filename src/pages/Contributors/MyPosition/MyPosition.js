import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DEFAULT_URL_SERVER } from "../../../constants/url";
import { IoDiamondSharp } from "react-icons/io5";

const MyPosition = ({ data, user }) => {
	const [myPosition, setMyPosition] = useState(null);
	useEffect(() => {
		const idx = data?.findIndex(
			(userPosition) => userPosition.email === user?.email
		);
		console.log(idx);
		if (idx >= 0) {
			setMyPosition({
				...data[idx],
				idx: idx,
			});
		}
	}, [data, user]);

	return (
		<div className="w-full mb-8 bg-purple-700 px-4 py-5 rounded-md shadow-md">
			<div className="w-[80%] flex justify-between mx-auto">
				<h2 className="text-xl  font-semibold  text-white">Your Position</h2>

				<h3 className="text-xl flex  font-semibold  text-white">
					<span className="mr-2">Total Diamonds</span>{" "}
					<IoDiamondSharp className="w-8 h-8 font-semibold text-yellow-900 mt-1" />
				</h3>
			</div>
			<div className="text-white justify-between w-[80%] mx-auto my-3 px-4 py-5 rounded-md shadow-md flex items-center bg-purple-900">
				<div className="flex items-center">
					<span className="font-xl font-semibold mr-4">
						{myPosition?.idx + 1}.{" "}
					</span>
					<img
						className="w-20 h-20 rounded-full"
						src={
							myPosition?.image && myPosition?.image.includes("i.ibb.co")
								? myPosition?.image
								: myPosition?.image.includes("uploads/profile")
								? `${DEFAULT_URL_SERVER}/${myPosition?.image}`
								: myPosition?.image
						}
						alt=""
					/>
					<div className="ml-2">
						<h3>{myPosition?.name}</h3>
						<small>{myPosition?.email}</small>
					</div>
				</div>

				<div className="flex items-center">
					<span className="text-xl mr-2">{myPosition?.totalPoints} </span>{" "}
					<IoDiamondSharp className="w-8 h-8 font-semibold text-yellow-900 mt-1" />
				</div>
			</div>
		</div>
	);
};

export default MyPosition;
