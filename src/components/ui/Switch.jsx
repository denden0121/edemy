import { useState } from "react";
import styles from "./Switch.module.css";

const Toggle = () => {
	const [enabled, setEnabled] = useState(false);

	return (
		<label className={styles.toggle}>
			<input
				type="checkbox"
				value={enabled}
				onClick={() => {
					setEnabled((enabled) => !enabled);
				}}
			/>
			<span
				className={`${styles.slider} ${enabled ? styles.active : ""}`}
			></span>
		</label>
	);
};

export default Toggle;
