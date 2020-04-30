import React,{useEffect, useState} from 'react';
import styles from './Home.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Items from '../Items/Items';


const Home = (props) => {
  
  const [data,setData] = useState([]);
  
  const start = () => {
    // var reload = true
    //   if(reload){
    //     window.location.reload()
    //     reload = false
    //   }
      axios.get('https://react-auction-server.herokuapp.com/sell')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error))
    }

    useEffect(() => {
      start();
    },[]);

    return (
        <>
        <center><div id="main-div">
        "Open Auction Hub" is designed in such a way that it is as user friendly as possible. So
        any aspiring bidder or seller can visit the Web app and engage in bidding with least
        effort. Our application provides a solution for the buyers and sellers from different
        geographical locations to come together on a single platform and to host and participate in
        auctions at ease.
        </div></center>
        <span style={{color:'#262626',fontSize:'30px',marginLeft:'20px',borderBottom:'3px solid skyblue'}}><b>PRODUCTS AVAILABLE ➡</b></span>
        <div>
        {data.map((item) => {
          return (<Link key={item._id} to={'/online-auction-hub/items/' + item._id}>
                <Items name={item.name} initialprice={item.initialprice} bidprice={item.bidprice} image={item.image}></Items>
          
          </Link>)
        })}
        </div>
        <br />
        <hr />
        <center><div className={styles.homeFooter}>
          {/* <span className={styles.footerOne}>
            Follow us
          </span> */}
          <span  className={styles.footerTwo}>
            <p style={{color:'#262626',fontSize:'20px',borderBottom:'3px solid skyblue'}}>Subscribe to get updates on new Products</p>
            <input type="text"></input><button>Subscribe</button>
          </span>
        </div></center>
        </>
    );
};

export default Home;