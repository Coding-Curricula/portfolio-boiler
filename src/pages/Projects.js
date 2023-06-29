import React, { useState } from 'react'

import './Projects.css'

const projects = [
  {
    name: 'Project 1',
    description: 'This is project 1',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    deployedLink: 'https://www.google.com',
    githubLink: 'https://www.github.com',
  },
  {
    name: 'Project 2',
    description: 'This is project 2',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    deployedLink: 'https://www.google.com',
    githubLink: 'https://www.github.com',
  },
  {
    name: 'Project 3',
    description: 'This is project 3',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    deployedLink: 'https://www.google.com',
    githubLink: 'https://www.github.com',
  },
  {
    name: 'Project 4',
    description: 'This is project 4',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    deployedLink: 'https://www.google.com',
    githubLink: 'https://www.github.com',
  }
]

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const previousSlide = () => {
    const lastIndex = images.length - 1
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    setCurrentImageIndex(index)
  }

  const nextSlide = () => {
    const lastIndex = images.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    setCurrentImageIndex(index)
  }

  return (
    <div className='carousel-container'>
      <div className='carousel-image-container'>
        <img src={images[currentImageIndex]} alt='carousel' />
      </div>
      <div className='carousel-controls'>
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  )
}


function ProjectCard({ project }) {
  return (
    <ul>
      <li className='project-card'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <Carousel images={project.images} />
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
