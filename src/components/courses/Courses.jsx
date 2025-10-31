import styles from "./Courses.module.css";
import CourseCard from "@/components/course_card/CourseCard";

const Courses = () => {
	return (
		<div className={styles.container}>
			<p className={styles.title}>Learn from the best</p>
			<p className={styles.subtitle}>
				Discover our top-rated courses across various categories. From coding
				and designing to business and wellness, our coruses are crafted to
				deliver results.
			</p>
			<div className={styles.courseContainer}>
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div>
			<button>Show all courses</button>
		</div>
	);
};

export default Courses;
