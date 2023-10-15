import React from "react";
import "./style.scss";
import { PostForm, Container } from "../components";

function AddPost() {
  return (
    <div className="AddPost">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
