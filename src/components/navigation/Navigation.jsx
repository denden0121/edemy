import styles from "./Navigation.module.css";
import { Routes, Route, Link } from "react-router-dom";
import EdemyLogo from "@/assets/images/edemy-logo.svg";

const Navigation = () => {
	return (
		<div className={styles.navigationWrapper}>
			<div className={styles.navigationContainer}>
				<Link to={"/"}>
					<div className={styles.logoSection}>
						<img src={EdemyLogo} alt="" className={styles.logo} />
						<p>Edemy</p>
					</div>
				</Link>
				<div className={styles.actionSection}>
					<div className={styles.btnContainer}>
						<p>Add Course</p>
						<p>|</p>
						<p>Login</p>
					</div>
					<button className={styles.createAccBtn}>Create Account</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
