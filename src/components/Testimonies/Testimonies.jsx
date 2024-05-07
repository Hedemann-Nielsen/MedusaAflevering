// Testimonies.jsx

import React, { useEffect, useState } from "react";
import style from "./Testimonies.module.scss";
import { TestimoniesData } from "../Static/TestimonialsData";
import { GridMobile, Flex } from "../../Styles/DisplayVariants.jsx";
import TestimonyItem from "./TestimoniesItem.jsx";

export const Testimonies = () => {
	const [testimonies, setTestimonies] = useState([]);

	const isMobileView = window.innerWidth < 768;

	useEffect(() => {
		setTestimonies(TestimoniesData);
	}, []);

	const GridComponent = isMobileView ? GridMobile : Flex;

	return (
		<div className={style.Testimonies}>
			<h2>Testimonies</h2>
			<GridComponent col={4} row={1}>
				{testimonies.map((testimony, index) => (
					<TestimonyItem key={index} testimony={testimony} />
				))}
			</GridComponent>
		</div>
	);
};
