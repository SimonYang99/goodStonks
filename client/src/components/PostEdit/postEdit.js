import React, {useReducer} from 'react';

import { Card, Form, Button } from 'react-bootstrap';

const style = {
  body: {
    textAlign: "left",
    margin: "1.5em"
  },
  ButtonDiv: {
    textAlign: "right"
  },
  buttons: {
    width: "10em",
    marginLeft: "2em"
  }
}

const reducer = (state, action) => {
  switch(action.field){
    case "title" : return {...state, title: action.value};
    case "body" : return {...state, body: action.value};
  }
}

const PostEdit = ({symbol, cancel}) => {
  const initState = {
    title: "",
    body: "",
  };
  const [info, dispatchInfo] = useReducer(reducer, initState);

  // determines if post or comment
  let stock = (symbol===undefined) 
  ? <></>
  : ( 
    <Form.Group>
      <Form.Label>Stock:</Form.Label>
      <Form.Control value={symbol} as="input" readOnly={true} />
    </Form.Group>
  );

  const handleSubmit = () => {
    console.log(info);
  }

  const handleCancel = () => {
    cancel(false);
  }

  return ( 
  <Card style={style.body}>
    <Card.Body>
      {stock}
      <Form.Group>
        <Form.Label>Post Title:</Form.Label>
        <Form.Control as="input" 
          onChange={e=> dispatchInfo({value: e.target.value, field: 'title'})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Post Content:</Form.Label>
        <Form.Control as="textarea" rows={6}
          onChange={e=> dispatchInfo({value: e.target.value, field: 'body'})}
        />
      </Form.Group>
      <div style={style.ButtonDiv}>
        <Button variant="secondary" style={style.buttons} onClick={handleCancel}>Cancel</Button>
        <Button variant="primary" style={style.buttons} onClick={handleSubmit}>Post</Button>
      </div>  
    </Card.Body>
  </Card> 
  );
}
 
export default PostEdit;