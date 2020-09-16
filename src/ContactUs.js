import React from "react";
import styled from "styled-components";
import ContactUsForm from "./ContactUsForm";
import { useState } from "react";

function ContactUs() {
  const [CUform, setCUform] = useState(false);

  return (
    <div>
      <ContactUsSection
        onClick={() => {
          if (!CUform) {
            setCUform(true);
            console.log(CUform);
          } else {
            setCUform(false);
            console.log(CUform);
          }
        }}
      >
        <p>Contact Us</p>
        <DownArow />
      </ContactUsSection>
      {CUform && <ContactUsForm />}
    </div>
  );
}

const ContactUsSection = styled.section`
  width: 100%;
  height: 150px;
  background-color: #3C9EFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  position:relative;
  z-index: 10;
`;

const DownArow = styled.span`
  width: 24px;
  height: 24px;
  margin-top: 20px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
  -webkit-animation: ArowAnimation 2s infinite;
  animation: ArowAnimation 2s infinite;

  @-webkit-keyframes ArowAnimation {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      -webkit-transform: rotate(-45deg) translate(-5px, 5px);
    }
    40% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
    }
  }
  @keyframes ArowAnimation {
    0% {
      transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      transform: rotate(-45deg) translate(-5px, 5px);
    }
    40% {
      transform: rotate(-45deg) translate(0, 0);
    }
  }
`;

export default ContactUs;
