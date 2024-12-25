import React, { useState } from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaRegTimesCircle } from "react-icons/fa";
import hand from "../src/assets/hand.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Section = styled.div``;

const GetInTouchContainer = styled.section`
  position: relative;
  width: 60vw;
  max-width: 75rem;
  height: 100vh;
  padding: 2rem;
  margin: 4rem auto;
  text-align: center;
  font-family: "Ubuntu", serif;
  color: #eeeeef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 48rem) {
    width: 90%;
    padding: 1rem;
    margin: 5rem auto;
  }
`;

const Title = styled.h2`
  font-size: 8vh;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  font-family: "Ubuntu", serif;
  margin-bottom: 5rem;
  line-height: 2.875rem;
  @media (max-width: 48rem) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5.5rem;
  gap: 3.5rem;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }
`;

const SocialLinkBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid #efecfd;
  text-decoration: none;
  color: #eeeeef;
  transition: background 0.3s;

  @media (max-width: 780px) {
    width:12rem
  }

  &:hover {
    background: #333333;
  }

  p {
    font-family: "Ubuntu", serif;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0.125rem;
    text-align: left;
    @media (max-width: 48rem) {
      font-size: 1rem;
      line-height: 1.25rem;
      text-align: center;
    }
  }

  svg {
    font-size: 2.5rem;
    @media (max-width: 48rem) {
      font-size: 2rem;
    }
  }
`;

const CustomInputContainer = styled.div`
  position: relative;
  width: 25.5625rem;
  height: 4.5625rem;
  margin-bottom: 2rem;

  @media (max-width: 48rem) {
    width: 100%;
    height: 4rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    font-size: 1.5rem;
    font-family: "Open Sans Hebrew", sans-serif;
    font-weight: 400;
    line-height: 2.875rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid #ffffff;
    background: transparent;
    color: #eeeeef;
    outline: none;

    @media (max-width: 48rem) {
      font-size: 1.25rem;
      line-height: 2.5rem;
      padding: 0.5rem;
    }

    &::placeholder {
      color: #eeeeef;
    }

    &:focus {
      border-color: #f6e1fd;
    }
  }

  .input-line {
    width: 20rem;
    height: 0;
    border-bottom: 1px solid #ffffff;
    position: absolute;
    bottom: 0.5rem;
    left: 0.25rem;

    @media (max-width: 48rem) {
      width: 90%;
    }
  }

  .clear-icon {
    position: absolute;
    right: 0.625rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #ffffff;
    background: transparent;
    border: none;
    font-size: 1.25rem;
    padding: 0;
    &:hover {
      color: #f6e1fd;
    }
  }
`;

const InputFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TextareaField = styled.textarea`
  width: 100%;
  height: 8.9375rem;
  padding: 1.125rem;
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 2.875rem;
  letter-spacing: 0.125rem;
  text-align: left;
  border-radius: 0.5rem;
  border: 1px solid #f6e1fd;
  background: transparent;
  color: #eeeeef;
  outline: none;
  resize: none;

  @media (max-width: 48rem) {
    height: 6.25rem;
    padding: 0.75rem;
    font-size: 1rem;
  }

  &::placeholder {
    color: #eeeeef;
  }

  &:focus {
    border-color: #f6e1fd;
  }
`;

const SendButton = styled.button`
  cursor: pointer;
  margin-top: 6vh;
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

const BottomBorder = styled.div`
  width: 100%;
  border-top: 2px solid #eeeeff;
  margin-top: 2rem;
  @media (max-width: 780px) {
    margin-top:100px;
  }
`;

const HandImage = styled.img`
  position: absolute;
  top: -20vh;
  left: -20vw;
  transform: rotate(7.43deg);
  @media (max-width: 780px) {
    height:300px;
    left:-10px;
    top:20px;
  }
`;

const CustomInput = ({ placeholder, type, value, onChange, clearInput }) => (
  <CustomInputContainer>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <div className="input-line" />
    <FaRegTimesCircle className="clear-icon" onClick={clearInput} />
  </CustomInputContainer>
);

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const clearEmail = () => setEmail("");
  const clearPhone = () => setPhone("");
  const clearMessage = () => setMessage("");

  const validateForm = () => {
    const newErrors = {};

    if (!email.includes("@")) newErrors.email = "Email must include @";
    if (phone.length !== 10 || isNaN(phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log({
        email,
        phone,
        message,
      });

      try {
        const response = await fetch('https://mmil-website-2k24-backend.onrender.com/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            phone,
            message,
          }),
        });

        if (response.ok) {
          toast.success("Message sent successfully!"); 
          clearEmail();
          clearPhone();
          clearMessage();
        } else {
          toast.error("Failed to send message."); 
        }
      } catch (error) {
        console.error('Error sending message:', error);
        toast.error("Failed to send message."); 
      }
    } else {
      console.log("Form has errors");
    }
  };

  
  

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".getintouch-container",
        scroller: "body",
        start: "top 45%",
        end: "top 40%",
        // markers: true,
        scrub: 3,
      },
    });
    tl.from(".hand", {
      opacity: 0,
      duration: 1,
      x: -150,
      scale: 0.5,
      ease: "elastic.inOut",
    });
  });

  return (
    <Section id="contacts">
      <GetInTouchContainer className="getintouch-container">
        <Title>GET IN TOUCH</Title>
        <SocialLinksContainer>
          <SocialLinkBox href="https://www.instagram.com">
            <FaInstagram />
            <p>Instagram</p>
          </SocialLinkBox>
          <SocialLinkBox href="https://www.linkedin.com">
            <FaLinkedin />
            <p>Linkedin</p>
          </SocialLinkBox>
        </SocialLinksContainer>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit}
        >
          <InputFieldsContainer>
            <CustomInput
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              clearInput={clearEmail}
            />
            <CustomInput
              type="tel"
              placeholder="+91"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              clearInput={clearPhone}
            />
          </InputFieldsContainer>
          <TextareaField
            placeholder="Comment here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          <SendButton type="submit">Submit</SendButton>
        </form>
        <HandImage className="hand" src={hand} alt="hand" />
      </GetInTouchContainer>
      <BottomBorder />
      <ToastContainer/>
    </Section>
  );
};

export default GetInTouch;
