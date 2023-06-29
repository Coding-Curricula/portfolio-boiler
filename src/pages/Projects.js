import React, { useState } from 'react'

import './Projects.css'

const projects = [
  {
    name: 'Project 1',
    description: 'This is project 1',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://www.google.com',
    githubLink: 'https://www.github.com',
  },
  {
    name: 'Project 2',
    description: 'This is project 2',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://www.google.com',
    githubLink: 'https://www.github.com',
  },
  {
    name: 'Project 3',
    description: 'This is project 3',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://www.google.com',
    githubLink: 'https://www.github.com',
  },
  {
    name: 'Project 4',
    description: 'This is project 4',
    image: 'https://via.placeholder.com/150',
    deployedLink: 'https://www.google.com',
    githubLink: 'https://www.github.com',
  }
]

function ProjectCard({ project }) {
  return (
    <ul>
      <li className='project-card'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <img src={project.image} alt={project.name} />
        <div>
          <a href={project.deployedLink}>Deployed Link</a>
        </div>
        <div>
          <a href={project.githubLink}>Github Link</a>
        </div>
      </li>
    </ul>
  )
}


export default function Projects() {
  return (
    <div className='projects-page'>
      <div className='projects-container'>
        <h2>Projects</h2>
        <div className='projects'>
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
