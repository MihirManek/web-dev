import React from "react";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({ type: "like-tuit", tuit });
  };
  return (
    // <span onClick={likeTuit}>
    //   {tuit.liked && (
    //     <i className="fas fa-heart me-1" style={{ color: "red" }}></i>
    //   )}
    //   {!tuit.liked && <i className="far fa-heart me-1"></i>}
    //   {tuit.stats && tuit.stats.likes}
    // </span>
    <div className="wd-bookmark-actions mt-2 d-flex justify-content-between mx-0 mx-md-2">
      <div className="wd-bookmark-action">
        <div className="d-flex justify-content-between">
          <div className="wd-icon d-flex align-items-center">
            <i className="far fa-comment"></i>
          </div>
          <div className="stat">{tuit.stats.comments}</div>
        </div>
      </div>
      <div className="wd-bookmark-action">
        <div className="d-flex justify-content-between">
          <div className="wd-icon d-flex align-items-center">
            <i className="fas fa-retweet"></i>
          </div>
          <div className="stat">{tuit.stats.retuits}</div>
        </div>
      </div>
      <div className="wd-bookmark-action wd-active wd-like">
        <div className="d-flex justify-content-between" onClick={likeTuit}>
          <div className="wd-icon d-flex align-items-center">
            {tuit.liked && (
              <i className="fas fa-heart me-1" style={{ color: "red" }}></i>
            )}
            {!tuit.liked && <i className="far fa-heart me-1"></i>}
          </div>
          <div className="stat">{tuit.stats.likes}</div>
        </div>
      </div>
      <div className="wd-bookmark-action">
        <div className="d-flex justify-content-between">
          <div className="wd-icon d-flex align-items-center">
            <i className="fas fa-upload"></i>
          </div>
          <div className="stat">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};
export default TuitStats;
