import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item.js";
import who from "./who.json";

const WhoToFollowList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
        Who to follow
      </li>
      {who.map((who) => (
        <WhoToFollowListItem who={who} key={who.handle} />
      ))}
    </ul>
  );
};
export default WhoToFollowList;
