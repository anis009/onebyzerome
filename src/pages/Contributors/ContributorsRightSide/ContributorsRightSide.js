import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllRecentResources } from "../../../utils/https/resourceHttp";
import Loading from "../../Shared/Loading/Loading";
import Recent from "../Recent/Recent";

const ContributorsRightSide = () => {
	const { isLoading, data } = useQuery({
		queryKey: ["all-recent-resources"],
		queryFn: async () => {
			const data = await getAllRecentResources();
			//console.log(data);
			return data;
		},
	});

	return (
		<div>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<h1 className="text-xl text-center text-white">
						Recent Contributions
					</h1>
					{data?.length > 0 &&
						data.map((recent, index) => (
							<Recent key={index} recent={recent} index={index + 1} />
						))}
				</div>
			)}
		</div>
	);
};

export default ContributorsRightSide;
