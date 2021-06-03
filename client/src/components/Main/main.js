import React from 'react';

import Post from './post';
import HotStocksList from '../HotStocksList/hotStocksList';

const style = {
  postList: {
    //backgroundColor: 'rgb(230, 242, 255)',
    overflow: 'auto',
    textAlign: 'center'
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
  return ( 
    <div style={{marginTop:'4em'}} className="container-fluid">
      <div className="row" style={style.postList}>
        <div className="col-8">
          {examplePosts.map((val, key) => 
            <Post key={key} 
              title={val.title} 
              poster={val.poster} 
              postBody={val.postBody} 
              commentCount={val.commentCount} />
          )}
        </div>

        <div className="col-4">
          <HotStocksList />
        </div>
      </div>
    </div>
   );
}
 
export default Main;