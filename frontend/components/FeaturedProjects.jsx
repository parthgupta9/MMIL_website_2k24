import React from "react";
import styled from "styled-components";
import proj2vector2 from "../src/assets/proj2vector2.svg";
import proj3vector1 from "../src/assets/proj3vector1.svg";
import proj3vector2 from "../src/assets/proj3vector2.svg";
import proj4vector1 from "../src/assets/proj4vector1.svg";
import proj4vector2 from "../src/assets/proj4vector2.svg";

const Section = styled.div``;

const Container = styled.div`
  text-align: center;
  padding: 2rem 0;
  // overflow-x: hidden;
  color: white;
  height: 140vh;
  margin-bottom: 5vh;

  @media screen and (max-width: 767px) {
    margin-bottom: 1vh;
  }

`;

const Title = styled.h1`
  font-size: 8vh;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  margin-bottom: 5rem;
`;

const Banner = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  text-align: center;
`;

const ProjectWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  top: 15%;
  left: calc(50% - 10vh);
  transform: translate(-50%, -50%) rotateY(0deg);
  transform-style: preserve-3d;
  transform: perspective(2000px);
  perspective-origin: center;
  animation: autoRun 20s linear infinite;

  @keyframes autoRun {
    from {
      transform: perspective(2000px) rotateX(-16deg) rotateY(0deg);
    }
    to {
      transform: perspective(2000px) rotateX(-16deg) rotateY(360deg);
    }
  }

  @media screen and (max-width: 1023px) {
    width: 160px;
    height: 200px;
    left: calc(50% - 8vh)
  }
`;

const ProjectCard = styled.div`
  position: absolute;
  inset: 0;
  transform: rotateY(
      calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
    )
    translateZ(500px);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 50vh;
  width: 30vw;
  border-radius: 15px;
  border: 1px solid #ffffff;
  box-shadow: 0px 10px 20px rgba (0, 0, 0, 0.3);
  flex: 0 0 18%;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: scale 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.4);
  }

  &:nth-child(1) {
    overflow: hidden;
    // position: relative;
    background: linear-gradient(180deg, #550d62 0%, #27032d 100%);

    img {
      position: absolute;

      &:nth-child(1) {
        left: 0;
        top: 0;
      }
    }
  }

  &:nth-child(2) {
    overflow: hidden;
    // position: relative;
    background: linear-gradient(180deg, #1f0749 0%, #27032d 100%);

    img {
      position: absolute;

      &:nth-child(1) {
        left: 0;
        top: 0;
      }

      &:nth-child(2) {
        right: -3.4vh;
        bottom: 2vh;
        transform: rotate(90deg);
      }
    }
  }

  &:nth-child(3) {
    overflow: hidden;
    // position: relative;
    background: linear-gradient(180deg, #2941d8 0%, #27032d 100%);
    img {
      position: absolute;
      &:nth-child(1) {
        left: 0;
        top: 0;
      }

      &:nth-child(2) {
        right: 3vh;
        bottom: 15vh;
      }
    }
  }

  &:nth-child(4) {
    overflow: hidden;
    // position: relative;
    background: linear-gradient(180deg, #550d62 0%, #27032d 100%);
    img {
      position: absolute;
      &:nth-child(1) {
        left: 0;
        top: 0;
      }

      &:nth-child(2) {
        right: 3vh;
        bottom: -6vh;
        transform: rotate(270deg);
      }
    }
  }

  &:nth-child(5) {
    background: linear-gradient(180deg, #2941d8 0%, #27032d 100%);
    // position: relative;
    overflow: hidden;
    img {
      position: absolute;
      &:nth-child(1) {
        left: -25px;
        transform: rotate(-90deg);
      }
      &:nth-child(2) {
        right: -10px;
        transform: rotate(90deg);
      }
    }
  }
  @media screen and (max-width: 1023px) {
    transform: rotateY(
      calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
    )
    translateZ(250px);
  }

  @media screen and (max-width: 767px) {
    transform: rotateY(
      calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
    )
    translateZ(180px);
  }
`;

const TextContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4em;
  height: 100%;
  z-index: 1;
`;

const ProjectTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
`;

const ExploreButton = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 4vh;
  padding: 10px 24px;
  font-size: 18px;
  color: rgb(255, 20, 147);
  border: 2px solid rgb(255, 20, 147);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;

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

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 20px;
    margin-top: 8px;
  }
`;

export const FeaturedProjects = () => {
  return (
    <>
      <hr style={{ width: "75%", margin: "0 auto" }} />

      <Section id="projects">
        <Container className="project-container">
          <Title className="featured-projects">Featured Projects</Title>
          <Banner className="banner">
            <ProjectWrapper className="slider" style={{ "--quantity": 5 }}>
              <ProjectCard className="project-card" style={{ "--position": 1 }}>
                <img src={proj2vector2} alt="" />
                <img src={proj3vector1} alt="" />
                <TextContent>
                  <ProjectTitle>Project 1</ProjectTitle>
                  <ProjectDescription>
                    <p>
                    Unveil the creativity behind our web development projects,
                    where we build dynamic and user-friendly websites and
                    applications
                    </p>
                  </ProjectDescription>
                  <ExploreButton>Explore</ExploreButton>
                </TextContent>
              </ProjectCard>
              <ProjectCard
                className=".project-card"
                style={{ "--position": 2 }}
              >
                <img src={proj4vector1} alt="" />
                <img src={proj2vector2} alt="" />

                <TextContent>
                  <ProjectTitle>Project 2</ProjectTitle>
                  <ProjectDescription>
                    <p>
                      Explore cutting-edge projects and innovative solutions
                      crafted by our talented team of designers in the Technical
                      Society
                    </p>
                  </ProjectDescription>
                  <ExploreButton>Explore</ExploreButton>
                </TextContent>
              </ProjectCard>
              <ProjectCard
                className=".project-card"
                style={{ "--position": 3 }}
              >
                <img src={proj3vector2} alt="" />
                <img src={proj4vector2} alt="" />

                <TextContent>
                  <ProjectTitle>Project 3</ProjectTitle>
                  <ProjectDescription>
                    <p>
                      Discover our Android development endeavors, showcasing
                      innovative apps and solutions for mobile technology
                    </p>
                  </ProjectDescription>
                  <ExploreButton>Explore</ExploreButton>
                </TextContent>
              </ProjectCard>
              <ProjectCard
                className=".project-card"
                style={{ "--position": 4 }}
              >
                <img src={proj3vector1} alt="" />
                <img src={proj4vector1} alt="" />

                <TextContent>
                  <ProjectTitle>Project 4</ProjectTitle>
                  <ProjectDescription>
                    <p>
                      Explore our AI/ML innovations and intelligent solutions
                      that redefine technology through automation and
                      data-driven insights
                    </p>
                  </ProjectDescription>
                  <ExploreButton>Explore</ExploreButton>
                </TextContent>
              </ProjectCard>
              <ProjectCard
                className=".project-card"
                style={{ "--position": 5 }}
              >
                <img src={proj4vector2} alt="" />
                <img src={proj2vector2} alt="" />

                <TextContent>
                  <ProjectTitle>Project 5</ProjectTitle>
                  <ProjectDescription>
                    <p>
                      Dive into our programming initiatives, where coding
                      enthusiasts develop powerful software and drive
                      technological advancements
                    </p>
                  </ProjectDescription>
                  <ExploreButton>Explore</ExploreButton>
                </TextContent>
              </ProjectCard>
            </ProjectWrapper>
          </Banner>
        </Container>
      </Section>

      <hr style={{ width: "75%", margin: "0 auto" }} />
    </>
  );
};
