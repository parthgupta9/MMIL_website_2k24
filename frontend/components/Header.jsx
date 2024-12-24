import React, { useState } from "react";
import styled from "styled-components";
import mmilLogo from "../src/assets/mmilLogo.svg";

const Logo = styled.div`
  display: inline-block;
  position: absolute;
  left: 2vh;
  top: 2vh;
  z-index: 10000;

  img {
    width: 100px; /* Default size */
    height: auto;
  }

  @media (max-width: 768px) {
    left: 2vh;
    top: 1vh;
    img {
      width: 90px;
    }
  }

  @media (max-width: 480px) {
    left: 2vh;
    top: 1vh;
    img {
      width: 80px;
    }
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 6px 10vh;
  border: 1px solid rgba(239, 236, 253, 1);
  width: 60%;
  top: 12vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  @media (max-width: 768px) {
    border: none;
    width: 80%;
    padding: 6px 5vh;
    top: 7vh;
  }

  @media (max-width: 480px) {
    border: none;
    width: 90%;
    padding: 6px 3vh;
    top: 7vh;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10vh;
  width: 100%;

  @media (max-width: 768px) {
    display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 3vh;
    align-items: flex-start;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.625rem;
  cursor: pointer;
  transition: text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem;
    text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  z-index: 10001;

  div {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 5px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 2vh;
    right: 2vh;
  }
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["About", "Team", "Projects", "Contacts"];

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); 
  };

  return (
    <>
      <Logo>
        <img src={mmilLogo} alt="Logo" />
      </Logo>
      <BurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerMenu>
      <HeaderContainer>
        <Nav $isMenuOpen={isMenuOpen}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              onClick={() => handleScrollToSection(item.toLowerCase())}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
      </HeaderContainer>
    </>
  );
};
