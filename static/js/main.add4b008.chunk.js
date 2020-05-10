(this["webpackJsonponline-auction-hub"]=this["webpackJsonponline-auction-hub"]||[]).push([[0],{18:function(e,t,a){e.exports={homeFooter:"Home_homeFooter__2dM_1",footerOne:"Home_footerOne__4Vlk3",footerTwo:"Home_footerTwo__3LZh6"}},19:function(e,t,a){e.exports={Card:"Items_Card__2SOtq",Image:"Items_Image__Gnf7P"}},22:function(e,t,a){e.exports={Image:"Item_Image__10Jha",backIcon:"Item_backIcon__vJprx"}},39:function(e,t,a){e.exports={Cn:"Signup_Cn__3HJAQ"}},40:function(e,t,a){e.exports={Main:"Login_Main__19h4O"}},41:function(e,t,a){e.exports=a.p+"static/media/back.646e3024.svg"},42:function(e,t,a){e.exports={ell:"Sell_ell__2zd4b"}},43:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),c=a.n(o),l=(a(48),a(14)),i=a(1),u=(a(49),a(5)),s=a(10),m=a(18),p=a.n(m),d=a(3),b=a.n(d),h=a(19),g=a.n(h),E=function(e){return r.a.createElement("span",{className:g.a.Card,onClick:e.clicked},r.a.createElement("h2",null,e.name),r.a.createElement("img",{className:g.a.Image,src:e.image,alt:"frame"}))},f="",v=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){b.a.get("https://react-auction-server.herokuapp.com/sell").then((function(e){c(e.data),f=e.data})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement("div",{id:"main-div"},'"Open Auction Hub" is designed in such a way that it is as user friendly as possible. So any aspiring bidder or seller can visit the Web app and engage in bidding with least effort. Our application provides a solution for the buyers and sellers from different geographical locations to come together on a single platform and to host and participate in auctions at ease.')),r.a.createElement("span",{style:{color:"#262626",fontSize:"30px",marginLeft:"20px",borderBottom:"3px solid skyblue"}},r.a.createElement("b",null,"PRODUCTS AVAILABLE \u27a1")),r.a.createElement("span",null,r.a.createElement("select",{name:"category",value:m,onChange:function(e){if(d(e.target.value),"All"===e.target.value)c(f);else{var t=f.filter((function(t){return t.category===e.target.value}));c(t)}}},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Fine Art"},"Fine Art"),r.a.createElement("option",{value:"Coins and Jewelry"},"Coins and Jewelry"),r.a.createElement("option",{value:"Collectibles"},"Collectibles"),r.a.createElement("option",{value:"Antiques"},"Antiques"),r.a.createElement("option",{value:"Memorabilia"},"Memorabilia"),r.a.createElement("option",{value:"Clothing and Souvenirs"},"Clothing and Souvenirs"))),r.a.createElement("div",null,o.map((function(e){return r.a.createElement(u.b,{key:e._id,to:"/online-auction-hub/items/"+e._id},r.a.createElement(E,{name:e.name,initialprice:e.initialprice,bidprice:e.bidprice,image:e.image}))}))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("center",null,r.a.createElement("div",{className:p.a.homeFooter},r.a.createElement("span",{className:p.a.footerTwo},r.a.createElement("p",{style:{color:"#262626",fontSize:"20px",borderBottom:"3px solid skyblue"}},"Subscribe to get updates on new Products"),r.a.createElement("input",{type:"text"}),r.a.createElement("button",null,"Subscribe")))))},y=a(39),O=a.n(y),S=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),s=u[0],m=u[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),h=d[0],g=d[1],E=Object(n.useState)(""),f=Object(i.a)(E,2),v=f[0],y=f[1],S={fullName:o,email:s,phoneNumber:h,password:v},k=function(e){switch(e.target.placeholder){case"Name":c(e.target.value);break;case"Email":m(e.target.value);break;case"Phone Number":g(e.target.value);break;case"Password":y(e.target.value)}};return r.a.createElement("div",null,r.a.createElement("div",{className:O.a.Cn},r.a.createElement("input",{type:"text",placeholder:"Name",value:o,onChange:k,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",placeholder:"Email",value:s,onChange:k,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"tel",placeholder:"Phone Number",value:h,onChange:k,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Password",value:v,onChange:k,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){b.a.post("https://react-auction-server.herokuapp.com/signup",S).then((function(t){"Ok"!==t.data.status?console.error("Failed"):e.history.push({pathname:"/online-auction-hub/login"})})).catch((function(e){return console.error(e)}))}},"Signup"),r.a.createElement("p",null,"Already have an account? ",r.a.createElement("span",{onClick:function(){e.history.push({pathname:"/online-auction-hub/login"})}},"Login here.."))))},k=a(40),j=a.n(k),C=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),s=u[0],m=u[1];return r.a.createElement("div",{className:j.a.Main},r.a.createElement("center",null,r.a.createElement("div",{style:{padding:"20px",backgroundColor:"lightgreen",width:"40vw",borderRadius:"20px"}},r.a.createElement("input",{type:"email",placeholder:"Email",value:o,onChange:function(e){c(e.target.value)},required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Password",value:s,onChange:function(e){m(e.target.value)},required:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){b.a.post("https://react-auction-server.herokuapp.com/signin",{mail:o,password:s}).then((function(t){"OK"!==t.data.status?alert("Authentication Failed"):(localStorage.setItem("auctionUser",o),e.history.push({pathname:"/online-auction-hub/"}))})).catch((function(e){return console.error(e)}))}},"Login"))),r.a.createElement("p",null,"Don't have an account one? ",r.a.createElement("span",{onClick:function(){e.history.push({pathname:"/online-auction-hub/signup"})}},"Signup here..")))},_=a(22),I=a.n(_),w=a(41),x=a.n(w),N=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)([]),u=Object(i.a)(l,2),s=u[0],m=u[1];Object(n.useEffect)((function(){b.a.get("https://react-auction-server.herokuapp.com/getitem?_id="+e.match.params.id).then((function(e){e.data.map((function(e){return m(e)}))})).catch((function(e){return console.error(e)}))}),[s.bidprice]);return r.a.createElement("div",null,r.a.createElement("div",{className:I.a.backIcon,onClick:e.history.goBack},r.a.createElement("img",{src:x.a,alt:"back"})),r.a.createElement("div",{style:{display:"flex",backgroundColor:"white"}},r.a.createElement("div",{style:{margin:"40px"}},r.a.createElement("h1",{style:{color:"steelblue"}},s.name),r.a.createElement("img",{className:I.a.Image,src:s.image,alt:"frame"})),r.a.createElement("div",{style:{margin:"40px"}},r.a.createElement("p",null,"By ",s.mail),r.a.createElement("p",null,"Category: ",r.a.createElement("b",null,s.category)),r.a.createElement("p",null,"Initial Price: ",s.initialprice,"\u20b9"),s.bidprice?r.a.createElement("p",null,"Present Bid Price: ",s.bidprice,"\u20b9 (By ",s.bidder,")"):r.a.createElement("p",null,"No Bids Yet"),r.a.createElement("p",{className:"Description",style:{color:"grey"}},"About: ",s.description))),r.a.createElement("center",null,r.a.createElement("input",{type:"number",value:o,onChange:function(e){return t=e.target.value,void(localStorage.getItem("auctionUser")?c(t):alert("You must Login first"));var t},placeholder:"Place Bid"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){o>s.bidprice&&o>s.initialprice?b.a.post("https://react-auction-server.herokuapp.com/updateBidPrice",{bidprice:o,id:e.match.params.id,mail:localStorage.getItem("auctionUser")}).then((function(e){alert("Updated")})).catch((function(e){return console.error(e)})):alert("Bid Price is less than or equal to Present Bid Price")}},"Bid Now")))},A=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){localStorage.getItem("auctionUser")?b.a.get("https://react-auction-server.herokuapp.com/mybids?bidder="+localStorage.getItem("auctionUser")).then((function(e){o(e.data)})).catch((function(e){return console.error(e)})):alert("You must Login first")}),[]),a.map((function(e){return r.a.createElement(u.b,{key:e._id,to:"/online-auction-hub/items/"+e._id},r.a.createElement(E,{name:e.name,image:e.image}))}))},L=a(23),B=a.n(L),U=a(42),P=a.n(U),q=a(16),M=a.n(q);a(74);M.a.initializeApp({apiKey:"AIzaSyDLutLNsZk7Cshpu7RkIRMhRo_bTnlXWNA",authDomain:"auctionapp-a1f6d.firebaseapp.com",databaseURL:"https://auctionapp-a1f6d.firebaseio.com",projectId:"auctionapp-a1f6d",storageBucket:"auctionapp-a1f6d.appspot.com",messagingSenderId:"651258766641"});var F=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),s=u[0],m=u[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),h=d[0],g=d[1],E=Object(n.useState)(""),f=Object(i.a)(E,2),v=f[0],y=f[1],O=Object(n.useState)(""),S=Object(i.a)(O,2),k=S[0],j=S[1],C=Object(n.useState)(""),_=Object(i.a)(C,2),I=_[0],w=_[1],x=Object(n.useState)(0),N=Object(i.a)(x,2),A=N[0],L=N[1],U=function(e){if(localStorage.getItem("auctionUser"))switch(e.target.name){case"name":c(e.target.value);break;case"price":m(e.target.value);break;case"date":g(e.target.value);break;case"category":y(e.target.value);break;case"description":j(e.target.value)}else alert("You must Login first!")},q={mail:localStorage.getItem("auctionUser"),name:o,initialprice:s,bidprice:"",bidder:"",date:h,image:I,category:v,description:k},F=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};return r.a.createElement("div",{className:P.a.ell},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name of Item",value:o,onChange:U,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"price",placeholder:"Your Price",value:s,onChange:U,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"datetime-local",name:"date",value:h,onChange:U,required:!0}),r.a.createElement("br",null),r.a.createElement("select",{name:"category",value:v,onChange:U,required:!0},r.a.createElement("option",{value:"Fine Art"},"Fine Art"),r.a.createElement("option",{value:"Coins and Jewelry"},"Coins and Jewelry"),r.a.createElement("option",{value:"Collectibles"},"Collectibles"),r.a.createElement("option",{value:"Antiques"},"Antiques"),r.a.createElement("option",{value:"Memorabilia"},"Memorabilia"),r.a.createElement("option",{value:"Clothing and Souvenirs"},"Clothing and Souvenirs")),r.a.createElement("br",null),r.a.createElement("input",{type:"file",accept:"image/*",name:"file",onChange:function(e){return function(e){var t,a,n;return B.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!localStorage.getItem("auctionUser")){r.next=8;break}return t=M.a.storage().ref("/itemphotos"),a=F(),n=t.child("itemphotos"+a),r.next=6,B.a.awrap(n.put(e).then((function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);L(t),n.getDownloadURL().then((function(e){w(e)}))})));case 6:r.next=9;break;case 8:alert("You must Login first!");case 9:case"end":return r.stop()}}))}(e.target.files[0])}}),r.a.createElement("br",null),r.a.createElement("div",null,A),r.a.createElement("br",null),r.a.createElement("textarea",{placeholder:"Write a short description about item...",name:"description",value:k,onChange:U,rows:"3",cols:"20"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){localStorage.getItem("auctionUser")?b.a.post("https://react-auction-server.herokuapp.com/sell",q).then((function(t){"Ok"!==t.data.status?console.error("Failed"):e.history.push({pathname:"/online-auction-hub/"})})).catch((function(e){return console.error(e)})):alert("You must Login first!")}},"Sell"))},J=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){localStorage.getItem("auctionUser")?b.a.get("https://react-auction-server.herokuapp.com/sellbyuser?mail="+localStorage.getItem("auctionUser")).then((function(e){o(e.data)})).catch((function(e){return console.error(e)})):alert("You must Login first")}),[]),a.map((function(e){return r.a.createElement(u.b,{key:e._id,to:"/online-auction-hub/items/"+e._id},r.a.createElement(E,{name:e.name,image:e.image}))}))},Y=function(e){var t,a=Object(n.useState)(!1),o=Object(i.a)(a,2),c=o[0],m=o[1];Object(n.useEffect)((function(){localStorage.getItem("auctionUser")?m(!0):m(!1)}),[c]);return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement(u.b,{className:"title",to:"/online-auction-hub/"},"ONLINE AUCTION HUB"),r.a.createElement("div",{id:"items"},c?r.a.createElement(u.b,{to:"/online-auction-hub/mybids"},r.a.createElement("span",{id:"nav-items"},"My Bids")):null,c?r.a.createElement(u.b,{to:"/online-auction-hub/myauctions"},r.a.createElement("span",{id:"nav-items"},"My Auctions")):null,c?r.a.createElement(u.b,{to:"/online-auction-hub/sell"},r.a.createElement("span",{id:"nav-items"},"Sell")):null,c?r.a.createElement("span",(t={id:"nav-items"},Object(l.a)(t,"id","logout"),Object(l.a)(t,"onClick",(function(){localStorage.removeItem("auctionUser"),localStorage.clear(),m(!1)})),t),"Logout"):r.a.createElement(u.b,{to:"/online-auction-hub/login"},r.a.createElement("span",Object(l.a)({id:"nav-items"},"id","login"),"Login")))),r.a.createElement(s.a,{path:"/online-auction-hub/",exact:!0,component:v}),r.a.createElement(s.a,{path:"/online-auction-hub/login",exact:!0,component:C}),r.a.createElement(s.a,{path:"/online-auction-hub/signup",exact:!0,component:S}),r.a.createElement(s.a,{path:"/online-auction-hub/mybids",exact:!0,component:A}),r.a.createElement(s.a,{path:"/online-auction-hub/myauctions",exact:!0,component:J}),r.a.createElement(s.a,{path:"/online-auction-hub/sell",exact:!0,component:F}),r.a.createElement(s.a,{path:"/online-auction-hub/items/:id",exact:!0,component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.add4b008.chunk.js.map