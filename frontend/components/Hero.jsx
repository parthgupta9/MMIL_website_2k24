import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
    top: 51vh;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width:68%;
  }

  img:nth-child(2) {
    position: absolute;
    top: 71vh;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    width:68%;
  }

  img:nth-child(3) {
    position: absolute;
    top: 91vh;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 8;
    width:68%;
  }
     @media (max-width: 430px) {
    
    
    /* Reduce the size of the images */
    img:nth-child(1),
    img:nth-child(2),
    img:nth-child(3) {
    position:absolute;
   width: 100%; /* Scale images to full width */
      height: 90vh; /* Set height to 90% of the viewport height */
       /* Set position */
      left: 50%;
      transform: translate(-50%, -50%);
    }
        img:nth-child(1) {
      top: 70vh; /* Adjust position for smaller screens */
      
    }

    img:nth-child(2) {
      top: 85vh; /* Adjust position for smaller screens */

    }

    img:nth-child(3) {
      top: 100vh; /* Adjust position for smaller screens */
      
}}

    
`;



// Text container with centralized position
const Text = styled.div`
  text-align: center;
  color: white;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  /* Media Query for small screens */
  @media (max-width: 430px) {
    top: 50%;  /* Adjust vertical position */
    width: 90%; /* Ensure content is inside the screen width */
  }
    /* Media Query for tablet screens */
  @media (min-width: 600px) and (max-width: 1024px) {
    top: 45%;  /* Adjust vertical position for tablet */
    width: 80%; /* Adjust width for tablets */
  }
`;

// Greeting text (h1)
const Greeting = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  font-weight: 500;

  /* Media Query for small screens */
  @media (max-width: 430px) {
    font-size: 2rem;
    margin-top:20vh; /* Smaller font size for mobile */
  }
    /* Media Query for tablet screens */
  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 2.5rem; /* Reduce font size for tablet */
    margin-top: 15vh;  /* Adjust margin for tablet */
  }
`;

// SubText (p element)
const SubText = styled.p`
  font-size: 4rem;
  margin: 5px 0;

  /* Media Query for small screens */
  @media (max-width: 430px) {
    font-size: 1.5rem; /* Smaller font size for mobile */
  }
    /* Media Query for tablet screens */
  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 2rem;  /* Adjust font size for tablet */
    margin-top: 2vh;  /* Adjust margin for tablet */
  }
`;

// Title (h2 element)
const Title = styled.h2`
  font-family: "Lato", serif;
  font-size: 8.75rem;
  font-weight: 900;
  margin: 10px 0;

  /* Media Query for small screens */
  @media (max-width: 430px) {
    font-size: 3rem; /* Smaller font size for mobile */
  }/* Media Query for tablet screens */
  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 5rem; /* Smaller font size for tablet */
    font-weight: 800; /* Reduce font weight for tablet */
    margin-top: 3vh; /* Adjust margin for tablet */
  }
`;

// Motto container (flexbox)
const Motto = styled.div`
  display: flex;
  justify-content: center;
  gap: 10vh;
  margin-top: 40px;

  /* Media Query for small screens */
  @media (max-width: 430px) {
    flex-direction: column; /* Stack motto texts vertically */
    gap: 5vh; /* Reduce the gap for mobile */
  } /* Media Query for tablet screens */
  @media (min-width: 600px) and (max-width: 1024px) {
    gap: 5vw; /* Reduce gap for tablets */
    flex-direction: row; /* Keep motto texts in a row for tablets */
  }
`;

// Motto Text (span element)
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

  /* Media Query for small screens */
  @media (max-width: 430px) {
    font-size: 1.5rem; /* Smaller font size for mobile */
    transform: translateY(0); /* Adjust the vertical position for mobile */
  }
    /* Media Query for tablet screens */
  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 1.75rem; /* Adjust font size for tablets */
    transform: translateY(0); /* Remove translate for tablet */
  }
`;


export const Hero = () => {
  useGSAP(() => {
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
