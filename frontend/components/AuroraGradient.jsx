import React from "react";
import styled from "styled-components";

const AuroraContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  overflow: hidden;
  background: linear-gradient(177.46deg, #000000 -20.55%, #6829d8 297.28%);

  div {
    position: absolute;
    border-radius: 50%;
    mix-blend-mode: screen;
    animation: move 8s infinite ease-in-out alternate;
    filter: blur(80px);
    opacity: 0.6;
  }

  div:nth-child(1) {
    width: 300px;
    height: 300px;
    background: rgba(104, 41, 216, 0.6);
    top: 0;
    left: -10%;
    animation-duration: 5s;
    animation-name: move1;
  }

  div:nth-child(2) {
    width: 400px;
    height: 400px;
    background: rgba(104, 41, 216, 0.5);
    top: 60%;
    right: -10%;
    animation-duration: 6s;
    animation-name: move2;
  }

  div:nth-child(3) {
    width: 200px;
    height: 200px;
    background: rgba(104, 41, 216, 0.5);
    top: 0;
    right: 0;
    animation-duration: 4s;
    animation-name: move3;
  }

  div:nth-child(4) {
    width: 350px;
    height: 350px;
    background: rgba(104, 41, 216, 0.7);
    top: 72%;
    left: -10%;
    animation-duration: 7s;
    animation-name: move4;
  }

  @keyframes move1 {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      opacity: 0.6;
    }
    50% {
      transform: translate(100px, -80px) rotate(180deg) scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: translate(-100px, 80px) rotate(360deg) scale(1);
      opacity: 0.6;
    }
  }

  @keyframes move2 {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      opacity: 0.7;
    }
    50% {
      transform: translate(-120px, 100px) rotate(360deg) scale(1.2);
      opacity: 0.9;
    }
    100% {
      transform: translate(120px, -100px) rotate(720deg) scale(1);
      opacity: 0.7;
    }
  }

  @keyframes move3 {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      opacity: 0.4;
    }
    50% {
      transform: translate(80px, -60px) rotate(360deg) scale(1.05);
      opacity: 0.6;
    }
    100% {
      transform: translate(-80px, 60px) rotate(720deg) scale(1);
      opacity: 0.4;
    }
  }

  @keyframes move4 {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(140px, -120px) rotate(90deg) scale(1.15);
      opacity: 0.8;
    }
    100% {
      transform: translate(-140px, 120px) rotate(270deg) scale(1);
      opacity: 0.5;
    }
  }
`;
export const AuroraGradient = () => {
  return (
    <AuroraContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </AuroraContainer>
  );
};
