import React, { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#work", label: "Work", index: "01" },
  { href: "#about", label: "About", index: "02" },
  { href: "#contact", label: "Contact", index: "03" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 16);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <span className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="header-inner">
        <a className="logo" href="#top">
          <span>F.</span> Damian
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              <em>{link.index}</em>
              {link.label}
            </a>
          ))}
          <a
            className="nav-ghost"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>

        <button
          className={open ? "menu-toggle is-open" : "menu-toggle"}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={open ? "mobile-nav is-open" : "mobile-nav"}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <em>{link.index}</em> {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
