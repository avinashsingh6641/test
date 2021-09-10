import classes from "./VideoPage.module.css";
import React, { useState } from "react";

import ReactPlayer from "react-player";

const VideoPage = () => {
  const [enteredUrl, setEnteredUrl] = useState("");
  const urlChangeHandler = (event) => {
    setEnteredUrl(URL.createObjectURL(event.target.files[0]));
    console.log(enteredUrl);
  };

  return (
    <div className={classes.video}>

      <input
        type="file"
        id="file"
        accepts="videos/*"
        onChange={urlChangeHandler}
      />
      <label htmlFor="file">
        <span className="material-icons">movie_creation</span>&nbsp;
        select video
      </label>
      <ReactPlayer
        className={classes.player}
        url={enteredUrl}
        width="50%"
        height="50%"
        controls={true}
      />
    </div>
  );
};
export default VideoPage;
