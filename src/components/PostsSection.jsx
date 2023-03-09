import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/PostsSection.css";
import SinglePost from "./SinglePost";
// import fakePosts from "../data/Posts";

const PostsSection = () => {
  const [dummyPosts, setDummyPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const resp = await axios.get("/src/data/MOCK_DATA.json");
      const data = resp.data;
      setDummyPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="post-background">
      {dummyPosts?.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsSection;
