import styles from "./AddCourse.module.css";
import LoggedHeader from "@/components/logged_header/LoggedHeader";
import Navigation from "@/components/side_navigation/SideNavigation";
import FileUpload from "@/components/file_upload/Fileupload";

const AddCourse = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		for (const [key, value] of formData.entries()) {
			console.log(key, value);
		}
	};

	return (
		<div className={styles.addCourse}>
			<LoggedHeader />
			<div className={styles.container}>
				<Navigation />
				<main>
					<form onSubmit={handleSubmit}>
						<div
							className={styles.inputContainer}
							data-aos="fade-up"
							data-aos-delay="0"
						>
							<label htmlFor="title">Course Title</label>
							<input
								id="title"
								name="title"
								type="text"
								placeholder="Type here"
							/>
						</div>
						<div
							className={styles.inputContainer}
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<label htmlFor="headings">Course Headings</label>
							<input
								id="headings"
								name="headings"
								type="text"
								placeholder="Type here"
							/>
						</div>
						<div
							className={styles.inputContainer}
							data-aos="fade-up"
							data-aos-delay="400"
						>
							<label htmlFor="description">Course Description</label>
							<textarea
								name="description"
								id="description"
								placeholder="Type here"
							></textarea>
						</div>
						<div
							className={styles.inputContainer}
							data-aos="fade-up"
							data-aos-delay="600"
						>
							<div className={styles.dualContainer}>
								<label htmlFor="price">Course Price</label>
								<input name="price" type="number" placeholder="0" />
							</div>
							<FileUpload />
						</div>
						<button type="submit" data-aos="fade-up" data-aos-delay="800">
							ADD
						</button>
					</form>
				</main>
			</div>
		</div>
	);
};

export default AddCourse;
