import React from "react";
import "./SideBar.scss";
import {
  CgHome,
  CgProfile,
  CgFileDocument,
  CgAlbum,
  CgTimelapse,
  CgInstagram,
} from "react-icons/cg";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header"></div>
      <div className="sidebar-body">
        <ul>
          <li>
            <a href="#Home-content">
              <i className="fas fa-home"></i>
              <CgHome />
            </a>
          </li>

          <li>
            <a href="#Profile">
              <i className="fas fa-user"></i>
              <CgProfile />
            </a>
          </li>

          <li>
            <a href="#Skills">
              <i className="fas fa-calendar-alt"></i>
              <CgAlbum />
            </a>
          </li>

          <li>
            <a href="#Projects">
              <i className="fas fa-chart-bar"></i>
              <CgFileDocument />
            </a>
          </li>

          <li>
            <a href="#Timeline">
              <i className="fas fa-map-marker-alt"></i>
              <CgTimelapse />
            </a>
          </li>

          <li>
            <a href="#Social">
              <i className="fas fa-briefcase"></i>
              <CgInstagram />
            </a>
          </li>

          {/* <li>
            <a href="#">
              <i className="fas fa-users"></i>
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
