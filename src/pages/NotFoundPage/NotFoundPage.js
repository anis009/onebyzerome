import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
			<h1 className="text-6xl font-bold text-white mb-8">404</h1>
			<p className="text-2xl text-white mb-12">Oops! Page not found.</p>
			<Link
				to="/"
				className="text-white text-xl underline hover:text-yellow-300"
			>
				Go back to home
			</Link>
		</div>
	);
};

export default NotFoundPage;
