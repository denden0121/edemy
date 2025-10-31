import styles from "./CourseCard.module.css";
import StarColored from "@/assets/images/star-colored.svg";
import Star from "@/assets/images/star.svg";

const CourseCard = ({ img, title, instructor, cost }) => {
	return (
		<div className={styles.card}>
			<img src={img} alt="" />
			<div className={styles.description}>
				<p className={styles.title}>{title}</p>
				<p className={styles.instructor}>{instructor}</p>
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
				<p className={styles.cost}>${cost}</p>
			</div>
		</div>
	);
};

export default CourseCard;
