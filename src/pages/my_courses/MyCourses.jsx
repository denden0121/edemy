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
					<div className={styles.dashboardTable}>
						<p>My Courses</p>
						<DashboardCoursesTable />
					</div>
				</main>
			</div>
		</div>
	);
};

export default MyCourses;
