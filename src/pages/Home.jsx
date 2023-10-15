import React, { useState, useEffect } from "react";
import "./style.scss";
import { PostCard, Container } from "../components";
import service from "../appwrite/config";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0 || authStatus === false) {
    return (
      <div className="home">
        {" "}
        <h1> Start your blogging journey😄</h1>
      </div>
    );
  }

  return (
    <div className="allPosts">
      <Container>
        <div className="allPostsContainer">
          {posts.map((post) => (
            <div key={post.$id} className="postsContainer">
              <PostCard
                $id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
