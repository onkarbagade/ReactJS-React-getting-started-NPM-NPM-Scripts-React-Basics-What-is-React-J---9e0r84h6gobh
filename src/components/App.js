import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./components/Heading";
import Heading from "./components/InputQuery";
import Heading from "./components/SubHeading";
import Heading from "./components/SubmitButton";

const App = () => {
  return (
    <div id="main">
      <Heading/>
      <InputQuery/>
      <SubHeading/>
      <SubmitButton/>
    </div>
  )
}


