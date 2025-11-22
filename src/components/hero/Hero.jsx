import styles from "./Hero.module.css";
import SearchIcon from "@/assets/icons/search-icon.svg";
import { useHeroRef } from "@/context/HeroRefContext";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = () => {
	const spanRef = useRef(null);
	const { heroRef } = useHeroRef();
	useGSAP(() => {
		let ctx = gsap.context(() => {
			setTimeout(() => {
				gsap.to(["#fit", "#span"], {
					y: "+10px",
					duration: 0.5,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
					stagger: 0.2,
				});
			}, 2000);
		}, spanRef);
		return () => ctx.revert();
	});

	return (
		<div ref={heroRef} className={styles.heroWrapper}>
			<div className={styles.heroContainer}>
				<p
					ref={spanRef}
					className={styles.title}
					data-aos="zoom-out"
					data-aos-delay="50"
				>
					Empower your future with the courses designed to
					<span data-aos="fade-left" data-aos-delay="400">
						<span id="fit"> fit </span>
					</span>
					<span data-aos="fade-left" data-aos-delay="400">
						<span id="span" className={styles.span}>
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
