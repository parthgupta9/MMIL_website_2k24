import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import styled from "styled-components";

const Section = styled.div``;

const Container = styled.div`
  margin-top: 50px;
  position: relative;
`;

const Title = styled.div`
  color: white;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  text-align: center;
  font-size: 8vh;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 6vh;
  }

  @media (max-width: 768px) {
    font-size: 5vh;
  }

  @media (max-width: 480px) {
    font-size: 4vh;
  }
`;

const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
  place-items: center;
  padding: 40px 40px;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const ClubCard = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px; /* Ensuring equal height */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  transition: box-shadow 0.3s ease;
  background: ${({ bg }) => bg};

  &:hover {
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.4);
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
  word-break: break-word;
`;

const CardText = styled.p`
  color: white;
  text-align: center;
  font-weight: 100;
`;

const ExploreButton = styled.button`
  cursor: pointer;
  padding: 10px 24px;
  font-size: 18px;
  color: rgb(255, 20, 147);
  border: 2px solid rgb(255, 20, 147);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: rgb(255, 20, 148);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover::before {
    scale: 3;
  }

  &:hover {
    color: #ffffff;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(255, 20, 147, 0.4);
  }

  &:active {
    scale: 1;
  }
`;

const Text1 = styled.div`
  color: white;
  position: relative;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px; /* Increased gap between Text1 and ClubGrid */
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Text2 = styled.div`
  color: white;
  position: relative;
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

function Clubs() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-clubs",
        scroller: "body",
        start: "top 40%",
        end: "top 5%",
        scrub: 3,
      },
    });
    tl.from(".one", { x: -120, opacity: 0 }, "anim")
      .from(".two", { y: -230, opacity: 0 }, "anim")
      .from(".three", { y: 230, opacity: 0 }, "anim")
      .from(".four", { x: 120, opacity: 0 }, "anim");
  }, []);

  return (
    <Section id="about">
      <Container className="our-clubs">
        <Title>Our Clubs</Title>
        <Text1>
          <ul>
            <li>Innovate, Create, Inspire</li>
            <li>Code the Future</li>
          </ul>
        </Text1>
        <ClubGrid>
          <ClubCard className="one" bg="linear-gradient(to bottom, #550d62, #27032d)">
            <CardTitle>WEB DEV</CardTitle>
            <CardText>
              Unveil the creativity behind our web development projects, where
              we build dynamic and user-friendly websites and applications.
            </CardText>
            <ExploreButton>Explore</ExploreButton>
          </ClubCard>
          <ClubCard className="two" bg="linear-gradient(to bottom, #1f0749, #27032d)">
            <CardTitle>DESIGN</CardTitle>
            <CardText>
              Explore cutting-edge projects and innovative solutions crafted by
              our talented team of designers in the Technical Society.
            </CardText>
            <ExploreButton>Explore</ExploreButton>
          </ClubCard>
          <ClubCard className="three" bg="linear-gradient(to bottom, #550d62, #27032d)">
            <CardTitle>PROGRAMMING</CardTitle>
            <CardText>
              Dive into our programming initiatives, where coding enthusiasts
              develop powerful software and drive technological advancements.
            </CardText>
            <ExploreButton>Explore</ExploreButton>
          </ClubCard>
          <ClubCard className="four" bg="linear-gradient(to bottom, #2941d8, #27032d)">
            <CardTitle>ANDROID</CardTitle>
            <CardText>
              Discover our Android development endeavors, showcasing innovative
              apps and solutions for mobile technology.
            </CardText>
            <ExploreButton>Explore</ExploreButton>
          </ClubCard>
        </ClubGrid>
        <Text2>
          <ul>
            <li>Crafting the Next Generation of Mobile Solutions</li>
            <li>Building Dynamic and Engaging Web Experiences</li>
          </ul>
        </Text2>
      </Container>
    </Section>
  );
}

export default Clubs;
