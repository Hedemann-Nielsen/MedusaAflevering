import { Flex, GridMobile } from "../../../Styles/DisplayVariants";
import style from "./Footer.module.scss";
import { FooterData } from "../../Static/FooterData";
import { FooterContent } from "./FooterContent";

export const Footer = () => {
	const isMobileView = window.innerWidth < 768;

	return (
		<footer className={style.footerComponent}>
			{isMobileView ? (
				<GridMobile color="efefef" BGcolor="1e1e1e">
					<FooterContent data={FooterData} />
				</GridMobile>
			) : (
				<Flex color="efefef" BGcolor="1e1e1e" justify="space-around">
					<FooterContent data={FooterData} />
				</Flex>
			)}
		</footer>
	);
};
