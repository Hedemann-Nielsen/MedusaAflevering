import { useCart } from "medusa-react";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
	const { createCart } = useCart();

	const [cart, setCart] = useState();
	const [region, setRegion] = useState();

	useEffect(() => {
		createCart.mutate(
			{ region_id: region?.id },
			{ onSuccess: (res) => setCart(res.cart) },
			{ onError: (err) => console.log(err) }
		);
	}, [region]);

	// console.log("Local cart state", cart);
	return (
		<StoreContext.Provider value={{ cart, setCart, region, setRegion }}>
			{children}
		</StoreContext.Provider>
	);
};
