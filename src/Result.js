import React, { useState } from "react";
import styled from "styled-components";
import drink from "./json/drink.json";

const Result = () => {
  const [resultValue, setresultValue] = useState(0);
  const ResultDrink = drink.map((drink) => {
    const beerType = drink.beerType.map((beerType) => {
      return (
        <div style={beerTypeStyle}>
          <p>{beerType.about}</p>
          <p>{beerType.pairing}</p>
        </div>
      );
    });
    const beerTypeList = drink.beerTypeName.map((beerTypeList) => {
      const checkValue = () => {
        const beerValue = document.getElementsByName("beer");
        for (let i = 0; i < beerValue.length; i++) {
          if (beerValue[i].checked === true) {
            setresultValue(i);
            
          }
        }
        if(beerValue.checked) {
          beerValue.style.fontWeight = "bold";
        }
      };

      return (
        <label>
          <input
            type="radio"
            name="beer"
            value={beerTypeList.name}
            onClick={checkValue}
          />
          {beerTypeList.name}
        </label>
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
  return <div>{ResultDrink}</div>;
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

  img {
    width: 600px;
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
`;

const BeerList = styled.label`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > label {
    margin: 40px;
    padding: 5px 15px;
    font-size: 24px;
    position: relative;
    &:hover {
      font-weight: bold;
    }
    &:checked {
      font-weight: bold;
    }

    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #000;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.2s ease-in-out 0s;
    }

    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  > label > input {
    display: none;
  }
`;

const beerTypeStyle = {
  lineHeight: "50px",
  padding: "30px",
  textAlign: "center"
}

export default Result;
