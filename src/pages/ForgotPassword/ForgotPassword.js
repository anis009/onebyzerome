import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const { forgotPassword } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			toast.error("Invalid email address");
			return;
		}
		// Handle forgot password logic here
		try {
			await forgotPassword(email);
			toast.success("Password reset email sent,check your email");
		} catch (error) {
			console.log(error);
		}

		//console.log("Email:", email);
		// Reset the email input field
		setEmail("");
	};

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<div className="flex items-center justify-center pt-32 pb-16 h-[80vh] bg-black">
			<form
				className="bg-white sm:w-1/2 w-[90%]  p-6 rounded shadow-md"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
						type="email"
						id="email"
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</div>
				<button
					className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
					type="submit"
				>
					Reset Password
				</button>
			</form>
		</div>
	);
};

export default ForgotPasswordPage;
