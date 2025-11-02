import styles from "./DashboardTable.module.css";
import RNelson from "@/assets/images/profile/richard-nelson.svg";
import EMurphy from "@/assets/images/profile/enrique-murphy.svg";
import APowell from "@/assets/images/profile/profile-alison.svg";

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
						<img src={RNelson} alt="Profile" /> <span>Richard Sanford</span>
					</p>
				</td>
				<td>Build Text to image SaaS App in React JS</td>
				<td>22 Aug, 2024</td>
			</tr>
			<tr>
				<td>2</td>
				<td>
					<p>
						<img src={EMurphy} alt="Profile" /> <span>Enrique Murphy</span>
					</p>
				</td>
				<td>Build AI BG Removal SaaS App in React JS</td>
				<td>22 Aug, 2024</td>
			</tr>
			<tr>
				<td>3</td>
				<td>
					<p>
						<img src={APowell} alt="Profile" /> <span>Alison Powell</span>
					</p>
				</td>
				<td>React Router Complete Course in One Video</td>
				<td>25 Sep, 2024</td>
			</tr>
			<tr>
				<td>4</td>
				<td>
					<p>
						<img src={RNelson} alt="Profile" /> <span>Richard Sanford</span>
					</p>
				</td>
				<td>Build Text to image SaaS App in React JS</td>
				<td>22 Aug, 2024</td>
			</tr>
			<tr>
				<td>5</td>
				<td>
					<p>
						<img src={EMurphy} alt="Profile" /> <span>Enrique Murphy</span>
					</p>
				</td>
				<td>Build AI BG Removal SaaS App in React JS</td>
				<td>22 Aug, 2024</td>
			</tr>
			<tr>
				<td>6</td>
				<td>
					<p>
						<img src={APowell} alt="Profile" /> <span>Alison Powell</span>
					</p>
				</td>
				<td>React Router Complete Course in One Video</td>
				<td>25 Sep, 2024</td>
			</tr>
			<tr>
				<td>7</td>
				<td>
					<p>
						<img src={RNelson} alt="Profile" /> <span>Richard Sanford</span>
					</p>
				</td>
				<td>Build Text to image SaaS App in React JS</td>
				<td>22 Aug, 2024</td>
			</tr>
			<tr>
				<td>8</td>
				<td>
					<p>
						<img src={EMurphy} alt="Profile" /> <span>Enrique Murphy</span>
					</p>
				</td>
				<td>Build AI BG Removal SaaS App in React JS</td>
				<td>22 Aug, 2024</td>
			</tr>
			<tr>
				<td>9</td>
				<td>
					<p>
						<img src={APowell} alt="Profile" /> <span>Alison Powell</span>
					</p>
				</td>
				<td>React Router Complete Course in One Video</td>
				<td>25 Sep, 2024</td>
			</tr>
		</table>
	);
};

export default DashboardTable;
