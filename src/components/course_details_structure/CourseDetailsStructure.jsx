import styles from "./CourseDetailsStructure.module.css";
import PlayBtn from "@/assets/images/play-btn.svg";

const CourseDetailsStructure = () => {
	return (
		<div className={styles.structureContainer}>
			<details name="my-accordion">
				<summary>
					<a>Project Introduction</a>
					<a>3 lectures - 45 m</a>
				</summary>
				<div className={styles.container}>
					<div className={styles.items}>
						<img src={PlayBtn} alt="Play" />
						<span>
							<p>App Overview – Build Text-to-Image SaaS</p>
							<p>10 mins</p>
						</span>
					</div>
					<div className={styles.items}>
						<img src={PlayBtn} alt="Play" />
						<span>
							<p>Tech Stack – React, Node.js, MongoDB.</p>
							<p>15 mins</p>
						</span>
					</div>
					<div className={styles.items}>
						<img src={PlayBtn} alt="Play" />
						<span>
							<p>Core Features – Authentication, payment, deployment</p>
							<p>20 mins</p>
						</span>
					</div>
				</div>
			</details>
			<details name="my-accordion">
				<summary>
					<a>Project Setup and configuration</a>
					<a>4 lectures - 45 m</a>
				</summary>
				<div className={styles.container}>
					<div className={styles.items}>
						<img src={PlayBtn} alt="Play" />
						<span>
							<p>Environment Setup – Install Node.js, VS Code</p>
							<p>10 mins</p>
						</span>
					</div>
					<div className={styles.items}>
						<img src={PlayBtn} alt="Play" />
						<span>
							<p>Repository Setup – Clone project repository</p>
							<p>10 mins</p>
						</span>
					</div>
					<div className={styles.items}>
						<img src={PlayBtn} alt="Play" />
						<span>
							<p>Install Dependencies – Set up npm packages</p>
							<p>10 mins</p>
						</span>
					</div>
					<div className={styles.items}>
						<img src={PlayBtn} alt="Play" />
						<span>
							<p>Initial Configuration – Set up basic files and folders</p>
							<p>15 mins</p>
						</span>
					</div>
				</div>
			</details>
			<details name="my-accordion">
				<summary>
					<a>Tailwind Setup</a>
					<a>4 lectures - 45 m</a>
				</summary>
			</details>
			<details name="my-accordion">
				<summary>
					<a>Frontend Project</a>
					<a>4 lectures - 45 m</a>
				</summary>
			</details>
			<details name="my-accordion">
				<summary>
					<a>Backend Project</a>
					<a>4 lectures - 45 m</a>
				</summary>
			</details>
			<details name="my-accordion">
				<summary>
					<a>Payment Integration</a>
					<a>4 lectures - 45 m</a>
				</summary>
			</details>
			<details name="my-accordion">
				<summary>
					<a>Project Deployement</a>
					<a>4 lectures - 45 m</a>
				</summary>
			</details>
		</div>
	);
};

export default CourseDetailsStructure;
