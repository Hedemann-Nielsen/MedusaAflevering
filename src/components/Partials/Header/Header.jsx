import { Link } from "react-router-dom";
import ShoppingCart from "../../../assets/icons/Shopping-Cart.svg";
import user from "../../../assets/icons/Male-User.png";
import style from "./Header.module.scss";
import { RegionSwitcher } from "../../RegionSwitcher/RegionSwitcher.jsx";
import { useState } from "react";
import { Cart } from "../../Cart/Cart.jsx";

export const Header = () => {
	const [showCart, setShowCart] = useState(false);

	const toggleCart = () => {
		setShowCart(!showCart);
		console.log(showCart);
	};

	const openCart = () => {
		setShowCart(true);
	};

	const closeCart = () => {
		setShowCart(false);
	};

	const isMobilView = window.innerWidth <= 768;

	return (
		<>
			<header className={style.headerComponent}>
				{isMobilView ? (
					<Link to="/Home">
						{" "}
						<h1>Sunshine coffee</h1>{" "}
					</Link>
				) : null}
				<RegionSwitcher className={style.regionButton}></RegionSwitcher>
				<Link onClick={toggleCart}>
					<img src={ShoppingCart} alt="" onClick={openCart} />
				</Link>
				{<Cart showCart={showCart} onClose={closeCart} />}
				<Link to="/login">
					<img src={user} alt="" />
				</Link>
			</header>
		</>
	);
};
