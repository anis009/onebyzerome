import React from "react";
import "./RecentAnimatedText.css";
import { secondary } from "../../../constants/colors";
import Text from "./Text";

const RecentAnimatedText = ({ texts }) => {
	return (
		<div
			className={`text-container bg-[${secondary}] display-animated-text  xl:w-[80%] w-[95%] my-5 h-16 flex flex-row items-center rounded-md mx-auto`}
		>
			{texts &&
				texts.map((text, index) => {
					return (
						<Text
							text={text?.text}
							name={text?.name}
							email={text?.email}
							createdAt={text?.createdAt}
							key={index}
						/>
					);
				})}
		</div>
	);
};

export default RecentAnimatedText;
