import React, { useState } from "react";
import Nav from "./Nav";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./Home";
import About from "./About";
import ContractUS from "./ContactUs";
import Footer from "./Footer";
import Result from "./Result";


const GlobalStyle = createGlobalStyle`
	body, h1, h2, p {
		padding: 0;
		margin: 0;
	}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Home />
      <Result />
      <About />
      <ContractUS />
      <Footer />
    </div>
  );
}

export default App;
