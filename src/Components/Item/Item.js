import React, {useEffect, useState} from 'react';
import styles from './Item.module.css';
import axios from 'axios';
import backIcon from './back.svg';

const Item = (props) => {

    const [bidValue,setBidValue] = useState('');

    const [Item,setItem] = useState([]);
    const run = () => {
        axios.get('https://react-auction-server.herokuapp.com/getitem?_id='+props.match.params.id)
        .then((response) => {
            response.data.map(item => {
                return setItem(item);
            })
        })
        .catch((error) => console.error(error))
      }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[Item.bidprice]);

    const back = () => props.history.goBack;

    const bidHandler = (v) => {
        if(localStorage.getItem('auctionUser')){
            setBidValue(v);
        }else{
            alert('You must Login first');
        }
    }

    const placeBidHandler = () => {
        if(bidValue > Item.bidprice && bidValue > Item.initialprice)
        {
            axios.post('https://react-auction-server.herokuapp.com/updateBidPrice',
            {   bidprice: bidValue,
                id: props.match.params.id,
                mail: localStorage.getItem('auctionUser')
            }).then((response) => {
                alert('Updated');
            })
            .catch((error)=>console.error(error))
        }
        else{
            alert('Bid Price is less than or equal to Present Bid Price')
        }
    }

    return (
        <div>   
              <div className={styles.backIcon} onClick={back()}><img src={backIcon} alt='back'></img></div>
              <div style={{display:'flex',backgroundColor:'white'}}>
              <div style={{margin:'40px'}}>
              <h1 style={{color:'steelblue'}}>{Item.name}</h1>
              <img className={styles.Image} src={Item.image} alt="frame"></img>
              </div>
              <div style={{margin:'40px'}}>
              <p>By {Item.mail}</p>
              <p>Category: <b>{Item.category}</b></p>
              <p>Initial Price: {Item.initialprice}₹</p>
              { Item.bidprice ? <p>Present Bid Price: {Item.bidprice}₹ (By {Item.bidder})</p> : <p>No Bids Yet</p>}
              <p className='Description' style={{color:'grey'}}>About: {Item.description}</p>
              </div>
              </div>

              <center><input type='number' value={bidValue} onChange={(e) => bidHandler(e.target.value)} placeholder='Place Bid' ></input><br></br>
              <button onClick={placeBidHandler}>Bid Now</button></center>

        </div>
    );
};

export default Item;