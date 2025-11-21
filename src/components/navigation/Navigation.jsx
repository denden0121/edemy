import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import EdemyLogo from "@/assets/images/edemy-logo.svg";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { User } from "lucide-react";

const Navigation = () => {
	const navigate = useNavigate();
	const { width, height } = useWindowDimensions();

	return (
		<div
			className={styles.navigationWrapper}
			data-aos="fade-down"
			data-aos-delay="1300"
		>
			<div className={styles.navigationContainer}>
				<div className={styles.logoSection} onClick={() => navigate("/")}>
					<img src={EdemyLogo} alt="" className={styles.logo} />
					<p>Edemy</p>
				</div>
				<div className={styles.actionSection}>
					<div className={styles.btnContainer}>
						<p onClick={() => navigate("/dashboard")}>Add Course</p>
						<p className={styles.login} onClick={() => navigate("/dashboard")}>
							Login
						</p>
						<User size={22} className={styles.userIcon} />
					</div>
					<button className={styles.createAccBtn}>Create Account</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
