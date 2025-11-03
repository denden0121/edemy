import styles from "./CourseDetail.module.css";
import { useParams } from "react-router";
import Navigation from "@/components/navigation/Navigation";
import CourseDetailsCard from "@/components/course_details_card/CourseDetailsCard";
import CourseDetailsDescription from "@/components/course_details_description/CourseDetailsDescription";

const CourseDetails = () => {
	let params = useParams();
	console.log(params);
	return (
		<div className={styles.courseDetails}>
			<Navigation />
			<div className="flex flex-row w-[80%] h-full">
				<div className={styles.detailsContainer}>
					<CourseDetailsDescription />
				</div>
				<div className={styles.cardContainer}>
					<CourseDetailsCard />
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
