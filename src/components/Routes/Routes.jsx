import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../Pages/HomePage.jsx";
import { ProductPage } from "../../Pages/ProductPage.jsx";
import { CheckoutPage } from "../../Pages/CheckoutPage.jsx";
import { LoginPage } from "../../Pages/LoginPage.jsx";
import { FallbackPage } from "../../Pages/FallbackPage.jsx";
import { SideCart } from "../../Pages/SideCart.jsx";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/home",
				element: <HomePage />,
			},
			{
				path: "/products",
				element: <ProductPage />,
			},
			{
				path: "/checkout",
				element: <CheckoutPage />,
			},
			{
				path: "/cart",
				element: <SideCart />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/*",
				element: <FallbackPage />,
			},
		],
	},
]);
