import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import EdemyLogo from "@/assets/images/edemy-logo.svg";

const Navigation = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.navigationWrapper}>
			<div className={styles.navigationContainer}>
				<div className={styles.logoSection} onClick={() => navigate("/")}>
					<img src={EdemyLogo} alt="" className={styles.logo} />
					<p>Edemy</p>
				</div>
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
