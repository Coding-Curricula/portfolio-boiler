import React from 'react'

import './About.css'

function Introduction() {
  return (
    <div className='introduction-container'>
      <h2>Introduction</h2>
      <p>Hi, my name is Kevin. I am a software engineer based in San Diego, CA.</p>
    </div>
  )
}

function Education() {
  return (
    <div className='education-container'>
      <h2>Education</h2>
      <div className='education'>
        <div className='education-card'>
          <h3>University of California, San Diego</h3>
          <p>Bachelor of Arts, Economics</p>
          <p>September 2015 - June 2019</p>
        </div>
      </div>
    </div>
  )
}

function FunFact() {
  return (
    <div className='fun-fact-container'>
      <h2>Fun Fact</h2>
      <p>I love to play basketball and video games!</p>
    </div>
  )
}

function Skills() {
  return (
    <div className='skills-container'>
      <h2>Skills</h2>
      <ul className='skills'>
        <li className='skill-card'>HTML</li>
        <li className='skill-card'>CSS</li>
        <li className='skill-card'>JavaScript</li>
        <li className='skill-card'>React</li>
        <li className='skill-card'>Node</li>
        <li className='skill-card'>Express</li>
      </ul>
    </div>
  )
}

function WorkExperience() {
  return (
    <div className='work-experience-container'>
      <h2>Work Experience</h2>
      <div className='work-experience'>
        <div className='work-experience-card'>
          <h3>University of California, San Diego</h3>
          <p>Student Assistant</p>
          <p>September 2015 - June 2019</p>
        </div>
      </div>
    </div>
  )
}

function Hobbies() {
  return (
    <div className='hobbies-container'>
      <h2>Hobbies:</h2>
      <p>I love to play basketball and video games!</p>
    </div>
  )
}


export default function About() {
  return (
    <div>
      <h2>About</h2>
      <Introduction />
      <div className="experience-section">
        <WorkExperience />
        <Education />
      </div>
      <Skills />
      <Hobbies />
      <FunFact />
    </div>
  )
}
