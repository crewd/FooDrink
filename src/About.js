import React from "react";
import styled from "styled-components";
import topImg from "./img/about-1.jpg"

const About = () => {
  return(
    <section style={sectionStyle}>
      <Container>
        <article style={articleStyle}>
          <TitleImg src={topImg} />
          <TextDiv>
            <h1>FooDrink란?</h1>
            <p>술과 궁합이 잘 맞는 음식을 페어링해주는</p>
            <p>Food Pairing에 대한 정보를 제공 해주는 사이트입니다.</p>
          </TextDiv>
        </article>
      </Container>
    </section>
  )
}

const sectionStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}

const articleStyle = {
  display: "flex",
  justifyContent: "space-between"
}

const spacediv = {
  width: "50px"
}

const Container = styled.div `
  width: 80%;
  padding: 80px 0;
`

const TitleImg = styled.img`
  width: 48%;
`

const TextDiv = styled.div`
  width: 48%;
  >h1 {
    font-size: 32px;
  }
  >p {
    font-size: 21px;
    line-height: 50px;
  }
`

export default About;