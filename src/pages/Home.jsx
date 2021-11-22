import "./Home.scss";
import Particles from "react-particles-js";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Profile from "../components/Content/Profile/Profile.jsx";
import Skills from "../components/Content/Skills/Skills.jsx";
import Projects from "../components/Content/Projects/Projects.jsx";
import Timeline from "../components/Content/Timeline/Timeline.jsx";
import Social from "../components/Content/Social/Social.jsx";

import { SideBar } from "../components/SideBar/SideBar.jsx";

import ArrowDown from "../assets/icons/double-arrow-down.svg";

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
          <div data-aos="fade-right" id="box-1">
            <h1>Samuel Façanha</h1>
            <h2>
              Developer <span class="typewritten">Fullstack</span>
            </h2>
          </div>
          <div data-aos="fade-left" id="box-2">
            <p>Site desenvolvido utilizando a biblioteca React</p>
          </div>
          <a data-aos="fade-down" id="arrow-down-1" href="#Profile">
            <p>Começar Tour</p>
            <img src={ArrowDown} />
          </a>
        </div>
        <Profile />
        <Skills />
        <Projects />
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
