import styles from "./Dashboard.module.css";
import LoggedHeader from "@/components/logged_header/LoggedHeader";
import Navigation from "@/components/side_navigation/SideNavigation";
import Overview from "@/components/dashboard_overview/DashboardOverview";
import DashboardTable from "@/components/dashboard_table/DashboardTable";
import LoggedFooter from "@/components/logged_footer/loggedFooter";

const Dashboard = () => {
	return (
		<div className={styles.dashboard}>
			<LoggedHeader />
			<div className={styles.container}>
				<Navigation />
				<main>
					<Overview />
					<div
						className={styles.dashboardTable}
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<p>Latest Enrolments</p>
						<span data-aos="fade-up" data-aos-delay="800">
							<DashboardTable />
						</span>
					</div>
				</main>
			</div>
			{/* <LoggedFooter /> */}
		</div>
	);
};

export default Dashboard;
