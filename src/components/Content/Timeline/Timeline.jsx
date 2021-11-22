import "./Timeline.scss";
import { ArrowUp, ArrowDown } from "../../Arrow/Arrow.jsx";

export default function Timeline() {
  return (
    <div className="card" id="Timeline">
      <ArrowUp />
      <div data-aos="fade-up">
        <h3>Timeline</h3>
        <div className="card-box"></div>
      </div>
    </div>
  );
}
