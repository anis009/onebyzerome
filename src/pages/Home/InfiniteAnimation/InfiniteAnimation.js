import React, { useState, useEffect } from "react";

const InfiniteAnimation = () => {
	const [uploads, setUploads] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		// Simulated data of recent uploads
		const recentUploads = [
			{ type: "book", title: "Book 1" },
			{ type: "slide", title: "Slide 1" },
			{ type: "question", title: "Question 1" },
			{ type: "note", title: "Note 1" },
			{ type: "book", title: "Book 2" },
			{ type: "slide", title: "Slide 2" },
			{ type: "question", title: "Question 2" },
			{ type: "note", title: "Note 2" },
		];

		setUploads(recentUploads);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % uploads.length);
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [uploads.length]);

	return (
		<div className="bg-gray-100 py-6">
			<h2 className="text-2xl font-bold text-center mb-4">Recent Uploads</h2>
			<div className="flex items-center justify-center">
				{uploads.length > 0 && (
					<div className="bg-white border border-gray-300 p-4 rounded-md shadow-md overflow-hidden">
						<div className="flex space-x-4 animate-slide">
							{uploads.map((upload, index) => (
								<div
									key={upload.title}
									className={`w-64 h-48 bg-blue-500 rounded-md transform transition-transform ${
										index === currentIndex
											? "translate-x-0"
											: "-translate-x-full"
									}`}
								>
									<p className="text-white text-center">{upload.title}</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default InfiniteAnimation;
