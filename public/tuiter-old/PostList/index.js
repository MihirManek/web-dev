import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
  return `
  
  <ul class="list-group posts">
    ${posts.map((p) => PostItem(p)).join("")}
  </ul>`;
};

export default PostList;
