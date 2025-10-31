import styles from "./CourseCard.module.css";
import AIbgRemoval from "@/assets/images/courses/AI-bg-removal-saas-app.png";
import StarColored from "@/assets/images/star-colored.svg";
import Star from "@/assets/images/star.svg";

const CourseCard = () => {
	return (
		<div className={styles.card}>
			<img src={AIbgRemoval} alt="" />
			<div className={styles.description}>
				<p className={styles.title}>Build Text to image Saas App in React JS</p>
				<p className={styles.instructor}>Richard James</p>
				<p className={styles.rate}>
					4.5
					<span>
						<img src={StarColored} alt="Star" />
						<img src={StarColored} alt="Star" />
						<img src={StarColored} alt="Star" />
						<img src={StarColored} alt="Star" />
						<img src={Star} alt="Star" />
					</span>
					<span className={styles.rateCount}>(122)</span>
				</p>
				<p className={styles.cost}>$10.99</p>
			</div>
		</div>
	);
};

export default CourseCard;
