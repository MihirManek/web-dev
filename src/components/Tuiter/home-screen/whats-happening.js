import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./whats-happening.css";
import { createTuit } from "../actions/tuits-actions";
const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile);
  const tuitClickHandler = () => {
    // dispatch({ type: "create-tuit", tuit: whatsHappening, profile: profile });
    createTuit(dispatch, { tuit: whatsHappening, profile });
  };
  return (
    <>
      <div className="wd-tuit wd-bottom-border list-group-item">
        <div className="wd-avatar">
          <img src="/tuiter-old/me.png" alt="" className="img-fluid" />
        </div>
        <div className="wd-tuit-content form-group">
          <textarea
            placeholder="What's happening?"
            className="wd-tuit-input form-control-plaintext"
            value={whatsHappening}
            onChange={(event) => setWhatsHappening(event.target.value)}
          ></textarea>
          <div className="wd-tuit-actions">
            <div>
              <i className="wd-tuit-action far fa-image text-primary"></i>
              <i className="wd-tuit-action far fa-chart-bar text-primary"></i>
              <i className="wd-tuit-action far fa-smile text-primary"></i>
              <i className="wd-tuit-action far fa-calendar-alt text-primary"></i>
            </div>
            <div>
              <button
                className="btn btn-primary btn-block rounded-pill"
                onClick={tuitClickHandler}
              >
                Tuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhatsHappening;
