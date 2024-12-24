import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import styled from "styled-components";
import Hr from "../src/assets/hr5.svg";
import ellipse from "../src/assets/Ellipse 60.svg";
import hr5icon from "../src/assets/hr5icon.svg";

const OurEventsContainer = styled.section`
  position: relative;
  text-align: center;
  overflow: hidden;
  color: white;
  padding: 40px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 8vh;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  margin-bottom: 40px;
  margin-top: 200px;
`;


const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0px;
  row-gap: 4vh;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    row-gap: 20px;
  }
`;

const EventCard = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 55vh;

  ${({ variant }) =>
    variant === "deencode" &&
    `
      grid-column: 1;
      grid-row: 1;
      margin: 0 auto;
      transform: translateX(22vh);

      @media (max-width: 768px) {
        transform: none; 
        margin: 0;
        width: 90%; 
      }

      @media (max-width: 480px) {
        width: 100%; 
        transform: none; 
        margin: 0;
      }
    `}

  ${({ variant }) =>
    variant === "hackocode" &&
    `
      grid-column: 1;
      grid-row: 2;
      transform: translateX(24vh);
      margin: -4vh auto;

      @media (max-width: 768px) {
        transform: none;
        margin: 0;
        width: 90%;
      }

      @media (max-width: 480px) {
        width: 100%;
        transform: none; 
        margin: 0;
      }
    `}

  ${({ variant }) =>
    variant === "logocon" &&
    `
      grid-column: 2;
      grid-row: 1;
      transform: translateX(-20vh);
      margin: 0 auto;

      @media (max-width: 768px) {
        transform: none;
        margin: 0;
        width: 90%;
      }

      @media (max-width: 480px) {
        width: 100%;
        transform: none; 
        margin: 0;
      }
    `}

  ${({ variant }) =>
    variant === "valorant" &&
    `
      grid-column: 2;
      grid-row: 2;
      margin-top: -140px;
      transform: translateX(-20vh);
      margin: -39vh auto;

      @media (max-width: 768px) {
        transform: none;
        margin: 0;
        width: 90%;
      }

      @media (max-width: 480px) {
        width: 100%;
      }
    `}
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const CirclesLeft = styled.div`
  position: absolute;
  width: 60%;
  left: -27%;
  top: 0;
`;

const CirclesRight = styled.div`
  position: absolute;
  width: 60%;
  right: -27%;
  top: 50%;
`;

const HRandIcons = styled.div`
  display: flex;
  position: absolute;
  right: 0;

  & > img:nth-child(3) {
    position: absolute;
    right: 0;
  }
`;
export const OurEvents = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".events-container",
        scroller: "body",
        start: "top 50%",
        end: "top -60%",
        // markers: true,
        scrub: 3,
      },
    });

    tl.from(
      ".circlesLeft",
      {
        opacity: 0,
        x: -20,
        scale: 0.5,
        rotation: -60,
        ease: "power2.Out",
      },
      "abc"
    ),
      tl.from(
        ".hrIcons",
        {
          x: 50,
          clipPath: "inset(0 0 0 100%)",
          ease: "power2.out",
          duration: 1.5,
        },
        "abc"
      );
    tl.from(
      ".deencode",
      {
        opacity: 0,
        y: -200,
        ease: "power2.inOut",
      },
      "anim"
    ),
      tl.from(
        ".logocon",
        {
          opacity: 0,
          x: 200,
          ease: "power2.inOut",
        },
        "anim"
      ),
      tl.from(
        ".hackocode",
        {
          opacity: 0,
          x: -200,
          ease: "power2.inOut",
        },
        "anim"
      ),
      tl.from(
        ".valorant",
        {
          opacity: 0,
          y: 200,
          ease: "power2.inOut",
        },
        "anim"
      ),
      tl.from(".circlesRight", {
        opacity: 0,
        x: 20,
        scale: 0.5,
        rotation: 60,
        ease: "power2.Out",
      });
  });
  return (
    <OurEventsContainer className="events-container">
      <CirclesLeft className="circlesLeft">
        <img src="public/Frame 427318247.png" className="circle-left-image" />
      </CirclesLeft>
      <HRandIcons className="hrIcons">
        <img src={Hr} alt="" />
        <img src={ellipse} alt="" />
        <img src={hr5icon} alt="" />
      </HRandIcons>
      <Title>Our Events</Title>
      <EventGrid>
        <EventCard variant="deencode" className="deencode">
          <a href="https://www.youtube.com" className="event-link">
            <EventImage src="/Frame 427318180.png" />
          </a>
        </EventCard>
        <EventCard variant="logocon" className="logocon">
          <a href="https://www.youtube.com" className="event-link">
            <EventImage src="/logocon post 1.png" />
          </a>
        </EventCard>
        <EventCard variant="hackocode" className="hackocode">
          <a href="https://www.youtube.com" className="event-link">
            <EventImage src="/final pls 1.png" />
          </a>
        </EventCard>
        <EventCard variant="valorant" className="valorant">
          <a href="https://www.youtube.com" className="event-link">
            <EventImage src="/Valorent flex 1.png" />
          </a>
        </EventCard>
        <CirclesRight className="circlesRight">
          <img src="/Frame 427318248.png" className="circle-right-image" />
        </CirclesRight>
      </EventGrid>
    </OurEventsContainer>
  );
};
