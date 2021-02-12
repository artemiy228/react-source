import './Posts.scss'
import NewPost from './NewPost'

const Posts = () => {
  return (
    <div className="posts">
      <div className="my-post">
        <form className="post-title" id="post">
          <h2>My posts</h2>
          <div className="post-description">
            <textarea className="post-textarea" placeholder="Your news..." form='post' rows="4" cols="50"/>
          </div>
          <button className="post-submit" type="submit">SEND</button>
        </form>
      </div>
      <NewPost message={"Hi, how are you?"}/>
      <NewPost message={"Hi, my name is Dmitriy"}/>
    </div>
  );
};


export default Posts;