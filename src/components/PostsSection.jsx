import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/PostsSection.css";
import SinglePost from "./SinglePost";
// import fakePosts from "../data/Posts";

const PostsSection = (post) => {

  const [dummyPosts, setDummyPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      
      const resp = await axios.get('https://instagram-clone-7ee14-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
      const data = resp.data;
      
      const dataArray = Object.entries(data).map(([key, value]) => ({id: key, ...value}));
      setDummyPosts(dataArray);
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
