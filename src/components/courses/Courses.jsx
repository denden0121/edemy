import styles from "./Courses.module.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import CourseCard from "@/components/course_card/CourseCard";
import TextToImage from "@/assets/images/courses/text-to-image.png";
import AIbgRemoval from "@/assets/images/courses/AI-bg-removal-saas-app.png";
import ReactRouter from "@/assets/images/courses/react-router.png";
import BuildFullEcommerce from "@/assets/images/courses/build-full-stack-e-commerce.png";

const Courses = () => {
	const navigate = useNavigate();

	const courseData = [
		{
			title: "Build Text to image SaaS App in React JS",
			instructor: "Richard James",
			cost: 10.99,
			img: TextToImage,
		},
		{
			title: "Build AI BG Removal SaaS App in React JS",
			instructor: "Richard James",
			cost: 10.99,
			img: AIbgRemoval,
		},
		{
			title: "React Router Complete Course in One Video",
			instructor: "Richard James",
			cost: 10.99,
			img: ReactRouter,
		},
		{
			title: "Build Full Stack E-Commerce App in React JS",
			instructor: "Richard James",
			cost: 10.99,
			img: BuildFullEcommerce,
		},
	];

	return (
		<div className={styles.container}>
			<p className={styles.title}>Learn from the best</p>
			<p className={styles.subtitle}>
				Discover our top-rated courses across various categories. From coding
				and designing to business and wellness, our coruses are crafted to
				deliver results.
			</p>
			<div className={styles.courseContainer}>
				{courseData.map((data, index) => (
					<CourseCard
						key={index}
						img={data.img}
						title={data.title}
						instructor={data.instructor}
						cost={data.cost}
					/>
				))}
			</div>
			<button onClick={() => navigate("/course-list")}>Show all courses</button>
		</div>
	);
};

export default Courses;
