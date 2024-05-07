export const Grid = ({ children, col, row, gap, pad }) => {
	const style = {
		display: "grid",
		gridTemplateColumns: `repeat(${col}, 1fr)`,
		gridTemplateRows: `repeat(${row}, 1fr)`,
		gap: `${gap}px`,
		padding: `${pad}px`,
	};

	return <section style={style}>{children}</section>;
};

export const GridMobile = ({ children, gap, pad, BGcolor, color }) => {
	const style = {
		display: "block",
		gap: `${gap}px`,
		padding: `${pad}px`,
		backgroundColor: `#${BGcolor}`,
		color: `#${color}`,
	};

	return <section style={style}>{children}</section>;
};

export const Flex = ({ children, BGcolor, color, justify }) => {
	const style = {
		display: "flex",
		backgroundColor: `#${BGcolor}`,
		color: `#${color}`,
		justifyContent: `${justify}`,
	};

	return <section style={style}>{children}</section>;
};
