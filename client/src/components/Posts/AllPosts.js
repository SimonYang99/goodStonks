import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import Post from './post';

const AllPosts = () => {
   const [posts, setPosts] = useState({
    data: [
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
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:5000/getAllPosts')
      .then(response => response.json())
      .then(json => {
        json.forEach(post => post.post_date = post.post_date.split("T")[0])
        console.log(json)
        setPosts({data:json})
      })
    };
 
    fetchData();
  }, []);

  return(
    <>
      {posts.data.map((val, key) => 
        <Post 
          key={key} 
          title={val.post_title} 
          poster={val.username} 
          postBody={val.post_text} 
          date={val.post_date} 
          // commentCount={val.commentCount} API needs to be changed to load number of comments as comments are in a different table.
          />
        )}
    </>
  );
}

export default AllPosts;


// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// // import * as ReactBootstrap from "react-bootstrap";
// import { Card, Button } from "react-bootstrap";

// const AllPosts = () => {
//     const [posts, setPosts] = useState({
//     examplePosts : [
//         {
//           id: 1,
//           title: 'First Post',
//           poster: 'Jon Smith',
//           postBody: 'Posting is fun',
//           commentCount: 500
//         },
//         {
//           id: 2,
//           title: '2nd Post',
//           poster: 'Jon Smith',
//           postBody: 'Posting is not fun',
//           commentCount: 70
//         },
//       ]
//   });

//   return(
//     {posts.examplePosts.map}
//   );
// }

// export default AllPosts;

