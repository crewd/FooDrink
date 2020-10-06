import React, { useState } from "react";
import styled from "styled-components";
import drink from "../json/drink.json"; 
import { Tabs } from 'antd';
import Result from "../result/Result";


const Search = () => {
  const [openBox, setBox] = useState(false);
  const [searchAuto, setsearchAuto] = useState("");
  const [searchComponent, setSearchComponent] = useState(false);
  const [ searchValue, setSearchValue ] = useState("");

  const DropdownBox = styled.div`
    box-shadow: inset 0 1px 10px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding: 20px;
    display: ${openBox ? "block" : "none"};
    position: absolute;
    width: 400px;
    text-align: left;
    font-size: 18px;
    cursor: pointer;
  `;

  const beerText = ["맥", "맥ㅈ", "맥주"];
  const sojuText = ["소", "소ㅈ", "소주"];
  const makgeolliText = ["막", "막ㄱ", "막거", "막걸", "막걸ㄹ", "막걸리"];

  const inputSearch = (e) => {
    const value = e.target.value;
    value ? setBox(true) : setBox(false);

    if (beerText.includes(value)) {
      setsearchAuto("맥주");
    } else if (sojuText.includes(value)) {
      setsearchAuto("소주");
    } else if (makgeolliText.includes(value)) {
      setsearchAuto("막걸리");
    }
    else {
      setBox(false);
      setsearchAuto("검색 결과가 없습니다.");
    }

    if(!value) {
      setSearchComponent(false);
    }
  };

  const search = () => {
    setSearchComponent(true);
    setSearchValue(searchAuto);
    console.log(searchComponent);
  }

  const enterkey = () => {
    if (window.event.keyCode === 13) {
      search();
    }
  }

  console.log(searchValue);
  console.log(searchAuto)

  return (
    <section>
      <Container>
        <div>
          <SearchTitle>FooDrink</SearchTitle>
          <InputForm>
            <input
              type="text"
              id="searchInput"
              onChange={inputSearch}
              placeholder="술 혹은 음식을 입력하세요"
              autocomplete='off'
              onKeyUp={enterkey}
            />
            <DropdownBox onClick={search} id="dropdownBox">{searchAuto}</DropdownBox>
            <SearchButton onClick={search}>검색</SearchButton>
          </InputForm>
          
        </div>
      </Container>
      <ResultContainer>
        {searchComponent && 
          <div>
            <p>{searchValue}</p>
              {openBox && <Result value={searchAuto} /> }
          </div>
        }
        
      </ResultContainer>
    </section>
  );
};


const ResultContainer = styled.div `
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  >div >p {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0;
  }
`

const Container = styled.div`
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
    width: 400px;
    font-size: 18px;
  }
`;

const SearchButton = styled.button `
  width: 70px;
  height: 70px;
  font-weight: bold;
  font-size: 21px;
  margin: 0;
  border: 1px solid #fff;
  position: absolute;
  right: 0;
  background-color: #3c9eff;
  color: #fff;
  outline: none;
  cursor: pointer;
`

export default Search;
