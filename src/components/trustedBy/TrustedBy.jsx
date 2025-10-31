import styles from "./TrustedBy.module.css";
import MicrosoftLogo from "@/assets/images/microsoft-logo.svg";
import WalmartLogo from "@/assets/images/walmart-logo.svg";
import AccentureLogo from "@/assets/images/accenture-logo.svg";
import AdobeLogo from "@/assets/images/adobe-logo.svg";
import PaypalLogo from "@/assets/images/paypal-logo.svg";

const TrustedBy = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>Trusted by learners from</p>
			<div className={styles.logoContainer}>
				<div className={styles.logo}>
					<img src={MicrosoftLogo} alt="Microsoft Logo" />
				</div>
				<div className={styles.logo}>
					<img src={WalmartLogo} alt="Walmart Logo" />
				</div>
				<div className={styles.logo}>
					<img src={AccentureLogo} alt="Accenture Logo" />
				</div>
				<div className={styles.logo}>
					<img src={AdobeLogo} alt="Adobe Logo" />
				</div>
				<div className={styles.logo}>
					<img src={PaypalLogo} alt="Paypal Logo" />
				</div>
			</div>
		</div>
	);
};

export default TrustedBy;
