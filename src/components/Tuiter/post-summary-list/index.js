import React from "react";
import PostSummaryItem from "./post-summary-item.js";
import posts from "./posts.json";

const PostSummaryList = () => {
  return (
    <ul className="list-group posts">
      {posts.map((p) => (
        <PostSummaryItem post={p} key={p.title} />
      ))}
    </ul>
  );
};

export default PostSummaryList;
