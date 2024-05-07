import { Outlet } from "react-router-dom";
import { Footer } from "../Partials/Footer/Footer.jsx";
import { Header } from "../Partials/Header/Header.jsx";
import { CookieBanner } from "../CookieBanner/CookieBanner.jsx";

export const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<CookieBanner />
			<Footer />
		</>
	);
};
