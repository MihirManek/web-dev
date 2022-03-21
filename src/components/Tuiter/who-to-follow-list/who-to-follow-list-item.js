import React from "react";
import './WhoToFollowListItem.css'
const WhoToFollowListItem = ({
  who = {
    avatarIcon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img
        src={who.avatarIcon}
        alt=""
        className="img-fluid rounded-circle follow-suggestion-avatar"
      />
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {who.userName}
          <span className="fa-stack small me-2">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
          </span>
        </div>
        <span className="text-muted">@{who.handle}</span>
      </div>
      <button type="button" className="btn btn-primary rounded-pill">
        <span className="fw-bold">Follow</span>
      </button>
    </li>
  );
};

export default WhoToFollowListItem;
