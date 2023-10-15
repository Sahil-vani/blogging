import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import storageService from "../appwrite/storage";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        storageService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="post">
      <Container>
        <div className="postContent">
          <img
            src={storageService.getFilePreview(post.featuredImage)}
            alt={post.title}
          />

          {isAuthor && (
            <div className="btnContent">
              <Link to={`/edit-post/${post.$id}`}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={deletePost}>Delete</Button>
            </div>
          )}
        </div>
        <div className="postTitle">
          <h1>{post.title}</h1>
        </div>
        <div className="postContent">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}

export default Post;
