import { useRegions, useUpdateCart } from "medusa-react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import { useEffect } from "react";

import style from "./RegionSwitcher.module.scss";
export const RegionSwitcher = () => {
	const { regions, isLoading } = useRegions();
	const { region, cart, setCart, setRegion } = useContext(StoreContext);

	const updateCart = useUpdateCart(cart?.id);
	// console.log(regions);
	useEffect(() => {
		if (regions && regions.length > 0) {
			setRegion(regions[0]);
		}
	}, [regions]);

	useEffect(() => {
		const updateCartRegion = (region_id) => {
			updateCart.mutate(
				{
					region_id,
				},
				{ onSuccess: ({ cart }) => setCart(cart) },
				{
					onError: (err) => {
						console.log("error updating cart region", err);
					},
				}
			);
		};

		if (region && cart && region.id !== cart.region_id) {
			updateCartRegion(region.id);
		}
	}, [region, regions]);

	if (isLoading) return <p>Loading...</p>;

	return (
		<select
			className={style.regionButton}
			onChange={(e) => setRegion(regions[e.target.value])}>
			{regions.map((region, index) => {
				return (
					<option key={region.name} value={index}>
						{region.name}
					</option>
				);
			})}
		</select>
	);
};
