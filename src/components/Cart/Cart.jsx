import style from "./Cart.module.scss";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import closeBtn from "../../assets/icons/close.png";
import { formatAmount } from "medusa-react";
import { Link } from "react-router-dom";
import { CartContent } from "./CartContent";

export const Cart = ({ showCart, onClose }) => {
	const { cart, region } = useContext(StoreContext);

	if (!cart) return null;

	return (
		<>
			<div className={showCart ? style.sideCartWrapper : null}></div>
			<div
				className={
					showCart
						? style.sideCart + " " + style.open
						: style.sideCart + " " + style.close
				}>
				<button onClick={onClose}>
					<img src={closeBtn} alt="" />
				</button>
				<CartContent />
				<div className={style.cartLines}>
					<h5 className={style.item}>Tax ({region?.tax_rate}%)</h5>
					<h6 className={style.item}>
						{formatAmount({
							amount: cart.tax_total,
							region: region,
							includeTaxes: false,
						})}
					</h6>
				</div>
				<div className={style.cartLines}>
					<h5 className={style.item}>Total price</h5>
					<h6 className={style.item}>
						{formatAmount({
							amount: cart.subtotal,
							region: region,
							includeTaxes: false,
						})}
					</h6>
				</div>
				<div className={style.TotalCartLines}>
					<h5 className={style.item}>
						Items in Cart:{" "}
						{cart.items.reduce((total, item) => total + item.quantity, 0)}
					</h5>
					<Link to="/checkout">
						<button onClick={onClose}>Go to CheckOut</button>
					</Link>
				</div>
			</div>
		</>
	);
};
