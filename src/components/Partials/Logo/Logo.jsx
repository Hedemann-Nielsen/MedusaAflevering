import { Link } from "react-router-dom";
import coffeeIcon from "../../../assets/icons/Coffee.png";
import style from "./Logo.module.scss";

export const Logo = () => {
	return (
		<>
			<div className={style.title}>
				<Link to="/home">
					<h1>Sunshine Coffee</h1>
				</Link>
				<img src={coffeeIcon} alt="" />
			</div>
		</>
	);
};
