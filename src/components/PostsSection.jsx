import React from "react";
import "../Styles/PostsSection.css";
import SinglePost from "./SinglePost";
import fakePosts from "../data/Posts";

const PostsSection = () => {
  return (
    <div className="post-background">
      {fakePosts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsSection;
