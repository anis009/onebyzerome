import React from "react";
import { winners } from "../../../utils/db/data";
import Winner from "../Winner/Winner";
const Winners = () => {
	return (
		<div className="pt-[90px]">
			<div className="py-5">
				<h1 className="text-2xl text-center text-white font-semibold">
					1st Onebyzero Contribution Hackathon
				</h1>
				<h5 className="text-center text-gray-400 text-sm font-semibold">
					9 Days Long | June 8 to Jun 17, 2023
				</h5>
			</div>
			<div className=" w-[60%] mx-auto pb-5 mb-10 p-5 rounded-md bg-gradient-to-r from-purple-900 to-purple-400">
				{winners?.map((winner, index) => (
					<Winner winner={winner} key={index} index={index + 1} />
				))}
			</div>
		</div>
	);
};

export default Winners;
