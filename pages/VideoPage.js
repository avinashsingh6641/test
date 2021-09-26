import classes from "./VideoPage.module.css";
import React, { useState } from "react";

import ReactPlayer from "react-player";
import Chat from "../components/chat/Chat";

const VideoPage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [enteredTextUrl, setEnteredTextUrl] = useState("");
  const [flagTextUrl, setFlagTextUrl] = useState(false);

  const urlChangeHandler = (event) => {
    setVideoUrl(URL.createObjectURL(event.target.files[0]));
  };

  const TextUrlChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setFlagTextUrl(true);
    }
    setEnteredTextUrl(event.target.value);
  };

  return (
    <div className={classes.video}>
      <input
        className={classes.inputfile}
        type="file"
        id="file"
        accepts="videos/*"
        onChange={urlChangeHandler}
      />
      <label htmlFor="file">
        <span className="material-icons">movie_creation</span>&nbsp; select
        video
      </label>

      <input
        className={classes.inputurl}
        type="url"
        id="url"
        onChange={TextUrlChangeHandler}
      />

      <ReactPlayer
        className={classes.player}
        url={!flagTextUrl ? videoUrl : enteredTextUrl}
        width="65%"
        height="65%"
        controls={true}
      />
      <Chat></Chat>
    </div>
  );
};
export default VideoPage;
