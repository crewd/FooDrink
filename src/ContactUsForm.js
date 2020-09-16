import React from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';

function ContactUsForm() {

  return (
    <CUform>
      <p>이름</p>
      <InputText maxLength="20"/>
      <p>이메일</p>
      <InputEmail />
      <p>제목</p>
      <InputText/>
      <p>내용</p>
      <TextArea />
      <button>문의 하기</button>
    </CUform>
  );
}

const CUform = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 50px 0;
  >p {
    width: 515px;
    font-weight: bold;
    font-size: 18px;
  }
  >button {
    width: 200px;
    height: 70px;
    background-color: #3C9EFF;
    border: none;
    border-radius: 10px;
    color: white;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
  animation: formAnimation 1s;
  animation-fill-mode: backwards;


  @keyframes formAnimation {
    0%  {
      transform: translate(0, -150px);
      opacity: 0;
    }
    
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

const InputText = styled.input.attrs({ type: 'text' })`
  width: 500px;
  padding: 15px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid #858585;
  outline: none;
`

const InputEmail = styled.input.attrs({ type: 'email' })`
  width: 500px;
  padding: 15px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid #858585;
  outline: none;
`

const TextArea = styled.textarea`
  resize: none;
  width: 500px;
  height: 200px;
  padding: 15px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid #858585;
  outline: none;
`

export default ContactUsForm;
