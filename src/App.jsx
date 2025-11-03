import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CourseDetails from "./pages/course_detail/CourseDetails";
import CourseList from "./pages/course_list/CourseList";
import Dashboard from "./pages/dashboard/Dashboard";
import StudentsEnrolled from "./pages/students_enrolled/StudentsEnrolled";
import MyCourses from "./pages/my_courses/MyCourses";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/course-details/:id" element={<CourseDetails />} />
				<Route path="/course-list" element={<CourseList />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/my-courses" element={<MyCourses />} />
				<Route path="/students-enrolled" element={<StudentsEnrolled />} />
			</Routes>
		</>
	);
}

export default App;
