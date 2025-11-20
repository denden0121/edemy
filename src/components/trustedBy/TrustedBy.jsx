import styles from "./TrustedBy.module.css";
import MicrosoftLogo from "@/assets/images/microsoft-logo.svg";
import WalmartLogo from "@/assets/images/walmart-logo.svg";
import AccentureLogo from "@/assets/images/accenture-logo.svg";
import AdobeLogo from "@/assets/images/adobe-logo.svg";
import PaypalLogo from "@/assets/images/paypal-logo.svg";

const TrustedBy = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.title} data-aos="fade-up" data-aos-delay="1300">
				Trusted by learners from
			</p>
			<div className={styles.logoContainer}>
				<div className={styles.logo} data-aos="fade-up" data-aos-delay="1300">
					<img src={MicrosoftLogo} alt="Microsoft Logo" />
				</div>
				<div className={styles.logo} data-aos="fade-up" data-aos-delay="1300">
					<img src={WalmartLogo} alt="Walmart Logo" />
				</div>
				<div className={styles.logo} data-aos="fade-up" data-aos-delay="1300">
					<img src={AccentureLogo} alt="Accenture Logo" />
				</div>
				<div className={styles.logo} data-aos="fade-up" data-aos-delay="1300">
					<img src={AdobeLogo} alt="Adobe Logo" />
				</div>
				<div className={styles.logo} data-aos="fade-up" data-aos-delay="1300">
					<img src={PaypalLogo} alt="Paypal Logo" />
				</div>
			</div>
		</div>
		// <div className={styles.wrapper}>
		// 	<p className={styles.title} data-aos="fade-down" data-aos-delay="1500">
		// 		Trusted by learners from
		// 	</p>
		// 	<div className={styles.logoContainer}>
		// 		<div
		// 			className={styles.logo}
		// 			data-aos="fade-up-right"
		// 			data-aos-delay="1500"
		// 		>
		// 			<img src={MicrosoftLogo} alt="Microsoft Logo" />
		// 		</div>
		// 		<div className={styles.logo} data-aos="fade-up" data-aos-delay="1500">
		// 			<img src={WalmartLogo} alt="Walmart Logo" />
		// 		</div>
		// 		<div className={styles.logo} data-aos="fade-up" data-aos-delay="1500">
		// 			<img src={AccentureLogo} alt="Accenture Logo" />
		// 		</div>
		// 		<div className={styles.logo} data-aos="fade-up" data-aos-delay="1500">
		// 			<img src={AdobeLogo} alt="Adobe Logo" />
		// 		</div>
		// 		<div
		// 			className={styles.logo}
		// 			data-aos="fade-up-left"
		// 			data-aos-delay="1500"
		// 		>
		// 			<img src={PaypalLogo} alt="Paypal Logo" />
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default TrustedBy;
