import React from "react";
import styled from "styled-components";
import drink from "../json/drink.json";
import { Tabs } from 'antd';

const Result = ({value}) => {

  let FooDrink = "";

  if(value === "맥주") {
    FooDrink = drink.맥주;
  } else if (value === "소주") {
    FooDrink = drink.소주;
  } else if (value === "막걸리") {
    FooDrink = drink.막걸리;
  } else if (value === "족발") {
    FooDrink = drink.족발;
  } 
  else if (value === "치킨") {
    FooDrink = drink.치킨;
  }
  else if (value === "양꼬치") {
    FooDrink = drink.양꼬치;
  }
  else {
    FooDrink = drink.noneResult;
  }

  console.log(FooDrink);
  
  const ResultValue = FooDrink.map((v, i) => {
    const { TabPane } = Tabs;

    return (
      <TabPane tab={<span style={{ fontSize: 24, textAlign: "center" }}>{v.name}</span>} key={i}>
        <About>
          <p style={{fontWeight: "bold", fontSize: "21px"}}>특징</p>
          <p>{v.about}</p>
          <p  style={{fontWeight: "bold", fontSize: "21px"}}>페어링</p>
          <p>{v.pairing}</p>
        </About>
      </TabPane>
    )
  });

  return (
    <Tabs defaultActiveKey="0" size="large" centered tabBarStyle={{ fontSize: "24px", marginLeft: "35px" }}>
      {ResultValue}
    </Tabs> 
  )
};


const About = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 18px;
  line-height: 50px;
`

export default Result;
