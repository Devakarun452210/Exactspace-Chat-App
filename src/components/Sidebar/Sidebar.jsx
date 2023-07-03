import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/logo.png";
import Users from "../Users/Users";
import EmojiPicker from "emoji-picker-react";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="header">
        <img className="logo" src={logo} alt="" />
        <i class="fa-regular fa-pen-to-square"></i>
      </div>
      <div className="searchContainer">
        <input type="text" placeholder="Search Chat" />
        <i className="fa fa-search"></i>
      </div>

      <div className="users">
        <Users />{" "}
      </div>
    </div>
  );
};

export default Sidebar;
