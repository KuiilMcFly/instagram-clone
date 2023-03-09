import UserBox from "./UserBox";
import UserInteractions from "./UserInteractions";
import '../Styles/modalComments.css'

const ModalComments = ({ setIsOpen, user_image, postImage }) => {
  return (
    <div className="modalComments">
      <div className="flex-content">
          <div className="content-box">
              <img src={postImage} alt="" />
          </div>
          <div className="comments-box">
              <UserBox user_image={user_image} />
              <div className="description">

              </div>

              <div className="comments">

              </div>
              <UserInteractions/>
          </div>
      </div>
      <button onClick={() => setIsOpen(false)}>X</button>
    </div>
  );
};

export default ModalComments;
