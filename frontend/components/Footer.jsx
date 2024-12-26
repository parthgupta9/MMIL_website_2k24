import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const FooterContainer = styled.footer`
  max-width: 1200px; 
  width: 100%;
  padding: 2rem;
  margin: 0 auto; 
  display: flex;
  justify-content: space-evenly; 
  gap: 2rem;
  text-align: center;
  font-family: "Ubuntu", serif;
  color: #eeeeef;
  box-sizing: border-box; 
  padding-bottom: 10vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start; 
  flex: 1; 

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const SectionTitle = styled.h3`
  font-family: "Ubuntu", serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 1.34rem;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: -0.1rem;
  text-align: left;
  text-decoration-line: underline;
  text-decoration-style: solid;
  color: #efecfd;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 9px;

  a {
    font-size: 2.2rem;
    text-decoration: none;
    color: #efecfd;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Details = styled.div`
  font-size: 1.34rem;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: -0.1rem;
  text-align: left;
  text-decoration-line: underline;
  text-decoration-style: solid;

  p {
    margin: 5px 0;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Section >
        <img
          src="logo.png"
          alt="Microsoft Mobile Innovation Lab"
          style={{ width: "18vw", height: "auto", maxHeight: "108px" }}
        />
        <SectionTitle style={{ color: "#f6e1fd" }}>
          MMIL is a
          <br />
          Technical Society
        </SectionTitle>
      </Section>

      <Section>
        <SectionTitle>About us</SectionTitle>
        <List>
          <ListItem>
            <a href="/mmil">MMIL</a>
          </ListItem>
          <ListItem>
            <a href="/team">Team</a>
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Useful Resources</SectionTitle>
        <List>
          <ListItem>
            <a href="/projects">Projects</a>
          </ListItem>
          <ListItem>
            <a href="/events">Events</a>
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Let's Talk</SectionTitle>
        <SocialLinks>
          <a href="https://www.linkedin.com/company/mmil/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/jssmmil?igsh=NnNzbmhhNGdsdHNl">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/jssmmil">
            <FaFacebook />
          </a>
        </SocialLinks>
        <Details>
          <p>
            Email: <a href="mailto:mmiljss@gmail.com">mmiljss@gmail.com</a>
          </p>
          <p>Phone: +91</p>
        </Details>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
