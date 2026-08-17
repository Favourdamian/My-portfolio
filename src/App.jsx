import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app">
      <div className="wash wash-a" aria-hidden="true" />
      <div className="wash wash-b" aria-hidden="true" />
      <div className="wash wash-c" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
