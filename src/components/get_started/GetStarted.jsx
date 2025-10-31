import styles from "./GetStarted.module.css";
import ArrowIcon from "@/assets/icons/arrow-icon.svg";

const GetStarted = () => {
	return (
		<div className={styles.getStarted}>
			<div className={styles.headerContainer}>
				<p className={styles.header}>Learn anything, anytime, anywhere</p>
				<p className={styles.subtitle}>
					Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
					id veniam aliqua proident excepteur commodo do ea.
				</p>
			</div>
			<div className={styles.btnContainer}>
				<button className={styles.getStartedBtn}>Get Started</button>
				<button className={styles.learnMoreBtn}>
					Learn more
					<img className={styles.arrow} src={ArrowIcon} alt="Arrow" />
				</button>
			</div>
		</div>
	);
};

export default GetStarted;
