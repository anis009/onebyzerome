import React from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
	const handleRedirect = () => {
		window.open(
			"https://onebyzeroedu.notion.site/onebyzeroedu/Gifts-for-Top-10-Contributors-Onebyzero-Edu-e6de9d5d3e96415cb70980238bd6392d",
			"_blank"
		);
	};

	return (
		<div className="mt-5 sm:w-[80%] md:w-[60%] w-[95%]  mx-auto text-center">
			<div className="px-8 py-2 text-white rounded-lg shadow-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
				<p className="text-2xl font-bold text-purple-900 ">Announcement!</p>
				<p className="text-lg font-bold">
					প্রথম ১০ জন কন্ট্রিবিউটরকে দেয়া হবে আকর্ষনীয় পুরস্কার! 👉🏻{" "}
					<span
						onClick={handleRedirect}
						className="font-bold text-purple-900 cursor-pointer hover:text-purple-800"
					>
						বিস্তারিত
					</span>
				</p>
			</div>
		</div>
	);
};

export default Announcement;
