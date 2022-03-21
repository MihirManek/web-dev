import React from "react";
import { Link } from "react-router-dom";
import "./NavigationSidebar.css";

const links = [
  {
    id: "home",
    path: "/tuiter/home",
    label: "Home",
    icon: "fa fa-home",
  },
  {
    id: "explore",
    path: "/tuiter/explore",
    label: "Explore",
    icon: "fa fa-hashtag",
  },
  {
    id: "notifications",
    path: "",
    label: "Notifications",
    icon: "fa fa-bell",
  },
  {
    id: "messages",
    path: "",
    label: "Messages",
    icon: "fa fa-envelope",
  },
  {
    id: "bookmarks",
    path: "",
    label: "Bookmarks",
    icon: "fa fa-bookmark",
  },
  {
    id: "lists",
    path: "",
    label: "Lists",
    icon: "fa fa-list",
  },
  {
    id: "profile",
    path: "",
    label: "Profile",
    icon: "fa fa-user",
  },
];

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group">
        <Link className="list-group-item" to="/">
          <i className="fab fa-twitter"></i>
        </Link>
        {links.map((l) => (
          <Link
            key={l.id}
            to={l.path || ""}
            className={`list-group-item list-group-item-action d-flex justify-content-center justify-content-xl-start align-items-center ${
              l.id === active ? "active" : ""
            }`}
            aria-current={l.id === active ? "true" : "false"}
          >
            <i className={`${l.icon} me-0 me-xl-2`}></i>
            <span className="d-none d-xl-inline-block">{l.label}</span>
          </Link>
        ))}
        <Link
          to=""
          className="list-group-item list-group-item-action d-flex justify-content-center justify-content-xl-start align-items-center"
        >
          <span className="fa-stack small me-0 me-xl-2">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>{" "}
          </span>
          <span className="d-none d-xl-inline-block">More</span>
        </Link>
      </div>
      <div className="d-grid mt-2">
        <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
          Tweet
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;
