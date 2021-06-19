import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const Ooga = (props) => {
  const [posts, setPosts] = useState({
    data: []
  });

  const fetchTickerPosts = (currentTicker) => {
    fetch('http://localhost:5000/ticker/' + currentTicker)
    .then(response => response.json())
    .then(json => {
      json.forEach(post => post.post_date = post.post_date.split("T")[0])
      console.log(json)
      setPosts({data:json})
    })
  };

  // useEffect(() => {
  //   if(props.ticker == undefined){
  //     fetchAllPosts()
  //   }else{
  //     fetchTickerPosts(props.ticker)
  //   }
  // }, []);

  return(
    <>
      {posts.data.map((val, key) => 
        <Comment
          key={key} 
          title={val.post_title} 
          poster={val.username} 
          // postBody={val.post_text} 
          date={val.post_date} 
          commentCount={val.comment_count}
          />
        )}
        <div>
        OOGA
      </div>
    </>
  );
}

export default Ooga;

