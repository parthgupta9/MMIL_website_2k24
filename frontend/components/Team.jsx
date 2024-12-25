import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.div``;

const Container = styled.div`
  margin-top: 100px;
  position: relative;
`;

const Title = styled.div`
  color: white;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  text-align: center;
  font-size: 8vh;
  font-weight: bold;
`;

const ShapeL = styled.img`
  position: absolute;
  top: -200px;

  @media (max-width: 768px) {
    transform: scale(0.6);
    left: -7%;
    z-index: -1;
  }
`;

const ShapeR = styled.img`
  position: absolute;
  right: 0;
  top: 600px;
`;

const Cube = styled.img`
  position: absolute;
  right: 0;
  top: -170px;
  z-index: -1;

  @media (max-width: 768px) {
    transform: scale(0.6);
    z-index: -2;
    top: -330px;
    right: -60%;
  }
`;

const SubTitle = styled.h1`
  color: white;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  text-align: center;
  font-size: 8vh;
  font-weight: bold;
  margin-top: 100px;

  &.programming {
    margin-top: -300px;
  }
`;

const TeamBox = styled.div`
  width: 90vw;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

const Mem = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 20px 70px;
  object-fit: cover;
  background-color: white;
  z-index: 2;
  cursor: pointer;
  transition: all 0.1s ease;

  &.top {
    object-position: top;
  }

  &.bottom {
    object-position: bottom;
  }

  &.flowOut {
    z-index: 11;
    position: fixed;
    top: 30vh;
    left: 20vw;
    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.4);
  }

  &.flowOut:hover {
    transform: scale(1.1);
    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.5);
    cursor: unset;
  }
`;

const ProgTopLine = styled.img`
  align-self: flex-start;
  position: relative;
  top: 103px;
  left: -62px;
  width: 70vw;
`;

const Prog = styled.div`
  display: flex;
  z-index: 1;
  margin-top: -50px;
`;

const Web = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const WebLine = styled.img`
  position: absolute;
  top: -250px;
`;

const And = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const AndLine = styled.img`
  position: absolute;
  top: -250px;
`;

const ViewMoreButton = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  z-index: 3;
  position: relative;
  background: none;
  transition: color 0.3s ease;

  &:hover {
    color: #8a2be2;
  }

  &:hover .icon {
    color: #8a2be2;
  }
`;

const ViewLessButton = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  z-index: 3;
  position: relative;
  background: none;
  transition: color 0.3s ease;

  &:hover {
    color: #8a2be2;
  }

  &:hover .icon {
    color: #8a2be2;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: color 0.3s ease;
`;

const Blur = styled.div`
  width: 80vw;
  height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -10;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.active {
    z-index: 10;
  }
`;

const MemName = styled.h2`
  color: white;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  text-align: center;
  font-size: 8vh;
  font-weight: bold;
  margin-left: 30vw;
  padding: 0 20px;
`;

const MemPost = styled.p`
  color: white;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
  margin-left: 30vw;
`;

const MemYear = styled.p`
  color: white;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
  margin-left: 30vw;
`;

const CloseBtn = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ConnectionBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10vw;
  margin-top: 10vh;
  margin-left: 10vw;
