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
		//console.log(idx);
		if (idx >= 0) {
			setMyPosition({
				...data[idx],
				idx: idx,
			});
		}
	}, [data, user]);

	const [width, setWidth] = useState();
	const handleResize = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="w-full mb-8 bg-purple-700 px-4 py-5 rounded-md shadow-md">
			<div className="md:w-[80%] w-full flex justify-between mx-auto">
				<h2 className="sm:text-xl text-base font-semibold  text-white">
					Your Position
				</h2>

				<h3 className="sm:text-xl text-base flex  font-semibold  text-white">
					<span className="mr-2">Total Diamonds</span>{" "}
					<IoDiamondSharp className="sm:w-8 sm:h-8 w-4 h-4 font-semibold text-yellow-900 mt-1" />
				</h3>
			</div>
			<div className="text-white justify-between md:w-[80%] w-full mx-auto my-3 px-4 py-5 rounded-md shadow-md flex items-center bg-purple-900">
				<div className="flex items-center">
					<span className="sm:font-xl font-sm font-semibold sm:mr-4 mr-1">
						{myPosition?.idx + 1}.{" "}
					</span>
					<img
						className="sm:w-20 sm:h-20 w-10 h-10 rounded-full"
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
						{width > 460 && <small>{myPosition?.email}</small>}
					</div>
				</div>

				<div className="flex items-center">
					<span className="sm:text-xl text-sm mr-2">
						{myPosition?.totalPoints}{" "}
					</span>{" "}
					<IoDiamondSharp className="sm:w-8 sm:h-8 w-4 h-4 font-semibold text-yellow-900 mt-1" />
				</div>
			</div>
		</div>
	);
};

export default MyPosition;
