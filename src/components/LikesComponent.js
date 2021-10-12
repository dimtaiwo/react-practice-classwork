import React from "react";

const LikesComponent = (props) => {
  let iconClass = !props.liked ? "fa fa-heart-o" : "fa fa-heart";

  return (
    <div>
      <i onClick={props.onClick} className={iconClass} aria-hidden="true" aria-label="icon"></i>
    </div>
  );
};

export default LikesComponent;
