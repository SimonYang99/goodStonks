import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
// import { Form, Col, Button, Card } from "react-bootstrap";

const HotStocksList = () => {
   const [hotStock, setHotStock] = useState({
    data: [
      { symbol: 'AAPL', numComments: 5 },
      { symbol: 'TSLA', numComments: 10 },
      { symbol: 'DKNG', numComments: 15 }
    ]
  });

  return(
    <div class="card mx-auto" style={{width: '50%'}}>
        Hot Stocks:
            { 
                hotStock.data.map(r => (
                    <li key={r.symbol}>{r.symbol} - {r.numComments}</li>
                ))
            }
    </div>
  );
}

export default HotStocksList;

