import React from "react";
import "./PostListItem.css";

const PostContent = ({ content = "Sample Post Content", refs = [] }) => {
  // let contentToRender = content.split(" ");
  // if (content.includes("link-ref:")) {
  //   contentToRender = content.split(" ").map((w) => {
  //     if (w.startsWith("link-ref:")) {
  //       let refName = w.split(":")[1];
  //       let ref = refs.find((r) => r.placeholder === refName);
  //       if (ref) {
  //         return (
  //           <a href={ref.link} target="_blank">
  //             {ref.text}
  //           </a>
  //         );
  //       }
  //     }
  //     return w;
  //   });
  // }
  let contentToRender = content.split(" ");
  return (
    <>
      {contentToRender.map((w, index) => {
        if (w.startsWith("link-ref:")) {
          let refName = w.split(":")[1];
          let ref = refs.find((r) => r.placeholder === refName);
          if (ref) {
            return (
              <>
                <a href={ref.link} target="_blank">
                  {ref.text}
                </a>
                &nbsp;
              </>
            );
          }
        }
        return index === contentToRender.length - 1 ? w : w + " ";
      })}
    </>
  );
};
const PostItem = ({
  post = {
    avatarImage:
      "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_200x200.jpg",
    userName: "Elon Musk",
    handle: "elonmusk",
    verified: true,
    time: "23h",
    content: "Amazing show about link-ref:inspiration mission!",
    preview: {
      image:
        "https://pbs.twimg.com/card_img/1502243770347266050/Q_aXHNnt?format=jpg&name=small",
      title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
      description:
        "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
      link: "netflix.com",
      refLink: "https://t.co/0nQua4jGiz",
    },
    refs: [
      {
        link: "https://twitter.com/inspiration4x",
        text: "@Inspiration4x",
        placeholder: "inspiration",
      },
    ],
    comments: "4.2K",
    likes: "37.5K",
    retuits: "3.5K",
  },
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="wd-bookmark wd-bottom-border">
        <div className="wd-avatar">
          <img src={post.avatarImage} alt="" className="img-fluid" />
        </div>
        <div className="wd-bookmark-content">
          <div className="d-flex justify-content-between w-100">
            <div className="wd-bookmark-author fw-bold d-flex align-items-center">
              {post.userName}
              {post.verified ? (
                <span className="fa-stack small ms-1">
                  <i className="fas fa-certificate fa-stack-2x"></i>
                  <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                </span>
              ) : (
                ``
              )}
              <div className="wd-handle text-muted ms-1">@{post.handle}</div>
              <div className="wd-post-date text-muted ms-1">{post.time}</div>
            </div>
            <div>
              <i className="fas fa-ellipsis-h text-muted"></i>
            </div>
          </div>
          <div className="wd-bookmark-text pt-1">
            <PostContent content={post.content} refs={post.refs} />
          </div>
          {post.preview && (
            <a
              target={post.preview.refLink ? `_blank` : `_self`}
              href={post.preview.refLink || ""}
            >
              <div className="wd-bookmark-preview card my-3">
                <img
                  className={`card-img-top img-fluid ${
                    !(post.preview.title || post.preview.description)
                      ? `bottom-rounded`
                      : ``
                  }
            `}
                  src={post.preview.image}
                  alt={post.preview.title}
                />
                {post.preview.title || post.preview.description ? (
                  <div className="card-body">
                    <h6 className="card-title">{post.preview.title}</h6>
                    <p className="card-text mb-1">{post.preview.description}</p>
                    <p className="card-text d-flex align-items-center">
                      <i className="fa fa-link"></i>{" "}
                      <span className="ms-2">{post.preview.link}</span>
                    </p>
                  </div>
                ) : (
                  ``
                )}
              </div>
            </a>
          )}
          <div className="wd-bookmark-actions mt-2 d-flex justify-content-between mx-0 mx-md-2">
            <div className="wd-bookmark-action">
              <a href="#" className="d-flex justify-content-between">
                <div className="wd-icon d-flex align-items-center">
                  <i className="far fa-comment"></i>
                </div>
                <div className="stat">{post.comments}</div>
              </a>
            </div>
            <div className="wd-bookmark-action">
              <a href="#" className="d-flex justify-content-between">
                <div className="wd-icon d-flex align-items-center">
                  <i className="fas fa-retweet"></i>
                </div>
                <div className="stat">{post.retuits}</div>
              </a>
            </div>
            <div className="wd-bookmark-action wd-active wd-like">
              <a href="#" className="d-flex justify-content-between">
                <div className="wd-icon d-flex align-items-center">
                  <i className="far fa-heart"></i>
                </div>
                <div className="stat">{post.likes}</div>
              </a>
            </div>
            <div className="wd-bookmark-action">
              <a href="#" className="d-flex justify-content-between">
                <div className="wd-icon d-flex align-items-center">
                  <i className="fas fa-upload"></i>
                </div>
                <div className="stat">&nbsp;</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default PostItem;
