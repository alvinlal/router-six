import { Link, Outlet } from "react-router-dom";
function Learn() {
  return (
    <div>
      <h1>Learn section</h1>
      <Outlet />
      <Link to="/learn/courses">courses</Link>
      <Link to="/learn/bundles">bundle</Link>
    </div>
  );
}

export default Learn;
