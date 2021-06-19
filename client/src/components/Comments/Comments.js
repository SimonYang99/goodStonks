import React, { useState, useEffect, useContext } from 'react';
import Comment from './Comment';
import HotStocksList from '../HotStocksList/hotStocksList';
import PostEdit from '../PostEdit/postEdit';
import UserContext from '../../context/userContext';

const Comments = (props) => {
  const [postComments, setPostComments] = useState({
    data: {
      "post":{
        "comment_count": 0,
        "post_date": "test",
        "post_id": 1,
        "post_text": "test",
        "post_title": "test",
        "ticker": "yo",
        "upvote": 0,
        "username": "user",
      },
      "comments":[]
    
    }
  });
  const [newPost, setNewPost] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const post_id = (window.location.pathname.split("/")[4])
  const fetchComments = () => {
    fetch('http://localhost:5000/getPost/' + post_id)
    .then(response => response.json())
    .then(json => {
      // json.forEach(post => post.post_date = post.post_date.split("T")[0])
      // json.forEach(post => post.commentsCount = JSON.parse(post.commentsCount))
      console.log(json.post)
      console.log(json)
      setPostComments({"data": json})
      console.log(postComments)
    })
  };

  useEffect(() => {
    fetchComments()
  }, []);

  let NPB = (!newPost && !!userInfo.loggedIn)
  let leftSide = (!newPost) 
  ? (
  <>
    <h2 style={{textAlign:'center'}}>{postComments.data.post.post_title}</h2>
    <p style={{textAlign:'center'}}>{postComments.data.post.post_text}</p>
    {postComments.data.comments.map((val, key) => 
    <Comment
      key={key} 
      title={val.comment_text} 
      poster={val.username}  
      date={val.comment_date} 
      />
    )}

  </>
  )
  : (
    <PostEdit 
      symbol={post_id}
      cancel={setNewPost}
    />
  )

  return(
    <>
      <div style={{marginTop:'4em'}} className="container-fluid">
        <div className="row">
        <div className="card-body col-8">
          {leftSide}
        </div>
        <div className="col-4">
          {NPB}
          <HotStocksList />
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Comments;

