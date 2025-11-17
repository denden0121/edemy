import styles from "./LoggedFooter.module.css";
import EdemyLogo from "@/assets/images/edemy-logo.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";

const LoggedFooter = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.footer}>
			<div className={styles.footerInfo}>
				<div className={styles.logoSection} onClick={() => navigate("/")}>
					<img src={EdemyLogo} alt="" className={styles.logo} />
					<p>Edemy</p>
				</div>
				<p className={styles.copyright}>All right reserved. Copyright @Edemy</p>
			</div>
			<ul className={styles.socials}>
				<li>
					<SiFacebook />
				</li>
				<li>
					<SiX />
				</li>
				<li>
					<SiInstagram />
				</li>
			</ul>
		</div>
	);
};

export default LoggedFooter;
