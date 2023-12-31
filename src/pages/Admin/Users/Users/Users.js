import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { primary, secondary } from "../../../../constants/colors";
import { addUserAsModerator, getUsers } from "../../../../utils/https/userHttp";
import Loading from "../../../Shared/Loading/Loading";

const Users = () => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["admin", "users", "all"],
		queryFn: async () => {
			return await getUsers();
		},
	});

	if (isLoading) {
		return <Loading />;
	}

	const moderatorHandler = async (id) => {
		const response = await addUserAsModerator(id);
		if (response) {
			toast.success("user is added as moderator");
			refetch();
		}
	};
	return (
		<div className="px-5 pt-16">
			<table className="border-collapse text-white text-left pl-2 border border-slate-500 w-full">
				<thead>
					<tr>
						<th className="border border-slate-600 pl-2">#</th>
						<th className="border border-slate-600 pl-2">image</th>
						<th className="border border-slate-600 pl-2">name</th>
						<th className="border border-slate-600 pl-2">email</th>
						<th className="border border-slate-600 pl-2">Action</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((user, index) => {
							return (
								<tr key={index}>
									<td className="border border-slate-700 pl-2">{index + 1}</td>
									<td className="border border-slate-700 pl-2 py-2">
										<img
											src={user?.image}
											className="w-12 h-12 mx-auto rounded-full"
											alt=""
										/>
									</td>
									<td className="border border-slate-700 pl-2">{user?.name}</td>
									<td className="border border-slate-700 pl-2">
										{user?.email}
									</td>
									<td className="border border-slate-700 pl-2">
										<div>
											{user?.userRole === "user" ? (
												<button
													onClick={() => moderatorHandler(user?._id)}
													className={`btn btn-primary bg-[${secondary}] border-0 hover:bg-[${primary}] btn-sm`}
												>
													moderator
												</button>
											) : (
												<span
													className={`bg-[${secondary}] px-3 py-1 shadow-md rounded-sm`}
												>
													{user?.userRole}
												</span>
											)}
										</div>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
