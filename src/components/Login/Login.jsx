import { FormData } from "../Static/FormData";
import style from "./Login.module.scss";
import { Flex } from "../../Styles/DisplayVariants";

export const Login = () => {
	return (
		<div className={style.Basket}>
			<h2>Login</h2>
			<Flex className={style.flexContainer}>
				<form id="form">
					{FormData.filter((_, index) => index < 2).map((field) => (
						<div key={field.name}>
							<label htmlFor={field.name}>{field.label}</label>
							<input
								type={field.type}
								name={field.name}
								value={FormData[field.name]}
							/>
						</div>
					))}
					<div className={style.buttons}>
						<button id="submit">Sign up</button>
						<button id="submit">Submit</button>
					</div>
				</form>
			</Flex>
		</div>
	);
};
