import './Posts.scss';
const NewPost = ({message}) => {
  return (
    <div className="new-posts">
      <div className="post">
        <img className="post-user__photo" src="https://via.placeholder.com/50" alt=""/>
        <div className="post-message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default NewPost;