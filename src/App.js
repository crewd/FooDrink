import React, { useState } from "react";
import Nav from "./Nav";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./Home";
import About from "./About";
import ContractUS from "./ContactUs";
import Footer from "./Footer";


const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

function App() {
  const [CUform, setCUform] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Home />
      <About />
      <ContractUS />
      <Footer />
    </div>
  );
}

export default App;
