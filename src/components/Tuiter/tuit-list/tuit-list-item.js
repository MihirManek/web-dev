import React from "react";
import { useDispatch } from "react-redux";
import "./tuit-list-item.css";
import TuitStats from "./tuit-stats";
import { deleteTuit } from "../actions/tuits-actions";
const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="wd-bookmark wd-bottom-border">
        <div className="wd-avatar">
          <img src={tuit.avatarImage} alt="" className="img-fluid" />
        </div>
        <div className="wd-bookmark-content">
          <div className="d-flex justify-content-between w-100">
            <div className="wd-bookmark-author fw-bold d-flex align-items-center">
              {tuit.postedBy.username}
              {tuit.verified ? (
                <span className="fa-stack small ms-1">
                  <i className="fas fa-certificate fa-stack-2x"></i>
                  <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                </span>
              ) : (
                ``
              )}
              <div className="wd-handle text-muted ms-1">@{tuit.handle}</div>
              <div className="wd-post-date text-muted ms-1">{tuit.time}</div>
            </div>
            <div>
              <i
                onClick={() => deleteTuit(dispatch, tuit)}
                className="fas fa-times"
              ></i>
            </div>
          </div>
          <div className="wd-bookmark-text pt-1">{tuit.tuit}</div>
          {tuit.attachments && (
            <div className="wd-bookmark-preview card my-3">
              {tuit.attachments.video && (
                <iframe
                  title={tuit.title}
                  height="300"
                  src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
              {tuit.attachments.image && (
                <img
                  className={`card-img-top img-fluid bottom-rounded`}
                  src={tuit.attachments.image}
                  alt={tuit.title}
                />
              )}
            </div>
          )}
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitListItem;
