import React from "react";
import styled from "styled-components";
import proj2vector2 from "../src/assets/proj2vector2.svg";
import proj3vector1 from "../src/assets/proj3vector1.svg";
import proj3vector2 from "../src/assets/proj3vector2.svg";
import proj4vector1 from "../src/assets/proj4vector1.svg";
import proj4vector2 from "../src/assets/proj4vector2.svg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Section = styled.div``;

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  overflow-x: hidden;
  color: white;
  height: 90vh;
`;

const Title = styled.h1`
  font-size: 8vh;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  margin-bottom: 5rem;
`;

const ProjectWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-direction: row;
  width: 200%;
`;

const ProjectCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55vh;
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
    position: relative;
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
    position: relative;
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
    position: relative;
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
    position: relative;
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
    position: relative;
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
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

const ExploreButton = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 6vh;
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
`;

export const FeaturedProjects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-container",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        // markers: true,
        scrub: 3,
        pin: true,
      },
    });
    tl.to(".project-wrapper", {
      transform: "translate(-50%)",
    });
  }, []);
  return (
    <>
      <hr style={{ width: "75%", margin: "0 auto" }} />

      <Section id="projects">
        <Container className="project-container">
          <Title className="featured-projects">Featured Projects</Title>
          <ProjectWrapper className="project-wrapper">
            <ProjectCard>
              <img src={proj2vector2} alt="" />
              <img src={proj3vector1} alt="" />
              <TextContent>
                <ProjectTitle>Project 1</ProjectTitle>
                <ProjectDescription>
                  Unveil the creativity behind our web development projects,
                  where we build dynamic and user-friendly websites and
                  applications
                </ProjectDescription>
                <ExploreButton>Explore</ExploreButton>
              </TextContent>
            </ProjectCard>
            <ProjectCard>
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
            <ProjectCard>
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
            <ProjectCard>
              <img src={proj3vector1} alt="" />
              <img src={proj4vector1} alt="" />

              <TextContent>
                <ProjectTitle>Project 4</ProjectTitle>
                <ProjectDescription>
                  <p>
                    Explore our AI/ML innovations, delivering cutting-edge
                    models and intelligent solutions that redefine technology
                    through automation and data-driven insights
                  </p>
                </ProjectDescription>
                <ExploreButton>Explore</ExploreButton>
              </TextContent>
            </ProjectCard>
            <ProjectCard>
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
        </Container>
      </Section>

      <hr style={{ width: "75%", margin: "0 auto" }} />
    </>
  );
};
