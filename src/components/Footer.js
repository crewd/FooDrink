import React, { useState } from "react";
import styled from "styled-components";
import gitImg from "../img/github-icon.png"


const Footer = () => {
  return(
    <FooterDiv>
      <a href="http://github.com/crewd" target="blank"><GitIcon src={gitImg}/></a>
    </FooterDiv>
  )
}

const FooterDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: #282c34 ;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const GitIcon = styled.img `
  width: 30px;
  height: 30px;
`

export default Footer;