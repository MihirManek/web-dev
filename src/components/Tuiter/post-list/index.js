import React from "react";
import PostItem from "./post-item.js";
import posts from "./posts.json";
const PostList = () => {
  return (
    <ul className="list-group posts">
      {posts.map((p) => (
        <PostItem key={p.content} post={p} />
      ))}
    </ul>
  );
};

export default PostList;
