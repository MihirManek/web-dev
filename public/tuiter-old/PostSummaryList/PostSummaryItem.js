const PostSummaryItem = (post) => {
  return `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <div class="ms-1 me-auto mb-auto">
    <div class="text-muted"><small>${post.topic}</small></div>
    <div>
      <span class="fw-bold">${post.userName}</span>
      <span class="fa-stack small">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-check fa-stack-1x fa-inverse"></i>
      </span>
      <span class="text-muted">- ${post.time}</span>
    </div>
    <div class="fw-bold">
      ${post.title}
    </div>
    <div class="text-muted">${
      post.tweets !== undefined ? post.tweets + " Tweets" : ""
    }</div>
  </div>
  <img
    src="${post.image}"
    alt=""
    class="img-fluid post-image"
  />
</li>`;
};
export default PostSummaryItem;
