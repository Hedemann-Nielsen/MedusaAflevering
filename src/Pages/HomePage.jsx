import { HeadingPicture } from "../components/Partials/HeadingPicture/HeadingPicture";
import { Logo } from "../components/Partials/Logo/Logo";
import { SalesPitch } from "../components/SalesPitch/SalesPitch";
import { ShopNow } from "../components/ShopNow/ShopNow";
import { Spacer } from "../components/Spacer/Spacer";
import { Testimonies } from "../components/Testimonies/Testimonies.jsx";

export const HomePage = () => {
	return (
		<>
			<Logo />
			<HeadingPicture />
			<SalesPitch />
			<Spacer />
			<ShopNow />
			<Spacer />
			<Testimonies />
		</>
	);
};
