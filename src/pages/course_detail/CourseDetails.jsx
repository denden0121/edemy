import styles from "./CourseDetail.module.css";
import Navigation from "@/components/navigation/Navigation";
import CourseDetailsCard from "@/components/course_details_card/CourseDetailsCard";
import CourseDetailsDescription from "@/components/course_details_description/CourseDetailsDescription";
import Footer from "@/components/footer/Footer";

const CourseDetails = () => {
	return (
		<>
			<div className={styles.courseDetails}>
				<Navigation />
				<div className={styles.container}>
					<div className={styles.detailsContainer}>
						<CourseDetailsDescription />
					</div>
					<div className={styles.cardContainer}>
						<CourseDetailsCard />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CourseDetails;
