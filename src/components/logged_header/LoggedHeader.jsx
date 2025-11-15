import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./LoggedHeader.module.css";
import EdemyLogo from "@/assets/images/edemy-logo.svg";
import ProfileIcon from "@/assets/icons/profile-icon.svg";

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
						<p>Hi! Denden</p>
					</div>
					<div className={styles.profileBtn}>
						<img src={ProfileIcon} alt="" />
						<span>
							<p>My Profile</p>
							<p>Logout</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
