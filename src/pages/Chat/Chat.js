import React from "react";
import { Image } from "react-bootstrap";
import profilePic from "../../assets/images/profile.jpeg";

// import FlipMove from 'react-flip-move';

const Chat = props => {
  if (props.comments) {

    return (
      <>
        {/* {props.comments.map(cm =>
       <p>{cm.user}</p>
      )} */}
        <div className="msg left-msg">
          <div className="msg-img me-2">
            <Image
              src={profilePic}
              alt="edit"
              width="40px"
              height="40px"
              roundedCircle
            />
          </div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">BOT</div>
              <div className="msg-info-time">12:45</div>
            </div>

            <div className="msg-text">
              Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
          </div>
          </div>
        </div>
        <div className="msg right-msg">
          <div className="msg-img">
            <Image
              src={profilePic}
              alt="edit"
              width="40px"
              height="40px"
              roundedCircle
            />
          </div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">BOT</div>
              <div className="msg-info-time">12:45</div>
            </div>

            <div className="msg-text">
              Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
          </div>
          </div>
        </div>
      </>
    );
  }
};

export default Chat;
