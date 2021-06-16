import React, {useState, useContext, useEffect} from 'react';

import {Card, Button} from "react-bootstrap"

import HotStocksList from '../HotStocksList/hotStocksList';

import PostEdit from '../PostEdit/postEdit';
import AllPosts from '../Posts/AllPosts'

import UserContext from '../../context/userContext';

const style = {
  postList: {
    //backgroundColor: 'rgb(230, 242, 255)',
    overflow: 'auto',
    textAlign: 'center'
  },
  newPostButton: {
    margin: '1.5em',
    textAlign: 'left',
  }
}

// fetch this data from server

let examplePosts = [
  {
    id: 1,
    title: 'First Post',
    poster: 'Jon Smith',
    postBody: 'Posting is fun',
    commentCount: 500
  },
  {
    id: 2,
    title: '2nd Post',
    poster: 'Jon Smith',
    postBody: 'Posting is not fun',
    commentCount: 70
  },
]


const Main = () => {
  const [newPost, setNewPost] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);

  let leftSide = (!newPost) 
  ? (
  <>
    <AllPosts/>
  </>
  )
  : (
    <PostEdit 
      symbol=""
      cancel={setNewPost}
    />
  )

  let NPB = (!newPost && !!userInfo.loggedIn)
  ? (
    <Card style={style.newPostButton}>
      <Card.Body>
        <Button style={{width: '100%'}} 
          onClick={()=>setNewPost(!newPost)}>
            New Post
        </Button>
      </Card.Body>
    </Card>
  )
  : <> </>
  

  return ( 
    <div style={{marginTop:'4em'}} className="container-fluid">
      <h2 style={{textAlign:'center'}}className="card-title">Frontpage</h2>
      <div className="row" style={style.postList}>
        <div className="col-8">
          {leftSide}
        </div>

        <div className="col-4">
          {NPB}
          <HotStocksList />
        </div>
      </div>
    </div>
   );
}
 
export default Main;