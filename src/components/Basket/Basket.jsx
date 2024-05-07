import style from "./Basket.module.scss";

import { Spacer } from "../Spacer/Spacer.jsx";
import { Testimonies } from "../Testimonies/Testimonies.jsx";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import { formatAmount } from "medusa-react";
import { FormData } from "../Static/FormData.jsx";
import { Flex, GridMobile } from "../../Styles/DisplayVariants.jsx";

export const Basket = () => {
	const { cart, region } = useContext(StoreContext);

	const isMobileView = window.innerWidth < 768;

	if (!cart) return null;

	return (
		<div className={style.Basket}>
			<h2 className={style.Headline}>Checkout</h2>
			{isMobileView ? (
				<GridMobile className={style.flexContainer}>
					<form id="form">
						{FormData.map((field) => (
							<div key={field.name}>
								<label htmlFor={field.name}>{field.label}</label>
								<input
									type={field.type}
									name={field.name}
									value={FormData[field.name]}
								/>
							</div>
						))}
					</form>
					<section className={style.sideCartWrapper}>
						<div className={style.sideCart}>
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
											<p className={style.item}>{item.title}</p>
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

							<div className={style.cartLines}>
								<p className={style.item}>Total</p>
								<p className={style.item}>
									{formatAmount({
										amount: cart.subtotal,
										region: region,
										includeTaxes: false,
									})}
								</p>
							</div>
							<div className={style.TotalCartLines}>
								<h5 className={style.item}>
									Items in Cart:{" "}
									{cart.items.reduce((total, item) => total + item.quantity, 0)}
								</h5>
							</div>
							<section className={style.shipping}>
								<h6>Choose shipping</h6>
								<div>
									<label htmlFor="FakeEx">FakeEx</label>
									<input type="radio" name="shipping" is="Normal" />
								</div>
								<div>
									<label htmlFor="Express">FakeEx Express</label>
									<input type="radio" name="shipping" id="Express" />
								</div>
							</section>
						</div>
						<button className={style.button} id="submit">
							Pay now
						</button>
					</section>
				</GridMobile>
			) : (
				<Flex className={style.flexContainer}>
					<form id="form">
						{FormData.map((field) => (
							<div key={field.name}>
								<label htmlFor={field.name}>{field.label}</label>
								<input
									type={field.type}
									name={field.name}
									value={FormData[field.name]}
								/>
							</div>
						))}
						<button id="submit">Pay now</button>
					</form>
					<section className={style.sideCartWrapper}>
						<div className={style.sideCart}>
							<div className={style.cartLines}>
								<h6 className={style.bold}>Product</h6>
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

							<div className={style.cartLines}>
								<h5 className={style.item}>Total</h5>
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
							</div>
							<section className={style.shipping}>
								<h6>Choose shipping</h6>
								<div>
									<label htmlFor="FakeEx">FakeEx</label>
									<input type="radio" name="shipping" is="Normal" />
								</div>
								<div>
									<label htmlFor="Express">FakeEx Express</label>
									<input type="radio" name="shipping" id="Express" />
								</div>
							</section>
						</div>
					</section>
				</Flex>
			)}

			<Spacer />
			<Testimonies />
		</div>
	);
};
