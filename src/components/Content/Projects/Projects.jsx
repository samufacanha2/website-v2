import "./Projects.scss";
import { ArrowUp, ArrowDown } from "../../Arrow/Arrow.jsx";

export default function Projects() {
  return (
    <div className="card" id="Projects">
      <ArrowUp />
      <div data-aos="fade-up">
        <h3>Projetos</h3>
        <div className="card-box"></div>
      </div>
      <ArrowDown />
    </div>
  );
}
