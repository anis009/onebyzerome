import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider.js";
import Loading from "../Loading/Loading.js";

const FIleModal = ({
	setShowFileModal,
	setFile,
	session,
	examName,
	setSession,
	setExamName,
	name,
	setAuthor,
	setBookName,
	author,
	bookName,
}) => {
	const [uploadFile, setUploadFile] = useState("");
	const [sessions, setSessions] = useState([]);
	const [uploadLoading, setUploadLoading] = useState(false);
	const { user } = useContext(AuthContext);
	const selectedFileTypes = ["application/pdf"];

	useEffect(() => {
		fetch("https://server.onebyzeroedu.com/api/session")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSessions(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const { data: examNames = [], isLoading: examNamesLoading } = useQuery({
		queryKey: ["examName"],
		queryFn: async () => {
			const { data } = await axios.get(
				"https://server.onebyzeroedu.com/api/examname"
			);
			return data;
		},
	});

	// catch session value
	const sessionChangeHandler = (e) => {
		setSession(Number(e.target.value));
	};

	// submitButtonFuction
	const uploadFileHandler = async () => {
		// check questions input
		if (name === "questions" && (!session || !examName)) {
			toast.error("Please filled all the empty input");
			return;
		}

		// check books input
		if (
			(name === "books" || name === "slides" || name === "handnotes") &&
			(!author || !bookName)
		) {
			toast.error("Please filled all the empty input");
			return;
		}
		// upload file
		if (uploadFile && selectedFileTypes.includes(uploadFile.type)) {
			// upload pdf
			const formData = new FormData();
			formData.append("file", uploadFile);
			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			};
			try {
				setUploadLoading(true);
				const { data } = await axios.post(
					"https://server.onebyzeroedu.com/upload/pdf",
					formData,
					config
				);
				if (data) {
					console.log(data);
					setFile(data);
					toast.success("file Upload successfully \n click the upload button");
					setUploadLoading(false);
				}
			} catch (error) {
				toast.error("File should be less than 30mb");
				console.log(error);

				setUploadLoading(false);
			}
		} else if (uploadFile && uploadFile.type !== "video/mp4") {
			if (name === "books" || name === "slides" || name === "handnotes") {
				toast.error("Please,add valid file");
				return;
			}
			// upload image
			const formData = new FormData();
			formData.append("image", uploadFile);
			const imageHostKey = process.env.REACT_APP_imgbb_key;
			const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
			setUploadLoading(true);
			fetch(url, { method: "POST", body: formData })
				.then((res) => res.json())
				.then((imgData) => {
					if (imgData.success) {
						setFile(imgData.data.url);
						setUploadFile("");
						toast.success(
							"file Upload successfully \n click the upload button"
						);
						setUploadLoading(false);
					}
				})
				.catch((err) => {
					setUploadLoading(false);
					toast.error(err.message);
				});
		} else {
			toast.error("Give pdf/image file!");
		}
	};

	// takefile
	const handleFileChange = (e) => {
		setUploadFile(e.target.files[0]);
	};

	if (uploadLoading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			{/* Put this part before </body> tag */}
			<input type="checkbox" id="file-input-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="relative modal-box">
					<label
						htmlFor="file-input-modal-3"
						className="absolute btn btn-sm btn-circle right-2 top-2"
					>
						✕
					</label>
					<h3 className="text-lg font-bold">Add File </h3>

					<div className="my-5">
						<label htmlFor="" className="mb-2 text-base font-semibold">
							Username
						</label>
						<input
							type="text"
							placeholder="Type here"
							disabled
							value={user?.displayName}
							className="w-full border-2 rounded-md outline-none input active:outline-none focus:outline-none input-primary"
						/>
					</div>
					<div className="my-5">
						<label htmlFor="" className="mb-2 text-base font-semibold">
							Email
						</label>
						<input
							type="text"
							placeholder="Type here"
							disabled
							value={user?.email}
							className="w-full border-2 rounded-md outline-none input active:outline-none focus:outline-none input-primary"
						/>
					</div>

					<div className="my-5">
						<label htmlFor="" className="mb-2 text-base font-semibold">
							Session
						</label>
						<select
							onChange={sessionChangeHandler}
							className="w-full border-2 rounded-md outline-none input active:outline-none focus:outline-none input-primary"
						>
							<option value="" disabled selected>
								select session
							</option>
							{sessions &&
								sessions.map((session, index) => (
									<option key={index} value={session.value}>
										{session.name}
									</option>
								))}
						</select>
					</div>

					{name === "questions" && (
						<>
							<div className="my-5">
								<label htmlFor="" className="mb-2 text-base font-semibold">
									Exam Name
								</label>
								{examNamesLoading ? (
									<Loading></Loading>
								) : (
									<select
										onChange={(e) => setExamName(e.target.value)}
										className="w-full border-2 rounded-md outline-none input active:outline-none focus:outline-none input-primary"
									>
										<option value="" disabled selected>
											select examName
										</option>
										{examNames &&
											examNames.map((exam, index) => (
												<option key={index} value={exam?.name}>
													{exam?.name}
												</option>
											))}
									</select>
								)}
							</div>
						</>
					)}

					{(name === "books" || name === "slides" || name === "handnotes") && (
						<>
							<div className="my-5">
								<label htmlFor="" className="mb-2 text-base font-semibold">
									{name} Name
								</label>
								<input
									type="text"
									onChange={(e) => setBookName(e.target.value)}
									placeholder={`${name} name...`}
									className="w-full border-2 rounded-md outline-none input active:outline-none focus:outline-none input-primary"
								/>
							</div>
							<div className="my-5">
								<label htmlFor="" className="mb-2 text-base font-semibold">
									Author
								</label>
								<input
									type="text"
									onChange={(e) => setAuthor(e.target.value)}
									placeholder="author1,author2,author3....."
									className="w-full border-2 rounded-md outline-none input active:outline-none focus:outline-none input-primary"
								/>
							</div>
						</>
					)}

					<div>
						<input
							type="file"
							onChange={handleFileChange}
							className="w-full file-input file-input-bordered file-input-primary "
						/>
					</div>

					<div className="flex justify-between mt-10">
						<button
							onClick={uploadFileHandler}
							type="button"
							className="btn btn-primary"
						>
							submit
						</button>
						<button
							className="btn btn-error"
							onClick={() => setShowFileModal(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FIleModal;
