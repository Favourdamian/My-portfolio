import React from "react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section contact" data-reveal>
      <p className="eyebrow">Contact</p>
      <h2>
        <span>Let us make</span>
        <em>something quiet</em>
        <span>and useful.</span>
      </h2>
      <p className="section-lede">
        Open to internships, junior frontend roles, and considered freelance.
        I read every note.
      </p>

      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>

      <div className="contact-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          01 GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          02 LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>03 Email</a>
      </div>
    </section>
  );
}
