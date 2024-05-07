import { Grid, GridMobile } from "../../Styles/DisplayVariants.jsx";
import { salesPitchData } from "../Static/SalesPitchData";
import { SalesPitchItem } from "./SalesPitchItem.jsx";

const isMobileView = window.innerWidth <= 768;

export const SalesPitch = () => {
	const GridComponent = isMobileView ? GridMobile : Grid;

	return (
		<GridComponent col={3} gap={25} pad={70}>
			{salesPitchData.map((pitch, index) => (
				<SalesPitchItem key={index} pitch={pitch} />
			))}
		</GridComponent>
	);
};
