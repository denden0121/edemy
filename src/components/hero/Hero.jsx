import styles from "./Hero.module.css";
import SearchIcon from "@/assets/icons/search-icon.svg";
import { useHeroRef } from "@/context/HeroRefContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Banner = () => {
	const choiceRef = useRef(null);
	const fitRef = useRef(null);
	const { heroRef } = useHeroRef();

	useEffect(() => {
		const animation = gsap.to([choiceRef.current, fitRef.current], {
			rotateX: 360,
			duration: 1,
			delay: 1,
			repeat: -1,
		});

		return () => {
			animation.kill();
		};
	}, []);

	return (
		<div ref={heroRef} className={styles.heroWrapper}>
			<div className={styles.heroContainer}>
				<p className={styles.title} data-aos="zoom-out" data-aos-delay="50">
					Empower your future with the courses designed to
					<span data-aos="fade-left" data-aos-delay="400">
						<span ref={fitRef}> fit </span>
					</span>
					<span data-aos="fade-left" data-aos-delay="400">
						<span className={styles.span} ref={choiceRef}>
							{" "}
							your choice.
						</span>
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
