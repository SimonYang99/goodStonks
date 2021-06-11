import React, {useState, useEffect} from 'react';

import {Card, Button} from "react-bootstrap"

import Post from './post';
import HotStocksList from '../HotStocksList/hotStocksList';

import PostEdit from '../PostEdit/postEdit';

const style = {
  postList: {
    //backgroundColor: 'rgb(230, 242, 255)',
    overflow: 'auto',
    textAlign: 'center'
  },
  newPostButton: {
    margin: '1.5em',
    textAlign: 'left'
  }
}

// fetch this data from server

const examplePosts = [
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
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'http://localhost:5000/getAllPosts',
      );
 
      // setNewPost(result.data);
      console.log(result.body)
    };
 
    fetchData();
  }, []);

  let leftSide = (!newPost) 
  ? (<>
      {examplePosts.map((val, key) => 
        <Post key={key} 
          title={val.title} 
          poster={val.poster} 
          postBody={val.postBody} 
          commentCount={val.commentCount} />
        )}
    </>
  )
  : (
    <PostEdit 
      symbol="hi there"
      cancel={setNewPost}
    />
  )

  let NPB = (!newPost)
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