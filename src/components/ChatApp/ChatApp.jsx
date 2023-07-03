import React, { useState } from "react";
import "./ChatApp.scss";
import send from "../../assets/send.png";
import likeBtn from "../../assets/heart.png";
import logo from "../../assets/logo.png";
import InputEmoji from "react-input-emoji";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  function handleOnEnter(text) {
    handleSendMessage();
  }

  const handleSendMessage = () => {
    if (message.trim() === "") {
      return; // Ignore empty messages
    }

    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      user: randomUser,
      content: message,
      likes: 0,
    };

    setChatMessages([...chatMessages, newMessage]);
    setMessage("");
  };

  const handleLike = (index) => {
    setChatMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[index] = {
        ...updatedMessages[index],
        likes: updatedMessages[index].likes + 1,
      };
      return updatedMessages;
    });
  };

  return (
    <div className="chatAppContainer">
      <div className="chatHeader">
        <div className="left">
          <img src={logo} alt="" />
          <span className="chatName">Exactspacers</span>
        </div>
        <div className="right">
          <i className="fa-solid fa-video"></i>
          <i className="fa fa-phone"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="chatBox">
        {chatMessages.map((chat, index) => (
          <div
            className="chatBoxMsg"
            key={index}
            style={{ marginBottom: "10px" }}
          >
            <strong className="userName">{chat.user}</strong>
            <div className="messages">{chat.content}</div>
            <div className="likedReactions">
              <button className="likeBtn" onClick={() => handleLike(index)}>
                <img src={likeBtn} alt="" />
              </button>
              {chat.likes}
            </div>
          </div>
        ))}
      </div>
      <div className="chatControllers">
        <InputEmoji
          value={message}
          onChange={setMessage}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />

        <button onClick={handleSendMessage}>
          <img src={send} />
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
