import styles from "./MyCourses.module.css";
import LoggedHeader from "@/components/logged_header/LoggedHeader";
import Navigation from "@/components/side_navigation/SideNavigation";
import DashboardCoursesTable from "../../components/dashboard_courses_table/DashboardCoursesTable";

const MyCourses = () => {
	return (
		<div className={styles.myCourses}>
			<LoggedHeader />
			<div className={styles.container}>
				<Navigation />
				<main>
					<div className={styles.dashboardTable} data-aos="fade-up">
						<p data-aos="fade-up" data-aos-delay="0">
							My Courses
						</p>
						<span data-aos="fade-up" data-aos-delay="200">
							<DashboardCoursesTable />
						</span>
					</div>
				</main>
			</div>
		</div>
	);
};

export default MyCourses;
