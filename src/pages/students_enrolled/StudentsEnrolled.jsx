import styles from "./StudentsEnrolled.module.css";
import LoggedHeader from "@/components/logged_header/LoggedHeader";
import Navigation from "@/components/side_navigation/SideNavigation";
import DashboardTable from "../../components/dashboard_table/DashboardTable";

const Dashboard = () => {
	return (
		<div className={styles.dashboard}>
			<LoggedHeader />
			<div className={styles.container}>
				<Navigation />
				<main>
					<div className={styles.dashboardTable}>
						<p>Students Enrolled</p>
						<DashboardTable />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
