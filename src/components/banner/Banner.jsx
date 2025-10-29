import styles from "./Banner.module.css";
import Navigation from "../../components/navigation/Navigation";
import SearchIcon from "../../assets/icons/search-icon.svg";

const Banner = () => {
	return (
		<div>
			<Navigation />
			<div className={styles.bannerContainer}>
				<p className={styles.tagline}>
					Empower your future with the courses designed to{" "}
					<span>fit your choice.</span>
				</p>
				<p className={styles.information}>
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
