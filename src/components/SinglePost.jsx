import React, { useState } from "react";
import UserBox from "./UserBox";
import UserInteractions from "./UserInteractions";
import memePost from "../assets/capire.jpg";
import "../Styles/singlepost.css";
import ModalComments from "./ModalComments";

const SinglePost = ({ post }) => {
  const { username, location, id, user_image, date, image, liked, comments } =
    post;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="post">
      <UserBox
        username={username}
        date={date}
        user_image={user_image}
        location={location}
      />
      <div className="img-post-container">
        <img src={image} alt="" />
      </div>
      <UserInteractions />

      <div className="under-post">
        <p>
          Piace a {liked.users[0].username} e altri {liked.number_likes}
        </p>
        <p onClick={() => setIsOpen(true)}>Mostra tutti e i {comments.length} commenti</p>
        {isOpen && <ModalComments setIsOpen={setIsOpen} />}
        <input type="text" placeholder="Aggiungi un commento..." />
      </div>
    </div>
  );
};

export default SinglePost;
