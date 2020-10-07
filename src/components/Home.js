import React from "react";
import styled from "styled-components";
import mainImage from "../img/main.jpg";

function Home({history}) {
  return (
    <TextDiv>
      <ColorOverlay>
        <p>FooDrink</p>
        <StartBtn onClick={() => history.push('/search')}>FooDrink <br /> 시작하기</StartBtn>
      </ColorOverlay>
    </TextDiv>
  );
}

const TextDiv = styled.div `
  background-image: url(${mainImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: 100%;
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    background-size: 100% 100vh;
  }
` 

const ColorOverlay = styled.div `
  background-color: rgba(0, 0, 0, .6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:column nowrap;
  line-height: 50px;
  color: #fff;
  >p {
    font-size: 54px;
    font-weight: bold;
    padding: 15px;
  }
`

const StartBtn = styled.button `
  margin-top: 80px;
  width: 200px;
  height:100px;
  background-color: #3C9EFF;
  border: none;
  border-radius: 20px;
  font-size: 21px;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
  line-height: 30px;
`

export default Home;
