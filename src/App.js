import React, { useState } from "react";
import Nav from "./components/Nav";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import ContractUS from "./components/ContactUs";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Result from "./result/Result";


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
      <Search />
      <About />
      <ContractUS />
      <Footer />
    </div>
  );
}

export default App;
