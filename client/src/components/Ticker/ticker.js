import React, {useState, useEffect} from 'react';
import AllPosts from '../Posts/AllPosts'
const style = {
  Buttons: {
    marginRight: '20px'
  },
  TickerHeader: {
    width:'100%',
    height:'150px',
    margin:'50px'
  },
  cardBody: {
    width: '50%',
    margin:'1.5em',
    margin:'0 auto',
  }
}

const Ticker = () => {
  const [value, setValue] = useState(false);
  const currentTicker = (window.location.pathname.split("/ticker/")[1])
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
  
  return ( 
    <div style={{marginTop:'4em'}} className="container-fluid">
      <div className="card-body">
        <h2 style={{textAlign:'center'}}className="card-title">{currentTicker.toUpperCase()}: <span className="text-success">{value}</span></h2>
      </div>
      <AllPosts ticker={currentTicker}></AllPosts>
    </div>
   );
}
 
export default Ticker;