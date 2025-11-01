import styles from "./CourseDetail.module.css";
import Navigation from "@/components/navigation/Navigation";
import CourseDetailsCard from "../../components/course_details_card/CourseDetailsCard";

const CourseDetails = () => {
	return (
		<div className={styles.courseDetails}>
			<Navigation />
			<div className="flex lg:flex-row md:flex-col w-[80%] h-full">
				<div className={styles.div1}>1</div>
				<div className={styles.div2}>
					<CourseDetailsCard />
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
