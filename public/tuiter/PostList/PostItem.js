const PostItem = (post) => {
  return `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <div class="wd-bookmark wd-bottom-border">
    <div class="wd-avatar">
      <img src="${post.avatarImage}" alt="" class="img-fluid" />
    </div>
    <div class="wd-bookmark-content">
      <div class="wd-bookmark-author fw-bold d-flex align-items-center">
        ${post.userName}
        ${post.verified ? `
        <span class="fa-stack small ms-1">
          <i class="fas fa-certificate fa-stack-2x"></i>
          <i class="fas fa-check fa-stack-1x fa-inverse"></i>
        </span>` : ``}
        <div class="wd-handle text-muted ms-1">@${post.handle}</div>
        <div class="wd-post-date text-muted ms-1">${post.time}</div>
      </div>
      <div class="wd-bookmark-text pt-1">
        ${post.content}
      </div>
      ${
        post.preview &&
        `
        <a ${post.preview.refLink ? `target='_blank'` : ``} href="${post.preview.refLink || ''}">
          <div class="wd-bookmark-preview card my-3">
            <img class="card-img-top img-fluid ${
              !(post.preview.title || post.preview.description) && `bottom-rounded`
            }" src="${post.preview.image}" alt="${post.preview.title}">
            ${
              (post.preview.title || post.preview.description) ?
              `
            <div class="card-body">
              <h6 class="card-title">${post.preview.title}</h6>
              <p class="card-text">${post.preview.description}</p>
              <p class="card-text d-flex align-items-center">
              <i class="fa fa-link"></i> <span class="ms-2">${post.preview.link}</span></p>
            </div>
            ` : ``
            }
          </div>
      </a>
      `
      }
      <div class="wd-bookmark-actions mt-2 d-flex justify-content-between mx-0 mx-md-2">
        <div class="wd-bookmark-action">
          <a href="#" class="d-flex justify-content-between">
            <div class="wd-icon d-flex align-items-center"><i class="far fa-comment"></i></div>
            <div class="stat">${post.comments}</div>
          </a>
        </div>
        <div class="wd-bookmark-action">
          <a href="#" class="d-flex justify-content-between">
            <div class="wd-icon d-flex align-items-center"><i class="fas fa-retweet"></i></div>
            <div class="stat">${post.retuits}</div>
          </a>
        </div>
        <div class="wd-bookmark-action wd-active wd-like">
          <a href="#" class="d-flex justify-content-between">
            <div class="wd-icon d-flex align-items-center"><i class="far fa-heart"></i></div>
            <div class="stat">${post.likes}</div>
          </a>
        </div>
        <div class="wd-bookmark-action">
          <a href="#" class="d-flex justify-content-between">
            <div class="wd-icon d-flex align-items-center"><i class="fas fa-upload"></i></div>
            <div class="stat"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</li>`;
};
export default PostItem;
