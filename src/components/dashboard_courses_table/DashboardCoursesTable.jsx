import styles from "./DashboardCoursesTable.module.css";
import TextToImage from "@/assets/images/courses/text-to-image.svg";
import Switch from "@/components/ui/Switch";

const DashboardTable = () => {
	return (
		<table className={styles.table}>
			<tr>
				<th>All Courses</th>
				<th>Earnings</th>
				<th>Students</th>
				<th>Course Status</th>
			</tr>
			<tr>
				<td>
					<p>
						<img src={TextToImage} alt="Course" />
						<span>Build Text to image SaaS App in React JS</span>
					</p>
				</td>
				<td>$150</td>
				<td>25</td>
				<td>
					<Switch />
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<img src={TextToImage} alt="Course" />
						<span>Build Text to image SaaS App in React JS</span>
					</p>
				</td>
				<td>$150</td>
				<td>25</td>
				<td>
					<Switch />
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<img src={TextToImage} alt="Course" />
						<span>Build Text to image SaaS App in React JS</span>
					</p>
				</td>
				<td>$150</td>
				<td>25</td>
				<td>
					<Switch />
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<img src={TextToImage} alt="Course" />
						<span>Build Text to image SaaS App in React JS</span>
					</p>
				</td>
				<td>$150</td>
				<td>25</td>
				<td>
					<Switch />
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<img src={TextToImage} alt="Course" />
						<span>Build Text to image SaaS App in React JS</span>
					</p>
				</td>
				<td>$150</td>
				<td>25</td>
				<td>
					<Switch />
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<img src={TextToImage} alt="Course" />
						<span>Build Text to image SaaS App in React JS</span>
					</p>
				</td>
				<td>$150</td>
				<td>25</td>
				<td>
					<Switch />
				</td>
			</tr>
		</table>
	);
};

export default DashboardTable;
