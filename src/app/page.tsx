"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import WelcomePage from "@/pages/welcome-page";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/pages/animated-backgroud";
import Home from "@/pages/home";
import About from "@/pages/about";
import ProjectDetails from "@/components/project-details";
import Portfolio from "@/pages/portfolio";
import { useFirstVisit } from "@/lib/hooks/useFirstVisit";
import Contact from "@/pages/contact";

function App() {
  const [showWelcome, setShowWelcome] = useFirstVisit();

  return (
    <LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />
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
          {typeof window !== "undefined" && (
            <>
              <Navbar />
              <AnimatedBackground />
              <Home />
              <About />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;
