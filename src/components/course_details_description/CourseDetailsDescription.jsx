import styles from "./CourseDetailsDescription.module.css";
import StarColored from "@/assets/images/star-colored.svg";
import Star from "@/assets/images/Star.svg";
import CourseDetailsStructure from "@/components/course_details_structure/CourseDetailsStructure";

const CourseDetailsDescription = () => {
	return (
		<div className="flex flex-col gap-12">
			<div className={styles.headerContainer}>
				<p className={styles.header}>
					Build Text to Image SaaS App in React JS
				</p>
				<p className={styles.subtitle}>
					Master MERN Stack by building a Full Stack AI Text to Image SaaS App
					using React js, Mongodb, Node js, Express js and Stripe Payment
				</p>
				<ul className={styles.ratings}>
					<li>
						<div>
							<p>4.5</p>
							<img src={StarColored} alt="" />
							<img src={StarColored} alt="" />
							<img src={StarColored} alt="" />
							<img src={StarColored} alt="" />
							<img src={Star} alt="" />
						</div>
					</li>
					<li>
						<p>(112 ratings)</p>
					</li>
					<li>
						<p>21 students</p>
					</li>
				</ul>
				<p className={styles.instructor}>
					Course by <span>Richard James</span>
				</p>
			</div>
			<div className={styles.structure}>
				<p>Course Structure</p>
				<p>22 sections - 54 lectures - 27h 25m total duration</p>
				<CourseDetailsStructure />
				<div className={styles.descriptionContainer}>
					<p className={styles.description}>Course Description</p>
					<p>
						This is the most comprehensive and in-depth JavaScript course with
						30 JavaScript projects. JavaScript is currently the most popular
						programming language in the world. If you are an aspiring web
						developer or full stack developer, JavaScript is a must to learn. It
						also helps you to get high-paying jobs all over the world.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseDetailsDescription;
