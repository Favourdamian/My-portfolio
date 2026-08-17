import React from "react";
import { profile, aboutFacts, skillGroups } from "../data";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head about-head" data-reveal>
        <div>
          <p className="eyebrow">About</p>
          <h2>A chemist who learned to ship interfaces.</h2>
        </div>
        <p className="section-lede">
          I treat frontend work the way I treated the lab: measure twice, name
          things clearly, and do not hand over something I would not use.
        </p>
      </div>

      <div className="about-layout">
        <aside className="about-profile" data-reveal>
          <div className="about-photo">
            <img
              src={profile.photo}
              alt={`${profile.fullName}, ${profile.role}`}
            />
          </div>
          <p className="about-role">
            {profile.role}
            <span>{profile.location}</span>
          </p>
          <dl className="about-facts">
            {aboutFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="about-main">
          <blockquote className="about-quote" data-reveal>
            I like software that feels as considered as a well-set chessboard.
          </blockquote>

          <div className="about-copy" data-reveal>
            <p>
              I am {profile.legalName}. I studied Pure and Industrial Chemistry,
              then followed the part of that discipline I actually loved:
              careful systems, clear structure, and making something work in
              front of a real person.
            </p>
            <p>
              I now build web products with React and Node. During{" "}
              <strong>HNG 14</strong> I shipped an invoice manager, a tested
              habit-tracker PWA, and smaller interface studies that taught me to
              sweat accessibility and state. Alongside that I work on{" "}
              <strong>SmartEdu</strong>, a learning platform for students and
              parents, and <strong>Scripture Guide</strong> for preachers who
              need verses while they speak.
            </p>
            <p>
              Off the keyboard I sing, play chess, and read. That is the
              standard I bring back to the screen: calm, exact, and finished.
            </p>
          </div>
        </div>
      </div>

      <div className="about-toolkit" data-reveal>
        <div className="about-toolkit-head">
          <p className="eyebrow">Toolkit</p>
          <h3>How I work, in practice.</h3>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
