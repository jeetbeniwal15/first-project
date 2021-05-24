import React from "react";
import "../assets/css/SidebarList.css";

function SidebarList({ icon, title }) {
  return (
    <div className="d-flex ">
      <a className="sidebar-list text-light text-decoration-none">
        <span>{icon}</span>
        <span className="list-item">{title}</span>
      </a>
    </div>
  );
}

export default SidebarList;
