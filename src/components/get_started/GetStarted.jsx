import styles from "./GetStarted.module.css";
import ArrowIcon from "@/assets/icons/arrow-icon.svg";
import { useHeroRef } from "@/context/HeroRefContext";

const GetStarted = () => {
	const { heroRef } = useHeroRef();
	return (
		<div className={styles.getStarted}>
			<div className={styles.headerContainer} data-aos="fade-up">
				<p className={styles.header}>Learn anything, anytime, anywhere</p>
				<p className={styles.subtitle}>
					Empower your journey with flexible, high-quality courses designed to
					fit your unique schedule, learning style, and personal goals. Discover
					new skills, gain valuable knowledge, and take confident steps toward
					achieving your dreams at your own pace.
				</p>
			</div>
			<div className={styles.btnContainer}>
				<button
					className={styles.getStartedBtn}
					data-aos="fade-right"
					onClick={() => heroRef.current.scrollIntoView({ behavior: "smooth" })}
				>
					Get Started
				</button>
				<button
					className={styles.learnMoreBtn}
					data-aos="fade-left"
					onClick={() => heroRef.current.scrollIntoView({ behavior: "smooth" })}
				>
					Learn more
					<img className={styles.arrow} src={ArrowIcon} alt="Arrow" />
				</button>
			</div>
		</div>
	);
};

export default GetStarted;
