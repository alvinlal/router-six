import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Bundles from "./components/Bundles";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Course from "./components/Course";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseid" element={<Course />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
