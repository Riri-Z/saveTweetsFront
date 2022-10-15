import * as React from "react";
import "./cards.css";
import { Tweet } from "../../interfaces";

export const Cards: React.FC<Tweet> = ({ name, tag, tweet_content }: Tweet) => {
  return (
    <>
      <div className="container">
        <div className="header">
          <img
            className="profilPicture"
            src="https://via.placeholder.com/150/"
            alt="profile"
          />
          <div>
          <h1>{name}</h1>
          <p>Tag : {tag}</p>
        </div>
          </div>
        <div>
          {tweet_content}
        </div>
      </div>
    </>
  );
};
