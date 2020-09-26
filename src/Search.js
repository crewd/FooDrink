import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [openBox, setBox] = useState(false);
  const [searchValue, setsearchValue] = useState("");

  const DropdownBox = styled.div`
    box-shadow: inset 0 1px 10px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding: 20px;
    display: ${openBox ? "block" : "none"};
    position: absolute;
    width: calc(100% - 40px);
    text-align: left;
  `;

  const beerText = ["맥","맥ㅈ", "맥주"];
  const sojuText = ["소", "소ㅈ","소주"];
  const makgeolliText = ["막", "막ㄱ", "막거", "막걸", "막걸ㄹ", "막걸리"];

  const inputSearch = (e) => {
    const value = e.target.value;
    value ? setBox(true) : setBox(false);

    if (beerText.includes(value)) {
      setsearchValue("맥주");
    } else if (sojuText.includes(value)) {
      setsearchValue("소주");
    } else if (makgeolliText.includes(value)) {
      setsearchValue("막걸리");
    }
     else {
      setsearchValue("검색 결과가 없습니다.");
    }
  };
    
    

  return (
    <Container>
      <div>
        <SearchTitle>FooDrink</SearchTitle>
        <InputForm>
          <input
            type="text"
            id="searchInput"
            onChange={inputSearch}
            placeholder="술 혹은 음식을 입력하세요"
          />
          <DropdownBox id="dropdownBox">{searchValue}</DropdownBox>
        </InputForm>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #3c9eff;
  padding: 100px 0;
  text-align: center;
`;

const SearchTitle = styled.p`
  font-size: 48px;
  color: white;
  font-weight: bold;
`;

const InputForm = styled.div`
  padding: 50px 0;
  position: relative;
  > input {
    padding: 20px;
    outline: none;
    border: none;
    width: 500px;
    font-size: 18px;
  }
`;

export default Search;
