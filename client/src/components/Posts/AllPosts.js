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
    const fetchData = async () => {
      fetch('http://localhost:5000/getAllPosts')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        posts.data = json
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
          title={val.title} 
          poster={val.poster} 
          postBody={val.postBody} 
          commentCount={val.commentCount} />
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

