import React, { useState } from "react";
import styled from "styled-components";

function Nav() {
  const [navColor, setnavColor] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200 && !navColor) {
      setnavColor(true);
    }

    if (window.scrollY < 200 && navColor) {
      setnavColor(false);
    }
  });

  const [menu, setMenu] = useState(false);

  const Header = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: ${navColor ? "white" : "transparent"};
    ${navColor && "box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px"};
    color: ${navColor ? "black" : "white"};

    @media only screen and (max-width: 768px) {
      background: #3C9EFF;
    }
  `;

  const NavBar = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    > div {
      padding: 24px;
      font-size: 24px;
      color: ${navColor ? "#3C9EFF" : "white"};
    }

    @media only screen and (max-width: 768px) {
      > div {
        padding: 0 12px;
        line-height: 80px;
        color: white;
      }
    }
  `;

  const NavUl = styled.ul`
    display: flex;
    padding: 24px;
    margin: 0;
    > li {
      list-style: none;
      margin-left: 24px;
      font-size: 18px;
      position: relative;
      cursor: pointer;

      ::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${navColor ? "#000" : "#fff"};
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out 0s;
      }

      &:hover::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }

    @media only screen and (max-width: 768px) {
      position: absolute;
      top: 100%;
      left: 0;
      background: #fff;
      display: ${menu ? "flex" : "none"};
      align-content: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      overflow: hidden;
      padding: 24px 0;

      > li {
        color: #000;
        padding: 12px 0;
        text-transform: uppercase;
        width: 60px;
        margin-left: 96px;
        position: relative;

        animation-duration: 3s;
        animation-name: slidein;

        &:last-child {
          width: 120px;
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
          transition: all 0.3s ease-in-out 0s;
        }

        &:hover::before {
          visibility: visible;
          transform: scaleX(1);
        }

        @keyframes slidein {
          from {
            top: 0;
          }

          to {
            top: 100%;
          }
        }
      }
    }
  `;

  return (
    <Header>
      <NavBar>
        <div>FooDrink</div>
        <MenuBtn
          onClick={() => {
            if (!menu) {
              setMenu(true);
            } else {
              setMenu(false);
            }
          }}
        >
          <span />
          <span />
          <span />
        </MenuBtn>
        <NavUl>
          <li>Home</li>
          <li>Start</li>
          <li>About</li>
          <li>Contact Us</li>
        </NavUl>
      </NavBar>
    </Header>
  );
}

const MenuBtn = styled.button`
  display: none;

  @media only screen and (max-width: 768px) {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 0;
    border: none;
    background: none;
    position: relative;
    margin-top: 15px;
    outline: none;
  }

  > span {
    width: 30px;
    height: 4px;
    background: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  > span::before,
  span::after {
    width: 30px;
    height: 4px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    content: "";
  }

  > span::before {
    top: -10px;
  }

  > span::after {
    top: 10px;
  }
`;

export default Nav;
