import React from "react";
import styles from "./Home.module.css";
import Banner from "../../components/banner/Banner";

const Home = () => {
	return (
		<div className={styles.homeWrapper}>
			<Banner />
		</div>
	);
};

export default Home;
