import React, {useState, useEffect, useContext} from 'react';
import {Card, Button} from "react-bootstrap"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AllPosts from '../Posts/AllPosts'
import Comments from '../Comments/Comments'
import Ooga from '../Comments/Ooga'
import HotStocksList from '../HotStocksList/hotStocksList';
import PostEdit from '../PostEdit/postEdit';

import UserContext from '../../context/userContext';

const style = {
  Buttons: {
    marginRight: '20px'
  },
  TickerHeader: {
    width:'100%',
    height:'150px',
    margin:'0px'
  },
  cardBody: {
    width: '50%',
    margin:'1.5em',
    margin:'0 auto',
  },
  newPostButton: {
    margin: '1.5em',
    textAlign: 'left',
  }
}

const Ticker = () => {
  const [value, setValue] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const currentTicker = (window.location.pathname.split("/")[2])
  const getValue = (currentTicker) => {
    fetch('http://localhost:5000/value/' + currentTicker)
    .then(response => response.json())
    .then(val => {
      if(val.error){
        setValue(val.error)
      }else{
        setValue(val.price)
      }
    })
  };

  useEffect(() => {
      getValue(currentTicker)
  }, []);

  let leftSide = (!newPost) 
  ? (
  <>
    <AllPosts ticker={currentTicker}></AllPosts>
  </>
  )
  : (
    <PostEdit 
      symbol={currentTicker}
      cancel={setNewPost}
    />
  )

  let NPB = (!newPost && !!userInfo.loggedIn && value != 'INVALID TICKER')
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
      <h2 style={{textAlign:'center'}}>{currentTicker.toUpperCase()}: <span className="text-success">{value}</span></h2> 
      <div className="row">
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
 
export default Ticker;