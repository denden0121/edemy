import styles from "./CourseList.module.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import CourseCard from "@/components/course_card/CourseCard";
import TextToImage from "@/assets/images/courses/text-to-image.png";
import AIbgRemoval from "@/assets/images/courses/AI-bg-removal-saas-app.png";
import ReactRouter from "@/assets/images/courses/react-router.png";
import BuildFullEcommerce from "@/assets/images/courses/build-full-stack-e-commerce.png";
import SearchIcon from "@/assets/icons/search-icon.svg";

const CourseList = () => {
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
		<>
			<Navigation />
			<div className={styles.courseList}>
				{/* navigation */}
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<p>Course List</p>
						<p>
							<span>Home </span> / Course List
						</p>
					</div>

					<div className={styles.searchContainer}>
						<label htmlFor="search">
							<img src={SearchIcon} alt="Search" />
							<input
								className={styles.searchInput}
								type="text"
								placeholder="Search for courses"
							/>
						</label>
						<button className={styles.searchBtn}>Search</button>
					</div>
				</div>
				<div className={styles.container}>
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
			</div>
			<Footer />
		</>
	);
};

export default CourseList;
