import React, { useContext } from "react";
import { useState } from "react";
import { CourseContext } from "../../../contexts/CourseProvider/CourseProvider";
import CourseHeader from "../CourseHeader/CourseHeader";
import CourseModal from "../CourseModal/CourseModal";

const Course = () => {
	const [elements, setElements] = useState([]);
	const { courses } = useContext(CourseContext);
	return (
		<div className="pt-[64px]">
			<h1 className="bg-[#5D25E9] text-2xl capitalize pt-5 text-white text-center">
				{courses && courses?.courseTitle}
			</h1>
			<CourseHeader setElements={setElements}></CourseHeader>
			{elements && <CourseModal elements={elements}></CourseModal>}
		</div>
	);
};

export default Course;
