import styles from "./Hero.module.css";
import SearchIcon from "@/assets/icons/search-icon.svg";

const Banner = () => {
	return (
		<div className={styles.heroWrapper}>
			<div className={styles.heroContainer}>
				<p className={styles.title} data-aos="zoom-out" data-aos-delay="50">
					Empower your future with the courses designed to
					<span data-aos="fade-left" data-aos-delay="400">
						{" "}
						fit{" "}
					</span>
					<span
						className={styles.span}
						data-aos="fade-left"
						data-aos-delay="400"
					>
						{" "}
						your choice.
					</span>
				</p>
				<p className={styles.subtitle} data-aos="fade-up" data-aos-delay="1000">
					We bring together world-class instructions, interactive content, and a
					supportive community to help you achive your personal and professional
					goals.
				</p>
				<div
					className={styles.searchContainer}
					data-aos="fade-up"
					data-aos-delay="1000"
				>
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
