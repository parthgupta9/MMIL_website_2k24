import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { Header } from "./Header";
import OrangeSphere from "../src/assets/OrangeSphere.svg";
import BlueSphere from "../src/assets/BlueSphere.svg";
import PurpleSphere from "../src/assets/PurpleSphere.svg";

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

const SphereContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img:nth-child(1) {
    position: absolute;
    top: 31vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vh;
    z-index: 10;
  }

  img:nth-child(2) {
    position: absolute;
    top: 51vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vh;
    z-index: 9;
  }

  img:nth-child(3) {
    position: absolute;
    top: 71vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vh;
    z-index: 8;
  }

  @media (max-width: 430px) {
    img:nth-child(1),
    img:nth-child(2),
    img:nth-child(3) {
      position: absolute;
      width: 100%;
      height: 90vh;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img:nth-child(1) {
top: 34vh;
    }

    img:nth-child(2) {
      top: 45vh;
    }

    img:nth-child(3) {
      top: 57vh;
    }
  }
`;

const Text = styled.div`
  text-align: center;
  color: white;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  @media (max-width: 430px) {
    top: 37%;
    width: 90%;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    top: 45%;
    width: 80%;
  }
`;

const Greeting = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  font-weight: 500;

  @media (max-width: 430px) {
    font-size: 4rem;
    margin-top: 20vh;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 4.5rem;
    margin-top: 15vh;
  }
`;

const SubText = styled.p`
  font-size: 4rem;
  margin: 5px 0;

  @media (max-width: 430px) {
    font-size: 4.5rem;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 4.5rem;
    margin-top: 2vh;
  }
`;

const Title = styled.h2`
  font-family: "Lato", serif;
  font-size: 8.75rem;
  font-weight: 900;
  margin: 10px 0;

  @media (max-width: 430px) {
    font-size: 6rem;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 7rem;
    font-weight: 800;
    margin-top: 3vh;
  }
`;

const Motto = styled.div`
  display: flex;
  justify-content: center;
  gap: 10vh;
  margin-top: 40px;

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 5vh;
  }
  @media (min-width: 600px) and (max-width: 1024px) {
    gap: 5vw;
    flex-direction: row;
  }
`;

const MottoText = styled.span`
  transform: translateY(-10px);
  font-size: 2.25rem;
  font-weight: bold;
  color: rgba(233, 169, 250, 1);
  text-shadow: 0 0 5px #6b6bff, 0 0 10px #6b6bff, 0 0 20px #6b6bff,
    0 0 40px #6b6bff;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffffff;
  }

  @media (max-width: 430px) {
    font-size: 2.5rem;
    transform: translateY(0);
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 2.75rem;
    transform: translateY(0);
  }
`;

export const Hero = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Add mobile-specific animations
    mm.add("(max-width: 430px)", () => {
      const tl = gsap.timeline();
      tl.fromTo(
        "#SphereContainer img",
        {
          y: "-150vh",
          opacity: 0,
        },
        {
          y: "-29vh",
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          // ease: "power2.inOut",
        },
        "Sphere"
      );
      tl.from(
        "#text",
        {
          opacity: 0,
          y: -150,
          delay: 0.9,
          duration: 1,
          // ease: "power2.inOut",
        },
        "Sphere"
      );
      tl.from("#text #motto span", {
        opacity: 0,
        y: -40,
        stagger: 0.3,
        ease: "bounce.out",
      });
    });

    // Add tablet-specific animations
    mm.add("(min-width: 431px) and (max-width: 1024px)", () => {
      const tl = gsap.timeline();
      tl.fromTo(
        "#SphereContainer img",
        {
          y: "-150vh",
          opacity: 0,
        },
        {
          y: "-29vh",
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          // ease: "power2.inOut",
        },
        "Sphere"
      );
      tl.from(
        "#text",
        {
          opacity: 0,
          y: -150,
          delay: 0.9,
          duration: 1,
          // ease: "power2.inOut",
        },
        "Sphere"
      );
      tl.from("#text #motto span", {
        opacity: 0,
        y: -40,
        stagger: 0.3,
        ease: "bounce.out",
      });
    });

    // Add desktop-specific animations
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline();
      tl.fromTo(
        "#SphereContainer img",
        {
          y: "-150vh",
          opacity: 0,
        },
        {
          y: "-29vh",
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          // ease: "power2.inOut",
        },
        "Sphere"
      );
      tl.from(
        "#text",
        {
          opacity: 0,
          y: -150,
          delay: 0.9,
          duration: 1,
          // ease: "power2.inOut",
        },
        "Sphere"
      );
      tl.from("#text #motto span", {
        opacity: 0,
        y: -40,
        stagger: 0.3,
        ease: "bounce.out",
      });
    });

    return () => mm.revert(); // Clean up GSAP animations on component unmount
  }, []);

  return (
    <>
      <Header />
      <HeroSection>
        <SphereContainer id="SphereContainer">
          <img src={OrangeSphere} alt="" />
          <img src={BlueSphere} alt="" />
          <img src={PurpleSphere} alt="" />
        </SphereContainer>
        <Text id="text">
          <Greeting>HELLO,</Greeting>
          <SubText>We are</SubText>
          <Title>MMIL</Title>
          <Motto id="motto">
            <MottoText>INVENT</MottoText>
            <MottoText>INSPIRE</MottoText>
            <MottoText>INNOVATE</MottoText>
          </Motto>
        </Text>
      </HeroSection>
    </>
  );
};
