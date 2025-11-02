import styles from "./SideNavigation.module.css";
import HomeIcon from "@/assets/icons/home-icon.svg";
import AddIcon from "@/assets/icons/add-icon.svg";
import CourseIcon from "@/assets/icons/course.svg";
import PersonIcon from "@/assets/icons/person.svg";

const SideNavigation = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<img src={HomeIcon} alt="Home" />
					Dashboard
				</li>
				<li>
					<img src={AddIcon} alt="Add" />
					Add Course
				</li>
				<li>
					<img src={CourseIcon} alt="Course" />
					My Courses
				</li>
				<li>
					<img src={PersonIcon} alt="Student" />
					Student Enrolled
				</li>
			</ul>
		</nav>
	);
};

export default SideNavigation;
