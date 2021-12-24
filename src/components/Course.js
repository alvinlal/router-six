import { useParams } from "react-router-dom";

function Course() {
  const { courseid } = useParams();
  return <div>{courseid}</div>;
}

export default Course;
