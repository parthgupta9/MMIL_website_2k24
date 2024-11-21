import React from "react";
import styled from "styled-components";
import mmilLogo from "../src/assets/mmilLogo.svg";

const Logo = styled.div`
  display: inline-block;
  position: absolute;
  left: 4.5vh;
  top: 2vh;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  padding: 6px 10vh;
  border: 1px solid rgba(239, 236, 253, 1);
  width: 60%;
  top: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10vh;
  width: 100%;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.625rem;
`;

export const Header = () => {
  const navItems = ["About", "Team", "Projects", "Contacts"];

  return (
    <>
      <Logo>
        <img src={mmilLogo} alt="Logo" />
      </Logo>
      <HeaderContainer>
        <Nav>
          {navItems.map((item, index) => (
            <NavItem href={`#${item.toLowerCase()}`} key={index}>
              {item}
            </NavItem>
          ))}
        </Nav>
      </HeaderContainer>
    </>
  );
};
