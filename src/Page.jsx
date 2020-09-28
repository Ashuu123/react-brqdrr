import React from "react";
import Button from "react-bootstrap";

const Page = (props) => {
 // console.log("props is " , props);
  return (
<div> 
<h2>{props.title} </h2>
<p>{props.description} </p>
 </div>
  );
}

export default Page;