import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import styled from "styled-components";

const Section = styled.div``

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
`;

const ClubGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  grid-gap: 20px 20px;
  place-items: center;
  padding: 80px 80px 0 80px;
`;

const ClubCard = styled.div.attrs(({ className }) => ({
  className,
}))`
  width: 25vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px 30px 15px 30px;
  position: relative;
  transition: box-shadow 0.3s ease;

  &.one {
    grid-row: 1/3;
    background: linear-gradient(to bottom, #550d62, #27032d);
  }

  &.two {
    grid-row: 1/2;
    grid-column: 2/3;
    background: linear-gradient(to bottom, #1f0749, #27032d);
  }

  &.three {
    grid-row: 2/3;
    grid-column: 2/3;
    background: linear-gradient(to bottom, #550d62, #27032d);
  }

  &.four {
    grid-row: 1/3;
    background: linear-gradient(to bottom, #2941d8, #27032d);
  }

  &:hover {
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.4);
  }
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  text-align: center;
  z-index: 2;
  word-break: break-word;
`;

const CardText = styled.p`
  color: white;
  text-align: center;
  font-weight: 100;
  z-index: 2;
`;

const BackElem1 = styled.img`
  position: absolute;
  z-index: 1;
  right: 5px;
  top: 5px;
`;
const BackElem2 = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 20px;
`;
const BackElem3 = styled.img`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
`;
const BackElem4 = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 20px;
`;
const BackElem5 = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 40px;
`;
const BackElem6 = styled.img`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
`;
const BackElem7 = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 10px;
`;
const BackElem8 = styled.img`
  position: absolute;
  z-index: 1;
  right: 30px;
  bottom: 0;
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
  overflow: hidden;
  z-index: 2;

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

// const TextGrid= styled.div`
//   display: grid;
//   grid-gap: 300px 500px;
//   grid-template-rows: 1fr 1fr;
//   grid-template-columns: 1fr 1fr;
//   position: absolute;
//   top:0;
//   margin-left: 150px;
//   margin-top: 200px;
// `

const Text1 = styled.p`
  color: white;
  position: absolute;
  left: 10vw;
  top: 150px;
  line-height: 40px;
  width: 25vw;
`;
const Text2 = styled.p`
  color: white;
  position: absolute;
  right: 5vw;
  bottom: 0.1vw;
  line-height: 40px;
  width: 25vw;
`;

function Clubs() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-clubs",
        scroller: "body",
        start: "top 40%",
        end: "top 5%",
        // markers: true,
        scrub: 3,
      },
    });
    tl.from(
      ".one",
      {
        x: -120,
        opacity: 0,
      },
      "anim"
    );
    tl.from(
      ".two",
      {
        y: -230,
        opacity: 0,
      },
      "anim"
    );
    tl.from(
      ".three",
      {
        y: 230,
        opacity: 0,
      },
      "anim"
    );
    tl.from(
      ".four",
      {
        x: 120,
        opacity: 0,
      },
      "anim"
    );
  }, []);

  return (
    <Section id="about">
      <Container className="our-clubs">
        <Title>Our Clubs</Title>
        <ClubGrid>
          <ClubCard className="one">
            <BackElem1 src="/Vector 1.svg" />
            <BackElem2 src="/Vector 2.svg" />
            <CardTitle>WEB DEV</CardTitle>
            <CardText>
              Unveil the creativity behind our web development projects, where
              we build dynamic and user-friendly websites and applications
            </CardText>
            <ExploreButton>Explore</ExploreButton>
          </ClubCard>
          <ClubCard className="two">
            <BackElem3 src="/Vector 3.svg" />
            <BackElem4 src="/Vector 4.svg" />
            <CardTitle>DESIGN</CardTitle>
            <CardText>
              Explore cutting-edge projects and innovative solutions crafted by
              our talented team of designers in the Technical Society
            </CardText>
            <ExploreButton>Explore</ExploreButton>
          </ClubCard>
          <ClubCard className="three">
            <BackElem5 src="/Vector 5.svg" />
            <BackElem6 src="/Vector 6.svg" />
            <CardTitle>PROGRAMMING</CardTitle>
            <CardText>
              Dive into our programming initiatives, where coding enthusiasts
              develop powerful software and drive technological advancements
            </CardText>
            <ExploreButton>Explore</ExploreButton>
          </ClubCard>
          <ClubCard className="four">
            <BackElem7 src="/Vector 7.svg" />
            <BackElem8 src="/Vector 8.svg" />
            <CardTitle>ANDROID</CardTitle>
            <CardText>
              Discover our Android development endeavors, showcasing innovative
              apps and solutions for mobile technology
            </CardText>
            <ExploreButton>Explore</ExploreButton>
          </ClubCard>
        </ClubGrid>
        <Text1>
          <ul>
            <li>Innovate, Create, Inspire</li>
            <li>Code the Future</li>
          </ul>
        </Text1>
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