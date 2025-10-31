import styles from "./Home.module.css";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import TrustedBy from "@/components/trustedBy/TrustedBy";
import Courses from "@/components/courses/Courses";

const Home = () => {
	return (
		<div className={styles.homeWrapper}>
			<Navigation />
			<Hero />
			<TrustedBy />
			<Courses />
		</div>
	);
};

export default Home;
