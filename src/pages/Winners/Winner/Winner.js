import React from "react";
import useUser from "../../../hooks/useUser";
import { DEFAULT_URL_SERVER } from "../../../constants/url";
import "./Winner.css";
import { BsFillTrophyFill } from "react-icons/bs";

const Winner = ({ winner, index }) => {
	const [, , userDetails] = useUser(winner?.email);

	return (
		<div className="text-white shadow-lg p-5 rounded-md flex my-5 bg-gradient-to-l from-purple-900 to-purple-400  items-center justify-between">
			<div className="flex items-center ">
				<span className="mr-2">{winner?.position}.</span>
				<div className="profile-animation">
					<div className="fire-profile"></div>

					<img
						className="sm:w-20  user-image sm:h-20 w-10 h-10 rounded-full"
						src={
							userDetails?.image && userDetails?.image?.includes("i.ibb.co")
								? userDetails?.image
								: userDetails?.image?.includes("uploads/profile")
								? `${DEFAULT_URL_SERVER}/${userDetails?.image}`
								: userDetails?.image
						}
						alt=""
					/>
				</div>

				<div className="ml-2 flex items-center">
					<h3 className="font-semibold text-[16px]">{winner?.name}</h3>
					{index <= 3 ? (
						<>
							<BsFillTrophyFill className="text-xl ml-2 text-orange-700 font-bold" />
						</>
					) : (
						<BsFillTrophyFill className="text-sm ml-2 text-orange-700 font-bold" />
					)}
				</div>
			</div>
			<div>
				<h6>{winner?.points} points</h6>
			</div>
		</div>
	);
};

export default Winner;
