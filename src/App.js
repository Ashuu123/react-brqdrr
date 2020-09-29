import React from "react";
import Page from "./Page";
import "./style.css";

export default function App() {
  return (
    <div>
    <Page title="hello world" description = "this is first props" buttonTitle="Submit"/>
    <Page title="hello Jhon" description = "this is second props" buttonTitle="Login"/>
   <Page title="World hello" description = "this is third props" buttonTitle="Register"/>
    </div>
  );
}
