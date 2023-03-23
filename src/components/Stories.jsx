import "../Styles/stories.css";
import SingleStory from "./SingleStory";

const Stories = ({ posts }) => {
  return (
    <div className="story-bar">
      {posts?.slice(0,7).map((post) => (
        <SingleStory key={post.id} username={post.username} user_image={post.user_image} />
      ))}
    </div>
  );
};

export default Stories;
