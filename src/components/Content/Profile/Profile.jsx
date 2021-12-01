import "./Profile.scss";

import { ArrowUp, ArrowDown } from "../../Arrow/Arrow.jsx";

export default function Profile() {
  return (
    <div className="card" id="Profile">
      <ArrowUp />
      <div data-aos="fade-up">
        <h3>Perfil</h3>
        <div className="card-box">
          <div className="card-box-content">
            <div className="pic-text">
              <p className="left-text">
                {" "}
                <code>
                  Olá, eu me chamo <strong>Samuel</strong> e sou um
                  desenvolvedor de software, principalmente front-end web.{" "}
                  <br />
                  <br />
                  Atualmente estou cursando o 5º Semestre de Engenharia de
                  Computação na Universidade de Fortaleza.
                </code>
              </p>
              <div className="profile-pic" />
            </div>
            <p className="bottom-text">
              <code>
                Para saber mais sobre os projetos que desenvolvi e sobre minhas
                competências, clique no botão abaixo ou continue scrollando na
                página!
              </code>
              <code className="react">
                Esse website foi desenvolvido utilizando ReactJS!
              </code>
            </p>
          </div>
        </div>
      </div>
      <ArrowDown />
    </div>
  );
}
