import styles from "./Testimonial.module.css";
import TestimonialCard from "@/components/testimonial_card/TestimonialCard";
import DJackmanProfile from "@/assets/images/profile/donald-jackman.svg";
import RNelson from "@/assets/images/profile/richard-nelson.svg";
import JWashington from "@/assets/images/profile/james-washington.svg";

const Testimonial = () => {
	const testimonialData = [
		{
			img: DJackmanProfile,
			name: "Donald Jackman",
			proffession: "SWE 1 @ Amazon",
			testimonialText:
				"I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
		},
		{
			img: RNelson,
			name: "Richard Nelson",
			proffession: "SWE 2 @ Samsung",
			testimonialText:
				"I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
		},
		{
			img: JWashington,
			name: "James Washington",
			proffession: "SWE 2 @ Google",
			testimonialText:
				"I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
		},
	];
	return (
		<div className={styles.testimonial}>
			<p className={styles.title}>Testimonials</p>
			<p className={styles.subtitle}>
				Hear from our learners as they share their journey of transformation,
				success, and how our platform has made a difference in their lives.
			</p>
			<div className={styles.container}>
				{testimonialData.map((data, index) => (
					<TestimonialCard
						index={index}
						img={data.img}
						name={data.name}
						proffession={data.proffession}
						testimonialText={data.testimonialText}
					/>
				))}
			</div>
		</div>
	);
};

export default Testimonial;
