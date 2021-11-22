import "./Social.scss";
import { ArrowUp, ArrowDown } from "../../Arrow/Arrow.jsx";

export default function Social() {
  return (
    <div className="card" id="Social">
      <ArrowUp />
      <div data-aos="fade-up">
        <h3>Social</h3>
        <div className="card-box"></div>
      </div>
      <ArrowDown />
    </div>
  );
}
