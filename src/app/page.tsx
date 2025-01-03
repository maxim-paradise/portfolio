"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";
import WelcomePage from "@/pages/welcome-page";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/pages/animated-backgroud";
import Home from "@/pages/home";
import About from "@/pages/about";
import ProjectDetails from "@/components/project-details";
import Portfolio from "@/pages/portfolio";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
const LandingPage = ({
  showWelcome,
  setShowWelcome,
}: {
  showWelcome: boolean;
  setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomePage onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portfolio />
          <Footer />
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <Footer />
  </>
);
export default App;
