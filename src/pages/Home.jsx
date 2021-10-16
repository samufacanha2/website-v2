import "./Home.scss";
import Particles from "react-particles-js";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Profile from "../components/Content/Profile/Profile.jsx";
import Projects from "../components/Content/Projects/Projects.jsx";
import Resume from "../components/Content/Resume/Resume.jsx";
import Timeline from "../components/Content/Timeline/Timeline.jsx";
import Social from "../components/Content/Social/Social.jsx";

import { SideBar } from "../components/SideBar/SideBar.jsx";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <SideBar />
      <div className="Home">
        <div className="inner-box" />
        <div className="card" id="Home-content">
          <div data-aos="fade-right" id="Box1">
            <h1>Samuel Façanha</h1>
            <h2>
              Developer <span class="typewritten">Fullstack</span>
            </h2>
          </div>
        </div>
        <Profile />
        <Projects />
        <Resume />
        <Timeline />
        <Social />

        <Particles
          params={{
            polygon: {
              enable: true,
              type: "inside",
              move: {
                radius: 10,
              },
              url: "path/to/svg.svg",
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
