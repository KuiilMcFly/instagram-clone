import React, { useState } from "react";
import UserBox from "./UserBox";
import UserInteractions from "./UserInteractions";
import memePost from "../assets/capire.jpg";
import "../Styles/singlepost.css";
import ModalComments from "./ModalComments";

const SinglePost = ({ post }) => {
  const { username, location, id, user_image, created_at, image, liked, comments, date, firebaseId } =
    post;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="post">
      <UserBox
        username={username}
        date={created_at}
        user_image={user_image}
        location={location}
      />
      <div className="img-post-container">
        <img src={image} alt="" />
      </div>
      <UserInteractions setIsOpen={setIsOpen} id={id} firebaseId={firebaseId} />

      <div className="under-post">
        <p>
          Piace a {liked} persone
        </p>
        <p onClick={() => setIsOpen(true)}>
          Mostra tutti e i {comments && comments.length} commenti
        </p>

        {isOpen && (
          <ModalComments
            setIsOpen={setIsOpen}
            user_image={user_image}
            postImage={image}
            comments={comments}
            username={username}
            date={date}
          />
        )}
        <input className="comment" type="text" placeholder="Aggiungi un commento..." />
      </div>
    </div>
  );
};

export default SinglePost;
