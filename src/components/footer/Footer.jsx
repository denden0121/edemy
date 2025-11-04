import styles from "./Footer.module.css";
import EdemyLogo from "@/assets/images/edemy-logo.svg";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				{/* description */}
				<div className={styles.decription}>
					<div className={styles.logoSection}>
						<img src={EdemyLogo} alt="" className={styles.logo} />
						<p className={styles.edemy}>Edemy</p>
					</div>
					<p className={styles.about}>
						Empower your journey with flexible courses designed to fit your
						schedule and goals.
					</p>
				</div>
				{/* company */}
				<div className={styles.company}>
					<p className={styles.header}>Company</p>
					<ul className={styles.footerUl}>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About us</a>
						</li>
						<li>
							<a href="#">Contact us</a>
						</li>
						<li>
							<a href="#">Privacy policy</a>
						</li>
					</ul>
				</div>
				{/* subscribe */}
				<div className={styles.subscribe}>
					<p className={styles.header}>Subscrive to our newsletter</p>
					<p className={styles.subtitle}>
						The latest news, articles, and resources, sent to your inbox weekly.
					</p>
					<form action="">
						<label htmlFor="email">
							<input type="text" placeholder="Enter your email" />
						</label>
						<button className={styles.subscribeBtn}>Subscribe</button>
					</form>
				</div>
			</div>
			<p className={styles.copyright}>
				Copyright 2024 © Edemy. All Right Reserved.
			</p>
		</div>
	);
};

export default Footer;
