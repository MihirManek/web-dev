const WhoToFollowListItem = (who) => {
  return `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <img
    src="${who.avatarIcon}"
    alt=""
    class="img-fluid rounded-circle follow-suggestion-avatar"
  />
  <div class="ms-2 me-auto">
    <div class="fw-bold">
      ${who.userName}
      <span class="fa-stack small me-2">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-check fa-stack-1x fa-inverse"></i>
      </span>
    </div>
    <span class="text-muted">@${who.handle}</span>
  </div>
  <button type="button" class="btn btn-primary rounded-pill">
    <span class="fw-bold">Follow</span>
  </button>
</li>`;
};

export default WhoToFollowListItem;
