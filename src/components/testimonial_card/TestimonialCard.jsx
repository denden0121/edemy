import styles from "./TestimonialCard.module.css";
import StarColored from "@/assets/images/star-colored.svg";
import { useHeroRef } from "@/context/HeroRefContext";

const TestimonialCard = ({ index, img, name, profession, testimonialText }) => {
	const { heroRef } = useHeroRef();

	return (
		<div key={index} className={styles.card}>
			<div className={styles.informationContainer}>
				<span className={styles.profile}>
					<img src={img} alt="" />
				</span>
				<span className={styles.description}>
					<p className={styles.name}>{name}</p>
					<p className={styles.profession}>{profession}</p>
				</span>
			</div>
			<div className={styles.detialsContainer}>
				<span className={styles.rate}>
					<img src={StarColored} alt="Star" />
					<img src={StarColored} alt="Star" />
					<img src={StarColored} alt="Star" />
					<img src={StarColored} alt="Star" />
					<img src={StarColored} alt="Star" />
				</span>
				<p className={styles.testimonialText}>{testimonialText}</p>
				<p
					className={styles.readMoreBtn}
					onClick={() => heroRef.current.scrollIntoView({ behavior: "smooth" })}
				>
					Read more
				</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
