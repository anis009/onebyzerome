import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTopContributors } from "../../../utils/https/resourceHttp";
import Loading from "../../Shared/Loading/Loading";
import TopTenContributors from "../TopTenContributors/TopTenContributors";
import LastContributors from "../LastContributors/LastContributors";
import MyPosition from "../MyPosition/MyPosition";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const ContributorsLeftSide = () => {
	const { user } = useContext(AuthContext);
	const { isLoading, data = [] } = useQuery({
		queryKey: ["top-contributors-left-side"],
		queryFn: async () => {
			return await getTopContributors();
		},
	});

	return (
		<div>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					{user && <MyPosition data={data} user={user} />}
					<TopTenContributors data={data?.slice(0, 10)} />
					<LastContributors data={data?.slice(10, 100)} />
				</div>
			)}
		</div>
	);
};

export default ContributorsLeftSide;
