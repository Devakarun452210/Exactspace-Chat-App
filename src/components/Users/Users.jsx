import React, { useState } from "react";
import "./Users.scss";
import userDp from "../../assets/users/user1.jpg";
import { userData } from "../../data";

const Users = () => {
  return (
    <div>
      {userData.map((data) => (
        <div className="user" key={data.id}>
          <div className="left">
            <img className="userDp" src={data.userDp} alt="" />
            <div className="msg">
              <span className="username">{data.username}</span>
              <span className="lastMsg">{data.lastMsg}</span>
            </div>
          </div>
          <div className="right">
            <div className="newMsg">
              <span className="time">{data.time}</span>
              <span className="msgCount">{data.msgCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
