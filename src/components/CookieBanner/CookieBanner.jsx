import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import style from "./CookieBanner.module.scss";

export const CookieBanner = () => {
	const [trackTrafik, setTrackTrafik] = useState(true);

	useEffect(() => {
		if (localStorage.getItem("cookies")) {
			setTrackTrafik(false);
			if (JSON.parse(localStorage.getItem("cookies")) === true) {
				ReactGA.initialize(import.meta.env.VITE_PUBLIC_TrackID);
			}
		}
	}, [trackTrafik]);

	const cookieOK = () => {
		localStorage.setItem("cookies", true);
		setTrackTrafik(false);
	};

	const cokkieDeny = () => {
		localStorage.setItem("cookies", false);
		setTrackTrafik(false);
	};
	return (
		<>
			{trackTrafik && (
				<section className={style.banner}>
					<h3>Cookie Notice:</h3>
					<p>
						We are using cookies to personalize content and ads, to provide
						social media features, and to analyze our traffic. Is it okay with
						you?
					</p>
					<button onClick={() => cookieOK()}>okay</button>
					<button onClick={() => cokkieDeny()}>deny</button>
				</section>
			)}
		</>
	);
};
