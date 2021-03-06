import './Posts.scss'
import NewPost from './NewPost'

const Posts = ({infoPosts}) => {
  /* Message and like counter for NewPost component*/
  // ТУТ ДОЛЖЕН БЫТЬ МАССИВ  { infoPost }
  /* Отрисовка всех эл infoPost циклом */
  const postElements = infoPosts.map( post => <NewPost message={post.message} likeCount={post.likeCount}/>)

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
      { postElements }
    </div>
  );
};


export default Posts;