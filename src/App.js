import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import  { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import ContractUS from "./components/ContactUs";
import Footer from "./components/Footer";
import Search from "./components/Search";


const GlobalStyle = createGlobalStyle`
	body, h1, h2, p {
		padding: 0;
		margin: 0;
	}
`;

function App() {
  return (
    <div style={{position: "relative"}}>
      <GlobalStyle />
      <Router>
        <Route path="/" component={Nav} /> 
        <Route path="/fooDrink" exact component={Home} />
        <Route path="/fooDrink" exact component={About} />
        <Route path="/fooDrink" exact component={ContractUS} />
        <Route path="/fooDrink/search" component={Search} />
        <Route path="/" component={Footer} /> 
      </Router>
    </div>
  );
}

export default App;
