import React from 'react';

function YtItem(props) {
    return (
        <div className={`yt-item ${props.className}`}>
        <div className="yt-img">
          <img src={props.image} alt="img" />
        </div>

        <div className="yt-footer">
          <img
            src={props.avatar}
            alt=""
            className="yt-avatar"
          />
          <div className="yt-avatar">
            <h3 className="yt-title">{props.title || "Idol"}</h3>
            <h4 className="yt-auth">{props.auth || "Sayuri"}</h4>
          </div>
        </div>
      </div>
    );
}

export default YtItem;