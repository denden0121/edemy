import styles from "./Home.module.css";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import TrustedBy from "@/components/trustedBy/TrustedBy";
import Courses from "@/components/courses/Courses";
import Testimonial from "@/components/testimonial/Testimonial";
import GetStarted from "@/components/get_started/GetStarted";
import Footer from "@/components/footer/Footer";
import { useRef, useEffect } from "react";
import gsap from "gsap";
const Home = () => {
	const lineRef = useRef(null);

	// useEffect(() => {
	// 	gsap.to(lineRef.current, {
	// 		x: 200,
	// 		y: 200,
	// 		attr: {
	// 			opacity: 1,
	// 		},
	// 		rotate: 90,
	// 		duration: 1,
	// 		delay: 1.6,
	// 	});
	// }, []);

	return (
		<div className={styles.home}>
			{/* <svg
				ref={lineRef}
				className={styles.homeLine}
				width="12"
				height="258"
				viewBox="0 0 12 258"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				opacity={0}
			>
				<path
					d="M5.7735 257.552L11.547 251.779L5.7735 246.005L-4.15674e-06 251.779L5.7735 257.552ZM5.7735 -3.42043e-07L-4.15674e-06 5.7735L5.7735 11.547L11.547 5.7735L5.7735 -3.42043e-07ZM5.7735 251.779H6.7735V5.7735H5.7735H4.7735V251.779H5.7735Z"
					fill="#2563EB"
				/>
			</svg> */}
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
