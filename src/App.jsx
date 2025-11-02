import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CourseDetails from "./pages/course_detail/CourseDetails";
import CourseList from "./pages/course_list/CourseList";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/course-details" element={<CourseDetails />} />
				<Route path="/course-list" element={<CourseList />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
