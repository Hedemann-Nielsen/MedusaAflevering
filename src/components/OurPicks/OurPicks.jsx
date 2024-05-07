import {
	formatVariantPrice,
	useProducts,
	useCreateLineItem,
} from "medusa-react";
import style from "./OurPicks.module.scss";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Grid, GridMobile } from "../../Styles/DisplayVariants.jsx";

export const OurPicks = () => {
	const { products, isLoading: isProductLoading } = useProducts();
	const { cart, setCart, region } = useContext(StoreContext);
	const createLineItem = useCreateLineItem(cart?.id);

	const isMobileView = window.innerWidth < 768;

	if (isProductLoading && !cart) return <p>Loading...</p>;

	// Tilføj vare til kurven
	const addToCart = (variants, quantity) => {
		const variantId = variants.id;
		createLineItem.mutate(
			{ variant_id: variantId, quantity: quantity },
			{
				onSuccess: ({ cart }) => setCart(cart),
				onError: (err) => console.log("Error adding variant to cart", err),
			}
		);
	};

	// Funktion til at generere produktindhold
	const generateProductContent = (product) => (
		<div key={product.id}>
			<h3>{product.title}</h3>
			<img src={product.thumbnail} alt={product.title} />
			<p>{product.description}</p>
			<p>
				Price:
				{formatVariantPrice({
					variant: product.variants[0],
					region: region,
					includeTaxes: false,
				})}
			</p>
			<button onClick={() => addToCart(product.variants[0], 1)}>
				Add to cart
			</button>
		</div>
	);

	return (
		<div className={style.OurPicks}>
			<h2>Our Picks</h2>
			{isMobileView ? (
				<GridMobile>{products?.map(generateProductContent)}</GridMobile>
			) : (
				<Grid col={3}>{products?.map(generateProductContent)}</Grid>
			)}
		</div>
	);
};
