import styles from "./CourseDetailsCard.module.css";
import TextToImage from "@/assets/images/courses/text-to-image.svg";
import TimeLeftIcon from "@/assets/icons/clock-icon.svg";
import TimeClockIcon from "@/assets/icons/time-clock-icon.svg";
import LessonIcon from "@/assets/icons/lesson.svg";
import StarColoredIcon from "@/assets/icons/star-colored.svg";

const CourseDetailsCard = () => {
	return (
		<div className="shadow-lg flex flex-col justify-start items-start">
			<img className={styles.courseImg} src={TextToImage} alt="Text to image" />
			<div className={styles.courseDescription}>
				<p className={styles.timeLeft}>
					<img src={TimeLeftIcon} alt="" />5 days left at this price!
				</p>
				<div className={styles.priceContainer}>
					<p>$10.99</p>
					<p>$19.99</p>
					<p>50% off</p>
				</div>
				<div className={styles.summaryContainer}>
					<p>
						<img src={StarColoredIcon} alt="" />
						4.5
					</p>
					<p>
						<img src={TimeClockIcon} alt="" />
						30 hours
					</p>
					<p>
						<img src={LessonIcon} alt="" />
						54 lessons
					</p>
				</div>
				<button className={styles.enrollNowBtn}>Enroll Now</button>
				<p className={styles.question}>What's in the course?</p>
				<ul>
					<li>Lifetime access with free updates</li>
					<li>Step-by-step, hands-on project guidance</li>
					<li>Downloadable resources and source code.</li>
					<li>Quizzes to test your knowledge</li>
					<li>Certificate of completion</li>
					<li>Quizzes to test your knowledge</li>
				</ul>
			</div>
		</div>
	);
};

export default CourseDetailsCard;

// 1. Force a Standard Aspect Ratio at Upload (Recommended)

// When users upload a course image, force them to crop or scale to your standard ratio, e.g. 16:9 or 4:3.

// Use a frontend cropper (e.g. react-easy-crop
//  or Cropper.js
// ) so users see exactly how their image will appear.

// Store the cropped version on your server.
