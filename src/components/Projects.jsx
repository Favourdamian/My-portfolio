import React from 'react'

const sample = [
  {title:'Project One',desc:'Short description',link:'#'},
  {title:'Project Two',desc:'Short description',link:'#'},
  {title:'Project Three',desc:'Short description',link:'#'}
]

export default function Projects(){
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      <div className="projects">
        {sample.map(p=> (
          <article key={p.title} className="project">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link}>View</a>
          </article>
        ))}
      </div>
    </section>
  )
}
