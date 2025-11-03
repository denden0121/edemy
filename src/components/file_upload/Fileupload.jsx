import React, { useRef, useState } from "react";
import styles from "./FileUpload.module.css";
import Upload from "@/assets/icons/profile-upload-icon.svg";

const FileUpload = () => {
	const fileInputRef = useRef(null);

	// const [fileName, setFileName] = useState("No file chosen");
	// const handleFileChange = (e) => {
	// 	const file = e.target.files[0];
	// 	if (file) setFileName(file.name);
	// };

	const [preview, setPreview] = useState(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setPreview(URL.createObjectURL(file));
		}
	};

	return (
		<div className={styles.fileUploadContainer}>
			<label htmlFor="thumbnail">Course Thumbnail</label>
			<input
				ref={fileInputRef}
				name="thumbnail"
				id="thumbnail"
				type="file"
				className="hidden"
				onChange={handleFileChange}
			/>
			<p
				type="button"
				className={styles.fileBtn}
				onClick={() => fileInputRef.current.click()}
			>
				<img src={Upload} alt="" />
			</p>

			{preview && (
				<p>
					<img src={preview} alt="Preview" />
				</p>
			)}
		</div>
	);
};

export default FileUpload;
