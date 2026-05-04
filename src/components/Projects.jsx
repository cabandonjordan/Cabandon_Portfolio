import React from 'react';
/* Make sure your CSS file is exactly at src/styles/Projects.css */
import '../styles/Projects.css';

const Projects = () => {
  const PROJECT_DATA = [
    {
      title: "RoboQuest",
      description: "A 2D educational RPG mobile app. Players use image recognition to capture real-world objects, turning them into collectible robot parts with educational affinities to build and battle milestone bosses.",
      tech: ["React Native", "Gemini AI", "Supabase"],
      github: "https://github.com/cabandonjordan/RoboQuest.git",
      live: "#"
    },
    {
      title: "Sentry",
      description: "An AI-powered browser extension helping families stay safe online. It actively blurs inappropriate content, blocks phishing scams, and notifies parents in real-time.",
      tech: ["JavaScript", "Gemini AI", "Node.js"],
      github: "https://github.com/cabandonjordan/Sentry.git",
      live: "#"
    },
    {
      title: "TuklaScope",
      description: "A mobile educational platform utilizing a custom 'Kaalaman Skill Tree' to provide engaging, curriculum-aligned learning experiences.",
      tech: ["React Native", "Supabase", "Node.js"],
      github: "https://github.com/cabandonjordan/Tuklascope.git",
      live: "#"
    },
    {
      title: "Mort",
      description: "An atmospheric puzzle and exploratory game focused on navigating through mysterious digital environments.",
      tech: ["C++", "Game Design", "Algorithms"],
      github: "https://github.com/cabandonjordan/Mort.git",
      live: "#"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="glitch-title" data-text="FEATURED_PROJECTS">FEATURED_PROJECTS</h2>
        <div className="header-line"></div>
      </div>

      <div className="projects-grid">
        {PROJECT_DATA.map((project, index) => (
          <div className="project-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="project-top">
              <div className="folder-icon">
                {/* Pure SVG Folder Icon (No external library needed) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ff003c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                  {/* Pure SVG GitHub Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo Link">
                  {/* Pure SVG External Link Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;