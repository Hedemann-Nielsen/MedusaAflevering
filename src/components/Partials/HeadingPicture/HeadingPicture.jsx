import style from "./HeadingPicture.module.scss";
import CoffeBeans from "../../../assets/images/CoffeeBeans.png";

export const HeadingPicture = () => {
	return (
		<>
			<div className={style.logo}>
				<img src={CoffeBeans} alt="" />
				<h2>
					We Love Coffee <br /> And all the people who make it
				</h2>
			</div>
		</>
	);
};
