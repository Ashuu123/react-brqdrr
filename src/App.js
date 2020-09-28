import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

import "./style.css";

export default function App() {
  return (
    <div>
     <Header/> 
     <main role= "main">
     <Jumbotron/>
     <div className="album py-5 bg-light">
    <div className="container">
      <div className="row">
     <Card/>
      <Card/>
       <Card/>
        <Card/>
         <Card/>  
          <Card/>
           <Card/>
            <Card/>
            <Card/>
     </div>
     </div>
     </div>
     </main>
     <Footer/>
    </div>
  );
}
