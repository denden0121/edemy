import styles from "./CourseDetailsCard.module.css";
import TextToImage from "@/assets/images/courses/text-to-image.svg";
import TimeLeftIcon from "@/assets/icons/clock-icon.svg";
import TimeClockIcon from "@/assets/icons/time-clock-icon.svg";
import LessonIcon from "@/assets/icons/lesson.svg";
import StarColoredIcon from "@/assets/icons/star-colored.svg";

const CourseDetailsCard = () => {
	return (
		<div className="shadow-md">
			<div>
				<img src={TextToImage} alt="Text to image" />
			</div>
			<div className="flex flex-col justify-start items-start p-4">
				<p className="flex flex-row justify-start items-center gap-2 text-[#FF4B4B]">
					<img className="m-h-4 max-w-4" src={TimeLeftIcon} alt="" />5 days left
					at this price!
				</p>
				<div className="flex flex-row justify-center items-center gap-2">
					<p className="text-[34px] font-semibold w-max">$10.99</p>
					<p className="text-lg font-normal w-max">$19.99</p>
					<p className="text-lg font-normal w-max">50%off</p>
				</div>
				<div className="flex flex-row justify-center items-center gap-2">
					<p>
						<img src={StarColoredIcon} alt="" />
						4.5
					</p>
					<p>
						<img src={TimeClockIcon} alt="" />
						30 hours
					</p>
					<p>
						<img src={LessonIcon} alt="" />
						54 lessons
					</p>
				</div>
				<button>Enroll Now</button>
				<p className="text-lg font-medium">What's in the course?</p>
				<ul className="*:text-sm *:font-normal *:text-[#656565] flex flex-col gap-2 list-disc">
					<li>Lifetime access with free updates</li>
					<li>Step-by-step, hands-on project guidance</li>
					<li>Downloadable resources and source code.</li>
					<li>Quizzes to test your knowledge</li>
					<li>Certificate of completion</li>
					<li>Quizzes to test your knowledge</li>
				</ul>
			</div>
		</div>
	);
};

export default CourseDetailsCard;
