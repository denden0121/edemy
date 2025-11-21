import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./SideNavigation.module.css";
import {
	House,
	SquarePlus,
	Album,
	UserCheck,
	CircleChevronRight,
} from "lucide-react";

const SideNavigation = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(true);

	return (
		<nav
			className={`${styles.nav} ${isOpen ? styles.navOpen : styles.navClose} `}
		>
			<ul className={styles.desktop}>
				<li className={styles.icon} onClick={() => navigate("/dashboard")}>
					<House size={18} />
					<p>Dashboard</p>
				</li>
				<li className={styles.icon} onClick={() => navigate("/add-course")}>
					<SquarePlus size={18} />
					<p>Add Course</p>
				</li>
				<li className={styles.icon} onClick={() => navigate("/my-courses")}>
					<Album size={18} />
					<p>My Courses</p>
				</li>
				<li
					className={styles.icon}
					onClick={() => navigate("/students-enrolled")}
				>
					<UserCheck size={18} />
					<p>Student Enrolled</p>
				</li>
			</ul>
			<span
				className={`${styles.toggleNavBtn} ${
					isOpen ? styles.toggleOpen : styles.toggleClose
				} `}
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				<CircleChevronRight size={32} />
			</span>
		</nav>
	);
};

export default SideNavigation;
