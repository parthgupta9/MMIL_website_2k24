import React from "react";
import styled, { keyframes } from "styled-components";
import mmilLogo from "../src/assets/mmilLogo(2).png";
import { AuroraGradient } from "./AuroraGradient";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150px;
  width: 150px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LoadingScreen = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1, // Loop infinitely
      defaults: { ease: "power2.inOut" },
    });

    tl.to(".img", {
      scale: 1.3,
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 1.5,
    });

    tl.to(".img", {
      scale: 1.4,
      duration: 0.3,
      ease: "power1.inOut",
    })
      .to(".img", {
        scale: 1.3,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(".img", {
        scale: 1.4,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(".img", {
        scale: 1.3,
        duration: 0.3,
        ease: "power1.inOut",
      });

    tl.to(".img", {
      scale: 1,
      rotation: -360,
      transformOrigin: "50% 50%",
      duration: 1.5,
    });

    tl.to(".img", {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.inOut",
    })
      .to(".img", {
        scale: 1,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(".img", {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(".img", {
        scale: 1,
        duration: 0.3,
        ease: "power1.inOut",
      });
  });

  return (
    <>
      <AuroraGradient />
      <Container>
        <Logo>
          <Img className="img" src={mmilLogo} alt="mmil-logo" />
        </Logo>
      </Container>
    </>
  );
};
