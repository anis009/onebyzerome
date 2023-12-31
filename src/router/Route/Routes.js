import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main.js";
import Books from "../../pages/Contribute/Books.js";
import HandNote from "../../pages/Contribute/HandNote.js";
import Question from "../../pages/Contribute/Question.js";
import Slides from "../../pages/Contribute/Slides.js";
import Course from "../../pages/Course/Course/Course.js";
import Home from "../../pages/Home/Home/Home.js";
import Login from "../../pages/Login/Login.js";
import Profile from "../../pages/Profile/Profile/Profile.js";
import Resources from "../../pages/Resources/Resources.js";
import Signup from "../../pages/Signup/Signup.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import Admin from "../../pages/Admin/Admin/Admin.js";
import AdminLayout from "../../Layout/Admin/AdminLayout.js";
import AdminRoute from "../AdminRoute/AdminRoute.js";
import CreateTemplate from "../../pages/Admin/CreateTemplate/CreateTemplate.js";
import CourseBookDetails from "../../pages/Course/CourseBook/CourseBookDetails.js";
import Users from "../../pages/Admin/Users/Users/Users.js";
import PdfDetails from "../../pages/Shared/PdfDetails/PdfDetails.js";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.js";
import ForgotPasswordPage from "../../pages/ForgotPassword/ForgotPassword.js";
import Contributors from "../../pages/Contributors/Contributors/Contributors.js";
import Winners from "../../pages/Winners/Winners/Winners.js";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/course",
				element: <Course></Course>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <Signup></Signup>,
			},
			{
				path: "/forgot-password",
				element: <ForgotPasswordPage />,
			},
			{
				path: "/contributors",
				element: <Contributors />,
			},
			{
				path: "/winners",
				element: <Winners />,
			},
			{
				path: "/contribute/questions",
				element: (
					<PrivateRoute>
						<Question></Question>
					</PrivateRoute>
				),
			},
			{
				path: "/contribute/slides",
				element: (
					<PrivateRoute>
						<Slides></Slides>
					</PrivateRoute>
				),
			},
			{
				path: "/contribute/books",
				element: (
					<PrivateRoute>
						<Books></Books>
					</PrivateRoute>
				),
			},
			{
				path: "/contribute/handnotes",
				element: (
					<PrivateRoute>
						<HandNote></HandNote>
					</PrivateRoute>
				),
			},
			{
				path: "/resources",
				element: (
					<PrivateRoute>
						<Resources></Resources>
					</PrivateRoute>
				),
			},
			{
				path: "/profile",
				element: <Profile></Profile>,
			},
			{
				path: "/course/book/:bookName",
				element: <CourseBookDetails></CourseBookDetails>,
			},
			{
				path: "/pdf/view",
				element: <PdfDetails />,
			},
			{
				path: "/pdf",
				element: <PdfDetails />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminLayout></AdminLayout>,
		children: [
			{
				path: "/admin",
				element: (
					<AdminRoute>
						<Admin></Admin>,
					</AdminRoute>
				),
			},
			{
				path: "/admin/createtemplate",
				element: <CreateTemplate></CreateTemplate>,
			},
			{
				path: "/admin/users",
				element: (
					<AdminRoute>
						<Users></Users>
					</AdminRoute>
				),
			},
		],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

export default router;
