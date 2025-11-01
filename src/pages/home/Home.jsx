import styles from "./Home.module.css";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import TrustedBy from "@/components/trustedBy/TrustedBy";
import Courses from "@/components/courses/Courses";
import Testimonial from "@/components/testimonial/Testimonial";
import GetStarted from "@/components/get_started/GetStarted";
import Footer from "@/components/footer/Footer";

const Home = () => {
	return (
		<div className={styles.home}>
			{/* navigation */}
			<Navigation />
			{/* hero */}
			<Hero />
			{/* trusted by */}
			<TrustedBy />
			{/* courses */}
			<Courses />
			{/* testimonials */}
			<Testimonial />
			{/* get started */}
			<GetStarted />
			{/* footer */}
			<Footer />
		</div>
	);
};

export default Home;
