
import classes from "./Chat.module.css";

import React,{ useState } from "react";
const Chat = () => {
  //const [sendMsg,setSendMesg] = useState("");
  const msgSendHandler = (event) =>{
    event.preventDefault();
    console.log("sending message")
  }

  return (
    <div className={classes.chat}>
      <div className={classes.head}>
        <h1>Dawg's Chat!</h1>
      </div>
      <div className={classes.chatarea}>
        <div className={classes.left}>avi:hi</div>
        <div className={classes.right}>
          yash:bhai im fine,doing good fine hello,welcome tomorrow
        </div>
        <div className={classes.left}>avi:hey how are you</div>
        <div className={classes.right}>yash:bhai im fine</div>
        <div className={classes.left}>avi:hey how are you</div>
        <div className={classes.right}>yash:bhai im fine</div>
        <div className={classes.left}>avi:hey how are you</div>
        <div className={classes.right}>yash:bhai im fine</div>
      </div>
      <div className={classes.send}>
        <form action="#" id="send-container">
          <input className={classes.msgbox} type="msg" id="messageInp" />
          <button onClick={msgSendHandler}>send</button>
        </form>
      </div>
    </div>
  );
};
export default Chat;
