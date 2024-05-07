import style from "./Cart.module.scss";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { formatAmount } from "medusa-react";

export const CartContent = () => {
	const { cart, region } = useContext(StoreContext);

	if (!cart) return null;
	return (
		<>
			<h3>Shopping cart</h3>
			<div className={style.cartLines}>
				<p className={style.bold}>Product</p>
				<p className={style.bold}>Quantity</p>
				<p className={style.bold}>Item price</p>
				<p className={style.bold}>Total price</p>
			</div>
			{cart?.items.map((item) => {
				return (
					<div key={item}>
						<div className={style.cartLines}>
							<h5 className={style.item}>{item.title}</h5>
							<p className={style.item}>{item.quantity}</p>
							<p className={style.item}>
								{formatAmount({
									amount: item.unit_price,
									region: region,
									includeTaxes: false,
								})}
							</p>
							<p className={style.item}>
								{formatAmount({
									amount: item.unit_price * item.quantity,
									region: region,
									includeTaxes: false,
								})}
							</p>
						</div>

						<hr className={style.line} />
					</div>
				);
			})}
		</>
	);
};
