import React from "react";
import "./ChatInterface.scss";
import SideBar from "../Sidebar/Sidebar";
import ChatApp from "../ChatApp/ChatApp";

const ChatInterface = () => {
  return (
    <div className="chatInterfaceContainer">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="chatApp">
        <ChatApp />
      </div>
    </div>
  );
};

export default ChatInterface;
