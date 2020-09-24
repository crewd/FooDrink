import React, { useState } from "react";
import styled from "styled-components";
import drink from "../json/drink.json";

const Result = () => {
  const [resultValue, setresultValue] = useState(0);
  const image = require("../json/food.json")
  const ResultDrink = drink.map((drink) => {
    const beerType = drink.beerType.map((beerType) => {
      return (
        <div style={beerTypeStyle}>
          <p>{beerType.about}</p>
          <p>{beerType.pairing}</p>
          <ResultImg src={beerType.image} />
        </div>
      );
    });
    const beerTypeList = drink.beerTypeName.map((beerTypeList) => {
      const checkValue = () => {
        const beerValue = document.getElementsByName("beer");
        const beerLabel = document.getElementsByName("beerLabel");
        for (let i = 0; i < beerValue.length; i++) {
          if (beerValue[i].checked === true) {
            setresultValue(i);
            beerLabel[i].style.borderBottom = "2px solid #000"
          } else {
            beerLabel[i].style.borderBottom = "none"
          }
        }
      };

      return (
        <BeerLabel name="beerLabel">
          <BeerRadio
            name="beer"
            id="RadioBeer"
            value={beerTypeList.name}
            onClick={checkValue}
          />
          {beerTypeList.name}
        </BeerLabel>
      );
    });

    return (
      <ResultValue key={drink.id}>
        <div>
          <h1>{drink.name}</h1>
          <BeerList>{beerTypeList}</BeerList>
          {beerType[resultValue]}
          {resultValue}
        </div>
      </ResultValue>
    );
  });
  return <div>{ResultDrink[0]}</div>;
};

const ResultValue = styled.div`
  width: 100%;

  > div {
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }

  > h1 {
    font-size: 36px;
  }

`;

const BeerList = styled.label`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BeerLabel = styled.label`
  margin: 30px;
  padding: 5px 15px;
  font-size: 24px;
  position: relative;
  &:hover {
    font-weight: bold;
  }
  
`;

const beerTypeStyle = {
  lineHeight: "50px",
  padding: "30px",
  textAlign: "center",
};

const BeerRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const ResultImg = styled.img`
  width: 400px;
  padding: 50px;
`

export default Result;
