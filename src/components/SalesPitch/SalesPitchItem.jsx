import style from "./SalesPitch.module.scss";
export const SalesPitchItem = ({ pitch }) => (
	<div className={style.salesPitch}>
		<h5>{pitch.title}</h5>
		<p>{pitch.description}</p>
		<img src={pitch.image} alt="" />
	</div>
);
