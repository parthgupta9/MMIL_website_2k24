import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { OurEvents } from "../components/OurEvents";
import styled from "styled-components";
import { FeaturedProjects } from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Clubs from "../components/Clubs";
import { AuroraGradient } from "../components/AuroraGradient";
import Team from "../components/Team";
import { LoadingScreen } from "../components/LoadingScreen";

const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasTimerElapsed, setHasTimerElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasTimerElapsed(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const resourceLoader = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(resourceLoader);
  }, []);

  return (
    <>
      {(!hasTimerElapsed || isLoading) && (
        <LoadingPage>
          <LoadingScreen />
        </LoadingPage>
      )}

      {hasTimerElapsed && !isLoading && (
        <>
          <AuroraGradient />
          <Hero />
          <Clubs />
          <Team />
          <OurEvents />
          <FeaturedProjects />
          <Form />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
