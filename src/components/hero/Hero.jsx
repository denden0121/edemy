import styles from "./Hero.module.css";
import SearchIcon from "@/assets/icons/search-icon.svg";

const Banner = () => {
	return (
		<div className={styles.heroWrapper}>
			<div className={styles.heroContainer}>
				<p className={styles.title}>
					Empower your future with the courses designed to
					<span> fit </span>
					<span className={styles.span}> your choice.</span>
				</p>
				<p className={styles.subtitle}>
					We bring together world-class instructions, interactive content, and a
					supportive community to help you achive your personal and professional
					goals.
				</p>
				<div className={styles.searchContainer}>
					<label htmlFor="search">
						<img src={SearchIcon} alt="Search" />
						<input
							className={styles.searchInput}
							type="text"
							placeholder="Search for courses"
						/>
					</label>
					<button className={styles.searchBtn}>Search</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
