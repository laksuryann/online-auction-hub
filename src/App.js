import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from '../src/Components/Home/Home';
import Signup from '../src/Components/Signup/Signup';
import Login from '../src/Components/Login/Login';
import Item from '../src/Components/Item/Item';
import Mybids from '../src/Components/Mybids/MyBids';
import Sell from '../src/Components/Sell/Sell';
import Myauctions from '../src/Components/Myauctions/Myauctions';

const App = (props) => {

  const [isLoggedIn,setLogin] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('auctionUser')){
      setLogin(true);
    }else{
      setLogin(false);
    }
  },[isLoggedIn])

  // const sideMenuHandler = () => {
  //   if(localStorage.getItem('auctionUser')){
  //     setLogin(true);
  //   }else{
  //     setLogin(false);
  //   }
  //   const sidemenu = document.getElementById('sidemenu');
  //   sidemenu.classList.length === 1 ? sidemenu.classList.add('active') : sidemenu.classList.remove('active');
  //   const sidemenuicon = document.getElementById('sidemenuicon');
  //   sidemenuicon.classList.length === 2 ? sidemenuicon.classList.remove('active') && sidemenu.classList.add('sideDiv')  : sidemenuicon.classList.add('active') && sidemenu.classList.add('sideDiv');
  // }

  const logoutHandler = () => {
    localStorage.removeItem('auctionUser');
    localStorage.clear();
    setLogin(false);
    // sideMenuHandler();
  }

  // const loginHandler = () => {
  //   sideMenuHandler();
  // }

  // const myBidsHandler = () => {
  //   sideMenuHandler();
  // }

  // const sellHandler = () => {
  //   sideMenuHandler();
  // }

  // const homeClicked = () => {
  //   sideMenuHandler();
  // }

  return (
    <BrowserRouter>
        <div className="App">
          <nav>
          {/* <div onClick={sideMenuHandler} id='sidemenuicon' className='container'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div> */}
            <Link className='title' to='/online-auction-hub/'>ONLINE AUCTION HUB</Link>
            <div id="items">
            {isLoggedIn ? <Link to='/online-auction-hub/mybids'><span id="nav-items">My Bids</span></Link> : null}
            {isLoggedIn ? <Link to='/online-auction-hub/myauctions'><span id="nav-items">My Auctions</span></Link> : null}
            {isLoggedIn ? <Link to='/online-auction-hub/sell'><span id="nav-items">Sell</span></Link> : null}
            { isLoggedIn ? <span id="nav-items" id="logout" onClick={logoutHandler}>Logout</span> : <Link to='/online-auction-hub/login'><span id="nav-items" id="login" >Login</span></Link>}
            </div>
          </nav>

          {/* <div id='sidemenu' className='sideDiv'>
            {isLoggedIn ? <Link to='/online-auction-hub/mybids'><p onClick={myBidsHandler}>My Bids</p></Link> : null}
            {isLoggedIn ? <Link to='/online-auction-hub/myauctions'><p onClick={myBidsHandler}>My Auctions</p></Link> : null}
            {isLoggedIn ? <Link to='/online-auction-hub/sell'><p onClick={sellHandler}>Sell</p></Link> : null}
            {isLoggedIn ? <p onClick={logoutHandler}>Logout</p> : <Link to='/online-auction-hub/login'><p onClick={loginHandler}>Login</p></Link>}
          </div> */}

          <Route path='/online-auction-hub/' exact component={Home}/>
          <Route path='/online-auction-hub/login' exact component={Login}/>
          <Route path='/online-auction-hub/signup' exact component={Signup}/>
          <Route path='/online-auction-hub/mybids' exact component={Mybids}/>
          <Route path='/online-auction-hub/myauctions' exact component={Myauctions}/>
          <Route path='/online-auction-hub/sell' exact component={Sell}/>
          <Route path='/online-auction-hub/items/:id' exact component={Item}/>
        </div>
        </BrowserRouter>
  );
}

export default App; 