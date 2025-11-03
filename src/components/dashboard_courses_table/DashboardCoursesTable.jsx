import styles from "./DashboardCoursesTable.module.css";
import TextToImage from "@/assets/images/courses/text-to-image.svg";

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
					<label className={styles.switch}>
						<input type="checkbox" />
						<span className={styles.slider}></span>
					</label>
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
					<label className={styles.switch}>
						<input type="checkbox" />
						<span className={styles.slider}></span>
					</label>
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
					<label className={styles.switch}>
						<input type="checkbox" />
						<span className={styles.slider}></span>
					</label>
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
					<label className={styles.switch}>
						<input type="checkbox" />
						<span className={styles.slider}></span>
					</label>
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
					<label className={styles.switch}>
						<input type="checkbox" />
						<span className={styles.slider}></span>
					</label>
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
					<label className={styles.switch}>
						<input type="checkbox" />
						<span className={styles.slider}></span>
					</label>
				</td>
			</tr>
		</table>
	);
};

export default DashboardTable;
