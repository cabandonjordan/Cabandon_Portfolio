import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Projects.css';

// GitHub icon SVG
const GithubIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const projectsList = [
  {
    id: 1,
    title: 'RoboQuest',
    type: '2D Game App',
    tags: ['Game Development', 'Physics Engine', 'JavaScript'],
    description: 'A dynamic 2D platformer game featuring intelligent enemy AI, physics-based mechanics, and progressive level design. Developed with custom collision detection and particle effects systems for immersive gameplay.',
    techStack: ['JavaScript', 'Canvas API', 'Physics Engine'],
    link: '#', 
    caseStudyLink: '#',
    image: 'https://images.unsplash.com/photo-1556742212-5b321f3c261d?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: 2,
    title: 'MORT Study Buddy',
    type: 'Web Application',
    tags: ['React', 'Node.js', 'Education'],
    description: 'An intelligent study companion platform that leverages spaced repetition and adaptive learning algorithms. Features real-time progress tracking, collaborative study groups, and AI-powered question generation for effective knowledge retention.',
    link: '#',
    caseStudyLink: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500&h=350'
  },
  {
    id: 3,
    title: 'Sentry',
    type: 'Browser Extension',
    tags: ['Browser Extension', 'Firebase', 'React'],
    description: 'A comprehensive family safety browser extension providing real-time monitoring and secure device management. Architected with Firebase for instantaneous database syncing across multiple devices with end-to-end encryption protocols.',
    techStack: ['React', 'Firebase', 'JavaScript'],
    link: '#',
    caseStudyLink: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: 4,
    title: 'Tuklascope',
    type: 'Mobile Application',
    tags: ['React Native', 'iOS/Android', 'Real-time'],
    description: 'A cross-platform mobile application enabling seamless real-time data visualization and analytics. Built with React Native for optimal performance across iOS and Android with native module integrations.',
    link: '#',
    caseStudyLink: '#',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?auto=format&fit=crop&q=80&w=500&h=350'
  },
  {
    id: 5,
    title: 'REMI',
    type: 'Mobile Application',
    tags: ['Flutter', 'Firebase', 'Machine Learning'],
    description: 'An intelligent mobile companion app featuring personalized recommendations powered by machine learning. Optimized for performance with offline-first architecture and real-time cloud synchronization capabilities.',
    link: '#',
    caseStudyLink: '#',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500&h=350'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projectsList[activeIndex];

  const handleNavigate = (direction) => {
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % projectsList.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length);
    }
  };

  const otherProjects = projectsList.filter((_, idx) => idx !== activeIndex);

  return (
    <section className="projects-section" id="projects">
      {/* Header */}
      <div className="projects-header">
        <h2>
          Selected <span className="highlight-peach">Works</span>
        </h2>
      </div>

      {/* Description */}
      <p className="projects-description">
        A collection of precision-engineered digital experiences, ranging from comprehensive web applications to specialized browser extensions. Built with focus on performance, security, and refined aesthetics.
      </p>

      {/* Card Stack Container */}
      <div className="card-stack-container">
        {/* Stacked Card Effect */}
        <div className="card-stack-wrapper">
          {/* Background layers for depth */}
          <div className="stack-layer stack-layer-1"></div>
          <div className="stack-layer stack-layer-2"></div>

          {/* Main Featured Card */}
          <div className="featured-card-main" key={activeProject.id}>
            <div className="featured-card-image">
              <img src={activeProject.image} alt={activeProject.title} />
              <div className="featured-card-overlay"></div>
            </div>

            {/* Project Info Overlay */}
            <div className="featured-card-content">
              <div className="card-tags">
                {activeProject.tags.map((tag, i) => (
                  <span key={i} className="tag-badge">{tag}</span>
                ))}
              </div>

              <h3 className="card-title">{activeProject.title}</h3>
              <p className="card-type">{activeProject.type}</p>

              <p className="card-description">
                {activeProject.description}
              </p>

              <a href={activeProject.caseStudyLink} className="card-link">
                View GitHub <GithubIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="card-navigation">
          <button 
            className="nav-button nav-prev" 
            onClick={() => handleNavigate('prev')}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="project-counter">
            {activeIndex + 1} / {projectsList.length}
          </span>
          <button 
            className="nav-button nav-next" 
            onClick={() => handleNavigate('next')}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Other Endeavors Section */}
      <div className="other-endeavors">
        <h3 className="endeavors-title">Other Endeavors</h3>
        
        <div className="endeavors-grid">
          {otherProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="endeavor-card"
              onClick={() => setActiveIndex(projectsList.indexOf(project))}
            >
              <div className="endeavor-image">
                <img src={project.image} alt={project.title} />
                <div className="endeavor-overlay"></div>
              </div>

              <div className="endeavor-content">
                <p className="endeavor-type">{project.type}</p>
                <h4 className="endeavor-title">{project.title}</h4>
                <p className="endeavor-description">{project.description}</p>
                <a href={project.link} className="endeavor-link">
                  GitHub <GithubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;