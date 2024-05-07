import { Link } from "react-router-dom";
import style from "./ShopNow.module.scss";
export const ShopNow = () => {
	return (
		<>
			<div className={style.ShopNow}>
				<h2>Shop now</h2>
				<p>
					Our delicious coffees wil get you brewing the best cup of coffee you
					ever tasted in no time at all. And the best part of it? It is totally
					organic, fair trade and sustainably sourced. So get brewing
				</p>
				<button>
					<Link to="/products">Go to products</Link>;
				</button>
			</div>
		</>
	);
};
