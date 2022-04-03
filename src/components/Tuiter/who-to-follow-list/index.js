import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item.js";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
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
