import React, { useState, useEffect } from "react";
import "./style.scss";
import { PostCard, Container } from "../components";
import service from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

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

export default AllPosts;
