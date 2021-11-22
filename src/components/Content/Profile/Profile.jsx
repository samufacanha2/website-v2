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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus repellat quos laboriosam maiores, amet quisquam quasi
                corporis fugiat blanditiis cupiditate tempore placeat voluptate
                quidem saepe iste fugit officia aut, illum beatae quaerat. Quas
                nobis architecto, minima est consequatur corrupti iste fuga
                excepturi odio reprehenderit, quidem officiis culpa? Est, libero
                aliquam.
              </p>
              <div className="profile-pic" />
            </div>
            <p className="bottom-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              officiis, porro labore quo sunt iste ipsum sed ab possimus ipsam
              eum fugiat dolore modi, vel voluptate expedita facere recusandae
              unde assumenda dolores eveniet animi. Facere deserunt nam,
              repudiandae veniam optio corporis enim accusantium eum sapiente,
              molestiae quidem iste, eligendi quisquam.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              exercitationem hic impedit veniam voluptatibus itaque aspernatur
              similique laborum a consectetur?
            </p>
          </div>
        </div>
      </div>
      <ArrowDown />
    </div>
  );
}
