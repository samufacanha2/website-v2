import "./Social.scss";
import { ArrowUp, ArrowDown } from "../../Arrow/Arrow.jsx";

export default function Social() {
  return (
    <div className="card" id="Social">
      <ArrowUp />
      <div data-aos="fade-up">
        <h3>Social</h3>
        <div className="card-box">
          <div className="card-box-content">
            <div className="align">
              <div className="card-box-content-item">
                <h4>Onde me encontrar?</h4>
                <ul>
                  <li>
                    GitHub:{" "}
                    <a href={"https://github.com/samufacanha2"}>
                      github.com/samufacanha2
                    </a>
                  </li>
                  <li>
                    Linkedin:{" "}
                    <a href={"https://linkedin.com/in/samuelfaçanha"}>
                      linkedin.com/in/samuelfaçanha
                    </a>
                  </li>
                  <li>
                    Whatsapp:{" "}
                    <a href={"https://wa.me/5585999106085"}>(85) 9 9910-6085</a>
                  </li>
                  <li>
                    Instagram:{" "}
                    <a href={"https://instagram.com/samu_f.exe"}>@samu_f.exe</a>
                  </li>
                  <li>
                    Email:{" "}
                    <a href={"mailto:samufacanha@gmail.com"}>
                      samufacanha@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
