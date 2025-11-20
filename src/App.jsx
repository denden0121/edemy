import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CourseDetails from "./pages/course_detail/CourseDetails";
import CourseList from "./pages/course_list/CourseList";
import Dashboard from "./pages/dashboard/Dashboard";
import StudentsEnrolled from "./pages/students_enrolled/StudentsEnrolled";
import MyCourses from "./pages/my_courses/MyCourses";
import AddCourse from "./pages/add_course/AddCourse";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			// easing: "ease-out-quart",
			easing: "ease-out-back",
			delay: 50,
			once: false,
		});
	});
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/course-details" element={<CourseDetails />} />
				<Route path="/course-list" element={<CourseList />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/add-course" element={<AddCourse />} />
				<Route path="/my-courses" element={<MyCourses />} />
				<Route path="/students-enrolled" element={<StudentsEnrolled />} />
			</Routes>
		</>
	);
}

export default App;
