import React from "react";
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

  /* For tablets */
  @media (max-width: 768px) {
    width: 80%;
    padding: 6px 5vh;
    top: 15vh; 
  }

  /* For mobile */
  @media (max-width: 480px) {
    width: 90%;
    padding: 6px 3vh;
    top: 20vh; /* Adjust for mobile, move it further down */
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10vh;
  width: 100%;

  /* For tablets */
  @media (max-width: 768px) {
    gap: 5vh; /* Decrease gap on tablets */
  }

  /* For mobile */
  @media (max-width: 480px) {
    flex-direction: column; /* Stack nav items vertically on mobile */
    gap: 2vh; /* Reduce gap for mobile */
    width: 100%;
    align-items: flex-start;
  }
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.625rem;
  cursor: pointer;

  /* For tablets */
  @media (max-width: 768px) {
    font-size: 1.375rem; /* Reduce font size on tablets */
  }

  /* For mobile */
  @media (max-width: 480px) {
    font-size: 1.125rem; /* Further reduce font size on mobile */
  }
`;

export const Header = () => {
  const navItems = ["About", "Team", "Projects", "Contacts"];

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Logo>
        <img src={mmilLogo} alt="Logo" />
      </Logo>
      <HeaderContainer>
        <Nav>
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
