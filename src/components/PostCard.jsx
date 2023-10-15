import React from "react";
import "./style.scss";
import storageService from "../appwrite/storage";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="postContainer">
        <div className="postContent">
          <img src={storageService.getFilePreview(featuredImage)} alt={title} />
        </div>
        <h2 className="postTitle">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
