import React from "react";
import "./PostSummaryItem.css";
const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRye0H0xrFuy5NL8B7hzObWUh7ERoU4z-jyOg&usqp=CAU",
  },
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="ms-1 me-auto mb-auto">
        <div className="text-muted">
          <small>{post.topic}</small>
        </div>
        <div>
          <span className="fw-bold">{post.userName}</span>
          <span className="fa-stack small mx-1">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
          </span>
          <span className="text-muted">- {post.time}</span>
        </div>
        <div className="fw-bold">{post.title}</div>
        <div className="text-muted">
          {post.tweets !== undefined ? post.tweets + " Tweets" : ""}
        </div>
      </div>
      <img src={post.image} alt="" className="img-fluid post-image" />
    </li>
  );
};
export default PostSummaryItem;
