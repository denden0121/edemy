import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./SideNavigation.module.css";
import HomeIcon from "@/assets/icons/home-icon.svg";
import AddIcon from "@/assets/icons/add-icon.svg";
import CourseIcon from "@/assets/icons/course.svg";
import PersonIcon from "@/assets/icons/person.svg";

const SideNavigation = () => {
	const navigate = useNavigate();
	return (
		<nav className={styles.nav}>
			<ul>
				<li onClick={() => navigate("/dashboard")}>
					<img src={HomeIcon} alt="Home" />
					Dashboard
				</li>
				<li>
					<img src={AddIcon} alt="Add" />
					Add Course
				</li>
				<li onClick={() => navigate("/my-courses")}>
					<img src={CourseIcon} alt="Course" />
					My Courses
				</li>
				<li onClick={() => navigate("/students-enrolled")}>
					<img src={PersonIcon} alt="Student" />
					Student Enrolled
				</li>
			</ul>
		</nav>
	);
};

export default SideNavigation;
