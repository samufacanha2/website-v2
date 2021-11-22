import "./Skills.scss";
import { ArrowUp, ArrowDown } from "../../Arrow/Arrow.jsx";

export default function Skills() {
  return (
    <div className="card" id="Skills">
      <ArrowUp />
      <div data-aos="fade-up">
        <h3>Competências</h3>
        <div className="card-box">
          <div className="card-box-content"></div>
        </div>
      </div>
      <ArrowDown />
    </div>
  );
}