`;

const GitHub = styled.img`
  border-radius: 10px;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const LinkedIn = styled.img`
  border-radius: 10px;
  margin-left: 100px;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

function Team() {
  const [showMoreDesign, setShowMoreDesign] = useState(false);
  const [showMoreProgramming, setShowMoreProgramming] = useState(false);
  const [showMoreWeb, setShowMoreWeb] = useState(false);
  const [showMoreAndroid, setShowMoreAndroid] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const MMILians = {
    parthSharma: {
      name: "Parth Sharma",
      year: "4th Year",
      post: "Design Head",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    harshJajaniya: {
      name: "Harsh Jajaniya",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    anushkaDubey: {
      name: "Anushka Dubey",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    sanyaPandey: {
      name: "Sanya Pandey",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    shubhiGupta: {
      name: "Shubhi Gupta",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    abhishekKushwaha: {
      name: "Abhishek Kushwaha",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    pranavSingh: {
      name: "Pranav Singh",
      year: "4th Year",
      post: "Programming Head",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    manasRai: {
      name: "Manas Rai",
      year: "4th Year",
      post: "President",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    aryanGupta: {
      name: "Aryan Gupta",
      year: "4th Year",
      post: "Treasurer",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    anushaAgarwal: {
      name: "Anusha Agarwal",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    abhinavYadav: {
      name: "Abhinav Yadav",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    abhishekYadav: {
      name: "Abhishek Yadav",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    vaishnavGupta: {
      name: "Vaishnav Gupta",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    vaishnaviBhati: {
      name: "Vaishnavi Bhati",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    utkarshGupta: {
      name: "Utkarsh Gupta",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    tanmayKalra: {
      name: "Tanmay Kalra",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    dhanrajSingh: {
      name: "Dhanraj Singh",
      year: "4th Year",
      post: "Web Head",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    nipunKhatri: {
      name: "Nipun Khatri",
      year: "4th Year",
      post: "General Secretary",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    kuldeepPandit: {
      name: "Kuldeep Pandit",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    bhoomiAgarwal: {
      name: "Bhoomi Agarwal",
      year: "4th Year",
      post: "Vice President",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    parthGupta: {
      name: "Parth Gupta",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    utkarshSharma: {
      name: "Utkarsh Sharma",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    muskanJaiswal: {
      name: "Muskan Jaiswal",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    garimaSingh: {
      name: "Garima Singh",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    parthChaturvedi: {
      name: "Parth Chaturvedi",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://www.linkedin.com/in/parth-chaturvedi-dev/",
      github: "https://github.com/ParthChaturvedi07",
    },
    harshitaSharma: {
      name: "Harshita Sharma",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    dishaAggarwal: {
      name: "Disha Aggarwal",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    vibhutiKapoor: {
      name: "Vibhuti Kapoor",
      year: "4th Year",
      post: "Android Head",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    yashShekhar: {
      name: "Yash Shekhar",
      year: "4th Year",
      post: "CTC",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    shrangikaGupta: {
      name: "Shrangika Gupta",
      year: "4th Year",
      post: "Technical Head",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    harshitGoyal: {
      name: "Harshit Goyal",
      year: "4th Year",
      post: "Management Head",
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    rounakAli: {
      name: "Rounak Ali Ansari",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    ashitaMaheshwari: {
      name: "Ashita Maheshwari",
      year: "3rd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    ayanKhan: {
      name: "Ayan Khan",
      year: "2nd Year",
      post: null,
      about:
        "At the intersection of art and technology the Design Lead ensures our society's work is presented with clarity, creativity, and style.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  };

  const handleToggle = (setter) => {
    setter((prev) => !prev);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 0);
  };

  const toggleMemInfo = (e) => {
    setSelectedImage(e.target);
    e.target.classList.add("flowOut");
  };

  const handleClose = () => {
    selectedImage.classList.remove("flowOut");
    setSelectedImage(null);
  };

  gsap.registerPlugin(_ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-container",
        scroller: "body",
        start: "top 70%",
        end: "top 10%",
        // markers: true,
        scrub: 3,
      },
    });
    tl.from(
      ".shapeL",
      {
        opacity: 0,
        scale: 0.5,
        x: -50,
      },
      "anim"
    ),
      tl.from(
        ".cube",
        {
          opacity: 0,
          x: 100,
        },
        "anim"
      );

    var tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".prog",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        // markers: true,
        scrub: 3,
      },
    });
    tl1.from(
      ".prog",
      {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
        ease: "power2.out",
        duration: 1.2,
      },
      "anim2"
    ),
      tl1.from(
        ".shapeR",
        {
          opacity: 0,
          x: 100,
          ease: "power2.out",
          duration: 1.2,
        },
        "anim2"
      );

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".web",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        // markers: true,
        scrub: 3,
      },
    });
    tl2.from(".webLine", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "right center",
      ease: "power2.out",
      duration: 1.2,
    });

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".and",
        scroller: "body",
        start: "top 66%",
        end: "top 20%",
        // markers: true,
        scrub: 3,
      },
    });
    tl3.from(".andLine", {
      x: 50,
      clipPath: "inset(0 0 0 100%)",
      ease: "power2.out",
      duration: 1.5,
    });
  });

  return (
    <Section id="team">
      <Container className="team-container">
        <Blur className={`blurBackground ${selectedImage ? "active" : ""}`}>
          <CloseBtn icon={faXmark} onClick={() => handleClose()} />
          <MemName>{selectedImage && MMILians[selectedImage.id].name}</MemName>
          <MemPost>{selectedImage && MMILians[selectedImage.id].post}</MemPost>
          <MemYear>{selectedImage && MMILians[selectedImage.id].year}</MemYear>
          <ConnectionBox>
            <GitHub src="Asset 4.svg" height={60} />
            <LinkedIn src="Asset 3.svg" height={60} />
          </ConnectionBox>
        </Blur>
        <Title>Meet the Team</Title>
        <ShapeL className="shapeL" src="/Frame 427318228.svg" />
        <Cube className="cube" src="/Group 3673.svg" />
        <SubTitle>Design |</SubTitle>
        <TeamBox>
          <Mem
            src="/IMG_20240627_115713.jpg"
            id="parthSharma"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          <Mem
            src="/harshsir.png"
            id="harshJajaniya"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          <Mem
            src="/Anushka.jpg"
            id="anushkaDubey"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          {!showMoreDesign && (
            <ViewMoreButton
              onClick={() => handleToggle(setShowMoreDesign)}
              className="viewMore"
            >
              View More &nbsp;
              <StyledFontAwesomeIcon icon={faCaretDown} className="icon" />
            </ViewMoreButton>
          )}
          {showMoreDesign && (
            <>
              <Mem
                src="/sanya.jpg"
                id="sanyaPandey"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/male.jpg"
                id="abhishekKushwaha"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/female.jpg"
                id="shubhiGupta"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <ViewLessButton
                onClick={() => handleToggle(setShowMoreDesign)}
                className="viewLess"
              >
                View Less &nbsp;
                <StyledFontAwesomeIcon icon={faCaretUp} className="icon" />
              </ViewLessButton>
            </>
          )}
        </TeamBox>
        <ShapeR className="shapeR" src="Frame 427318229.svg" />
        <Prog className="prog">
          <img src="/progline.svg" />
          <ProgTopLine src="/progtopline.png" />
        </Prog>
        <SubTitle className="programming">Programming |</SubTitle>
        <TeamBox>
          <Mem
            src="/IMG_20240628_145721.jpg"
            id="pranavSingh"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          <Mem
            src="/Cs83848729.jpg"
            id="manasRai"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          <Mem
            src="/1716935731824.jpg"
            id="aryanGupta"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          {!showMoreProgramming && (
            <ViewMoreButton
              onClick={() => handleToggle(setShowMoreProgramming)}
              className="viewMore"
            >
              View more &nbsp;
              <StyledFontAwesomeIcon icon={faCaretDown} className="icon" />
            </ViewMoreButton>
          )}
          {showMoreProgramming && (
            <>
              <Mem
                src="/Anusha.jpg"
                id="anushaAgarwal"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/IMG-20241126-WA0005.jpg"
                id="abhinavYadav"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/IMG-20240916-WA0007.jpg"
                id="abhishekYadav"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/male.jpg"
                id="vaishnavGupta"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />{" "}
              {/* Vaishnav Gupta */}
              <Mem
                src="/female.jpg"
                id="vaishnaviBhati"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />{" "}
              {/* Vaishnavi Bhati */}
              <Mem
                src="/male.jpg"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
                id="utkarshGupta"
              />{" "}
              {/* Utkarsh Gupta */}
              <Mem
                src="/male.jpg"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
                id="tanmayKalra"
              />{" "}
              {/* Tanmay Kalra */}
              <ViewLessButton
                onClick={() => handleToggle(setShowMoreProgramming)}
                className="viewLess"
              >
                View Less &nbsp;
                <StyledFontAwesomeIcon icon={faCaretUp} className="icon" />
              </ViewLessButton>
            </>
          )}
        </TeamBox>
        <Web className="web">
          <WebLine className="webLine" src="/Group 3674.svg" />
        </Web>
        <SubTitle>Web Development |</SubTitle>
        <TeamBox>
          <Mem
            src="/PXL_20240516_130321230.MP~5.jpg"
            id="dhanrajSingh"
            className="bottom"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          <Mem
            src="/IMG20240626214849~2.jpg"
            id="nipunKhatri"
            className="top"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          <Mem
            src="/photo.jpg"
            id="bhoomiAgarwal"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          {!showMoreWeb && (
            <ViewMoreButton
              onClick={() => handleToggle(setShowMoreWeb)}
              className="viewMore"
            >
              View more &nbsp;
              <StyledFontAwesomeIcon icon={faCaretDown} className="icon" />
            </ViewMoreButton>
          )}
          {showMoreWeb && (
            <>
              {/* <Mem src="/photo.jpg" />
              <Mem src="/IMG_20240526_193046.jpg" />
              <Mem src="/IMG_20241123_154657.jpg" className="top" />
              <Mem src="/Muskan.jpg" />
              <Mem src="/Disha.jpeg"  className="top"/>
              
              <Mem src="/garima.jpeg" />
              <Mem src="/parthc.jpg"  />
              <Mem src="/female.jpg" />
            <Mem src="/female.jpg" /> */}
              <Mem
                src="/IMG_20240526_193046.jpg"
                id="parthGupta"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/IMG_20241123_154657.jpg"
                id="utkarshSharma"
                className="top"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/Muskan.jpg"
                id="muskanJaiswal"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/garima.jpeg"
                id="garimaSingh"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/parthc.jpg"
                id="parthChaturvedi"
                className="top"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/hero.jpg"
                id="kuldeepPandit"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/female.jpg"
                id="harshitaSharma"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/Disha.jpeg"
                id="dishaAggarwal"
                className="top"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <ViewLessButton
                onClick={() => handleToggle(setShowMoreWeb)}
                className="viewLess"
              >
                View Less &nbsp;
                <StyledFontAwesomeIcon icon={faCaretUp} className="icon" />
              </ViewLessButton>
            </>
          )}
        </TeamBox>
        <And className="and">
          <AndLine className="andLine" src="/Group 3667.svg" />
        </And>
        <SubTitle>Android & AIML |</SubTitle>
        <TeamBox>
          <Mem
            src="/IMG-20230428-WA0023.jpg"
            id="vibhutiKapoor"
            className="top"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          <Mem
            src="/DSC_1026.JPG"
            id="yashShekhar"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          <Mem
            src="/IMG-20221128-WA0050.jpg"
            id="shrangikaGupta"
            onClick={(e) => {
              toggleMemInfo(e);
            }}
          />
          {!showMoreAndroid && (
            <ViewMoreButton
              onClick={() => handleToggle(setShowMoreAndroid)}
              className="viewMore"
            >
              View more &nbsp;
              <StyledFontAwesomeIcon icon={faCaretDown} className="icon" />
            </ViewMoreButton>
          )}
          {showMoreAndroid && (
            <>
              <Mem
                src="/IMG_20231024_045140_695.jpg"
                id="harshitGoyal"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/IMG_20241126_164315.jpg"
                id="rounakAli"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/Ashita.jpg"
                id="ashitaMaheshwari"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <Mem
                src="/ayan.jpg"
                id="ayanKhan"
                onClick={(e) => {
                  toggleMemInfo(e);
                }}
              />
              <ViewLessButton
                onClick={() => handleToggle(setShowMoreAndroid)}
                className="viewLess"
              >
                View Less &nbsp;
                <StyledFontAwesomeIcon icon={faCaretUp} className="icon" />
              </ViewLessButton>
            </>
          )}
        </TeamBox>
      </Container>
    </Section>
  );
}

export default Team;
