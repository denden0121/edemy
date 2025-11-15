import styles from "./Dashboard.module.css";
import LoggedHeader from "@/components/logged_header/LoggedHeader";
import Navigation from "@/components/side_navigation/SideNavigation";
import Overview from "@/components/dashboard_overview/DashboardOverview";
import DashboardTable from "@/components/dashboard_table/DashboardTable";

const Dashboard = () => {
	return (
		<div className={styles.dashboard}>
			<LoggedHeader />
			<div className={styles.container}>
				<Navigation />
				<main>
					<Overview />
					<div className={styles.dashboardTable}>
						<p>Latest Enrolments</p>
						<DashboardTable />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
