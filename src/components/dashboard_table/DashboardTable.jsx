import styles from "./DashboardTable.module.css";
import RNelson from "@/assets/images/profile/richard-nelson.svg";

const DashboardTable = () => {
	return (
		<table className={styles.table}>
			<tr>
				<th>#</th>
				<th>Student name</th>
				<th>Course Title</th>
				<th>Date</th>
			</tr>
			<tr>
				<td>1</td>
				<td>
					<p>
						<img src={RNelson} alt="" /> <span>Richard Sanford</span>
					</p>
				</td>
				<td>Build Text to image SaaS App in React JS</td>
				<td>22 Aug, 2024</td>
			</tr>
			<tr>
				<td>1</td>
				<td>
					<p>
						<img src={RNelson} alt="" /> <span>Richard Sanford</span>
					</p>
				</td>
				<td>Build Text to image SaaS App in React JS</td>
				<td>22 Aug, 2024</td>
			</tr>
		</table>
	);
};

export default DashboardTable;
