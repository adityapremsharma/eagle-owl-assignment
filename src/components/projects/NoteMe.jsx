import React from "react";
import Video from "../extras/Video";
import noteme from "../../media/videos/note-me.mp4";

export default function NoteMe() {
  return (
    <div className="note-me">
      <h2 className="header-mb-primary">Note Me</h2>
      <div className="video-container pb-s">
        <Video src={noteme} />
      </div>
      <h2 className="header-secondary pb-s">About this project</h2>
      <p className="para-primary pb-xs">
        This application was a part of my training bootcamp. It is a simple
        application with simple UI made with react js which is used for taking
        notes.
      </p>
      <div className="list-container">
        <h3 className="para-tertiary">Technologies used</h3>
        <ul>
          <li>React JS</li>
          <li>Hooks</li>
          <li>HTML, CSS, JS</li>
        </ul>
      </div>
      <div className="btn-container">
        <a href="https://github.com/adityapremsharma/Full-Stack-NoteMe-using-React">
          <button className="btn-primary">Github Repo</button>
        </a>
        <button
          onClick={() =>
            window.open("https://zen-johnson-bb4ea6.netlify.app/", "_blank")
          }
          className="btn-primary"
        >
          Launch <i class="fas fa-rocket"></i>
        </button>
      </div>
    </div>
  );
}
