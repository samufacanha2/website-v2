import "./Skills.scss";
import { ArrowUp, ArrowDown } from "../../Arrow/Arrow.jsx";

export default function Skills() {
  return (
    <div className="card" id="Skills">
      <ArrowUp />
      <div data-aos="fade-up">
        <h3>Competências</h3>
        <div className="card-box">
          <div className="card-box-content">
            <div className="align">
              <div className="card-box-content-item">
                <h4>Linguagens</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                </ul>
              </div>
              <div className="card-box-content-item">
                <h4>Frameworks/Libraries</h4>
                <ul>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                </ul>
              </div>
              <div className="card-box-content-item">
                <h4>Outros</h4>
                <ul>
                  <li>Inglês Avançado</li>
                  <li>Git</li>
                  <li>Scrum</li>
                </ul>
              </div>
            </div>
            <code className="obs">*Ordenado por proficiência</code>
          </div>
        </div>
      </div>
      <ArrowDown />
    </div>
  );
}
