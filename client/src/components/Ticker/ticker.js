import React, {useState, useEffect} from 'react';

import {Card, Button} from "react-bootstrap"

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


const Ticker = () => {
  const [newPost, setNewPost] = useState(false);

  

  return ( 
    <div style={{marginTop:'4em'}} className="container-fluid">
      <div className="row" style={style.postList}>
        <div className="col-8">
        </div>
            yo
        <div className="col-4">
        </div>
      </div>
    </div>
   );
}
 
export default Ticker;