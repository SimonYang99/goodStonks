import React, { useReducer, useState } from 'react';
import UserContext from '../../context/userContext';
import { useHistory } from "react-router-dom"
import { Card, Form, Button } from 'react-bootstrap';
import Swal from "sweetalert2";

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
  switch (action.field) {
    case "title": return { ...state, title: action.value };
    case "body": return { ...state, body: action.value };
    case "message": return { ...state, message: action.value };
    case "invalid": return { ...state, invalid: action.value };
  }
}

const PostEdit = ({ symbol, cancel }) => {
  const history = useHistory();
  const [ticker, setTicker] = useState(symbol);
  const [tickerInvalid, setTickerInvalid] = useState({ message: null, invalid: true })
  const [titleInvalid, setTitleInvalid] = useState({ message: null, invalid: true })
  const [bodyInvalid, setBodyInvalid] = useState({ message: null, invalid: true })

  const initState = {
    title: "",
    body: "",
  };

  const [info, dispatchInfo] = useReducer(reducer, initState);

  const validation = () => {
    let r = true;

    (!!ticker) ?
      setTickerInvalid({ message: null, invalid: false }) :
      setTickerInvalid({ message: "Ticker is required.", invalid: true });

    (!!info.title) ?
      setTitleInvalid({ message: null, invalid: false }) :
      setTitleInvalid({ message: "Title is required.", invalid: true });

    (!!info.body) ?
      setBodyInvalid({ message: null, invalid: false }) :
      setBodyInvalid({ message: "Body is required.", invalid: true });

    (!tickerInvalid.invalid && !titleInvalid.invalid && !bodyInvalid.invalid) ? r = true : r = false;

    return r;
  }

  // determines if post or comment
  let stock = (symbol === undefined)
    ? <></>
    : (
      <Form.Group>
        <Form.Label>Stock:</Form.Label>
        <Form.Control as="input" value={ticker} readOnly={!!symbol}
          onChange={e => setTicker(e.target.value)}
        />
        <span className="text-danger">{tickerInvalid.message}</span>
      </Form.Group>
    );

  const handleSubmit = () => {
    let data = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(info);
    let todo = {
      username: data.username,
      ticker: ticker,
      postTitle: info.title,
      postText: info.body,
      completed: false
    };

    if (!!validation()) {
      // fetch('http://localhost:5000/value/' + ticker)
      //   .then(response => response.json())
      //   .then(val => {
      //     if (val.error) {
      //       Swal.fire({
      //         icon: 'error',
      //         title: 'Error',
      //         showConfirmButton: false,
      //         timer: 2000
      //       });
      //     } else {
            fetch('http://localhost:5000/ticker/createpost', {
              method: 'POST',
              body: JSON.stringify(todo),
              headers: { 'Content-Type': 'application/json' }
            }).then(res => { res.json(); cancel(false); })
              .then(json => { console.log(json) }
              );
          // }
        // })
    }
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
            onChange={e => dispatchInfo({ value: e.target.value, field: 'title' })}
          />
          <span className="text-danger">{titleInvalid.message}</span>
        </Form.Group>
        <Form.Group>
          <Form.Label>Post Content:</Form.Label>
          <Form.Control as="textarea" rows={6}
            onChange={e => dispatchInfo({ value: e.target.value, field: 'body' })}
          />
          <span className="text-danger">{bodyInvalid.message}</span>
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