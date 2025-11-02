import styles from "./DashboardOverview.module.css";
import TotalEnrolment from "@/assets/icons/patients-icon.svg";
import TotalCourses from "@/assets/icons/courses-icon.svg";
import TotalEarnings from "@/assets/icons/earn-icon.svg";

const DashboardOvervew = () => {
	return (
		<div className={styles.dashboardOverview}>
			<div className={styles.overviewCard}>
				<img src={TotalEnrolment} alt="" />
				<div>
					<p>14</p>
					<p>Total Enrolments</p>
				</div>
			</div>
			<div className={styles.overviewCard}>
				<img src={TotalCourses} alt="" />
				<div>
					<p>8</p>
					<p>Total Courses</p>
				</div>
			</div>
			<div className={styles.overviewCard}>
				<img src={TotalEarnings} alt="" />
				<div>
					<p>$245</p>
					<p>Total Earnings</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardOvervew;
