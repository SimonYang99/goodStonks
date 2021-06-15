import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

const style = {
  body: {
    margin: '1.5em',
    textAlign: 'left'
  }
}

const HotStocksList = () => {
   const [hotStock, setHotStock] = useState({
    data: [
      { symbol: 'AAPL', numComments: 5 },
      { symbol: 'TSLA', numComments: 10 },
      { symbol: 'MSFT', numComments: 15 },
      { symbol: 'AMZN', numComments: 10 },
      { symbol: 'AYYLMAO', numComments: 15 }
    ]
  });

  return(
    <Card style={style.body}>
      <Card.Body>
        <h3 style={{marginBottom: '1em', marginTop: '0.5em'}}>Today's Hot Stocks Discussions</h3>
        {hotStock.data.map((val, key) => 
          <div key={key} className="row">
            <h5 className="col"><a href={"/ticker/" + val.symbol}>{val.symbol}</a></h5>
            <h6 style={{textAlign: 'right'}} className="col">{val.numComments}</h6>
          </div>
        )}
        <Button style={{width: '100%', marginTop: '0.5em'}}>View All</Button>
      </Card.Body>
    </Card>
  );
}

export default HotStocksList;

