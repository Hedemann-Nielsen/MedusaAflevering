import { Column } from "./FooterColumn";

export const FooterContent = ({ data }) => (
	<>
		{data.map((item, index) => (
			<Column key={index} title={item.title}>
				{item.content.map((text, i) => (
					<p key={i}>{text}</p>
				))}
			</Column>
		))}
	</>
);
