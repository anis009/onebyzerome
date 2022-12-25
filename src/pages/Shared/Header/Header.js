import { Fragment, useContext, useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useRole from "../../../hooks/useRole";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Header = () => {
	const [showModel, setShowModel] = useState(true);
	const { user, logOut } = useContext(AuthContext);
	const [role] = useRole(user?.email);

	useEffect(() => {
		setShowModel(true);
	}, [showModel]);

	const menuItems = (
		<>
			<li>
				<Link className="hover:bg-[#4d1fc0] rounded-md " to="/">
					Home
				</Link>
			</li>
			{user && (
				<li className="hover:bg-[#4d1fc0] rounded-md ">
					<label htmlFor="my-modal-3" className="">
						Contribute
					</label>
				</li>
			)}

			<li className="hover:bg-[#4d1fc0] rounded-md ">
				<Link to="/resources">Resources</Link>
			</li>
		</>
	);

	const logoutHandler = () => {
		logOut()
			.then(() => {})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleClick = () => {
		const elem = document.activeElement;
		if (elem) {
			elem?.blur();
		}
	};

	return (
		<>
			<div className="fixed top-0 z-50 w-full mx-auto max-w-screen-2xl navbar bg-info text-base-100">
				<div className="navbar-start w-[20%]">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="p-2 mt-3 shadow bg-[#25184E] menu menu-compact dropdown-content rounded-box w-52"
						>
							<>
								<li>
									<Link
										onClick={handleClick}
										className="hover:bg-[#4d1fc0] rounded-md "
										to="/"
									>
										Home
									</Link>
								</li>
								{user && (
									<li
										onClick={handleClick}
										className="hover:bg-[#4d1fc0] rounded-md "
									>
										<label htmlFor="my-modal-3" className="">
											Contribute
										</label>
									</li>
								)}

								<li
									onClick={handleClick}
									className="hover:bg-[#4d1fc0] rounded-md "
								>
									<Link to="/resources">Resources</Link>
								</li>
							</>
						</ul>
					</div>
					<Link href="/" className="px-2 py-1 text-xl ">
						OneByZero
					</Link>
				</div>
				<div className="hidden w-full navbar-start lg:flex">
					<ul className="p-0 menu menu-horizontal">{menuItems}</ul>
				</div>
				<div className="w-full navbar-end">
					{!user?.uid ? (
						<Link
							to="/login"
							className="px-4 py-3 hover:bg-[#4d1fc0] rounded-md"
						>
							Login
						</Link>
					) : (
						<>
							<div className="z-50 mr-2 dropdown dropdown-bottom dropdown-end">
								{user.photoURL ? (
									<div className="w-10 h-10 cursor-pointer " tabIndex={1}>
										<img
											src={user.photoURL}
											data-tip="hello i am anis"
											className="w-10 h-10 rounded-full tooltip"
											alt=""
											title={user?.displayName}
										/>
									</div>
								) : (
									<div tabIndex={1} className="w-10 h-10 cursor-pointer">
										<img
											src="https://i.ibb.co/qn6gKkK/1000-F-331699188-l-Rpvqx-O5-QRtw-OM05g-R50-Imaa-Jg-Bx68vi.jpg"
											alt=""
											className="w-10 h-10 rounded-full"
											title={user?.displayName}
										/>
									</div>
								)}
								<ul
									tabIndex={1}
									className="p-2 mt-3 z-50 shadow dropdown-content menu bg-[#25184E] rounded-box w-52"
								>
									<li onClick={handleClick}>
										<Link to="/profile" className="hover:bg-[#4d1fc0] z-50">
											Profile
										</Link>
									</li>
									{role === "admin" && (
										<li onClick={handleClick}>
											<Link to="/admin" className="hover:bg-[#4d1fc0]">
												Admin
											</Link>
										</li>
									)}
									<li onClick={handleClick}>
										<button
											className="hover:bg-[#4d1fc0]"
											onClick={logoutHandler}
										>
											logout
										</button>
									</li>
								</ul>
							</div>
						</>
					)}
				</div>
			</div>
			{showModel && (
				<div className="">
					<input type="checkbox" id="my-modal-3" className="modal-toggle" />
					<div className="modal">
						<div className="relative modal-box">
							<label
								htmlFor="my-modal-3"
								className="absolute btn btn-sm btn-circle right-2 top-2"
							>
								✕
							</label>
							<div>
								<h1 className="text-2xl font-semibold">
									What are you want to Contribute?
								</h1>
								<ul className="my-5 text-xl">
									<li className="p-2 my-2 cursor-pointer transition-all hover:bg-[#3503b4] rounded-sm text-white bg-info">
										<Link
											className="block w-full"
											to="/contribute/questions"
											id="my-modal-3"
											onClick={() => {
												setShowModel(false);
											}}
										>
											questions
										</Link>
									</li>
									<li className="p-2 my-2 cursor-pointer transition-all hover:bg-[#3503b4] rounded-sm text-white bg-info">
										<Link
											className="block w-full"
											to="/contribute/books"
											id="my-modal-3"
											onClick={() => {
												setShowModel(false);
											}}
										>
											books
										</Link>
									</li>
									<li className="p-2 my-2 cursor-pointer transition-all hover:bg-[#3503b4] rounded-sm text-white bg-info">
										<Link
											className="block w-full"
											to="/contribute/slides"
											id="my-modal-3"
											onClick={() => {
												setShowModel(false);
											}}
										>
											slides
										</Link>
									</li>
									<li className="p-2 my-2 cursor-pointer transition-all hover:bg-[#3503b4] rounded-sm text-white bg-info">
										<Link
											className="block w-full"
											to="/contribute/handnotes"
											id="my-modal-3"
											onClick={() => {
												setShowModel(false);
											}}
										>
											handnotes
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
