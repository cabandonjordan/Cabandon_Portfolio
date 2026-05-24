import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Projects.css';

const projectsList = [
  {
    id: 1,
    title: 'Sentry',
    type: 'BROWSER EXTENSION',
    date: 'PUBLISHED 5 MONTHS AGO',
    description: 'A collaborative team project developing a family safety browser extension. My contributions focused on frontend development and Firebase database integration.',
    techStack: [],
    link: '#', 
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'RoboQuest',
    type: 'REACT MOBILE APP',
    date: 'PUBLISHED 3 MONTHS AGO',
    description: 'A team-built educational mobile RPG. I contributed to the frontend interface design, dynamic UI elements, and Firebase database management.',
    techStack: ['React Native', 'Game Design'],
    link: '#', 
    image: 'https://images.unsplash.com/photo-1481481365942-8858d0caddd7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'TuklaScope',
    type: 'MOBILE APP',
    date: 'PUBLISHED 2 MONTHS AGO',
    description: 'A collaborative mobile educational platform for tracking student learning and progress. I partially contributed to the frontend and primarily focused on the Supabase backend architecture.',
    techStack: ['React Native'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'MORT',
    type: 'FULL STACK APP',
    date: 'PUBLISHED 1 MONTH AGO',
    description: 'A team-based comprehensive application where I served as a full-stack developer, managing both the interactive frontend interface and the Firebase database architecture.',
    techStack: ['React Native', 'Full Stack'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1506744626753-1fa44df14d28?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Aura / Remi',
    type: 'AI CONCEPT APP',
    date: 'PUBLISHED 1 WEEK AGO',
    description: 'A solo individual project. I built this AI health companion app concept entirely from the ground up, developing the complete frontend tracking interface and engineering the backend database.',
    techStack: ['React Native', 'AI Tracking', 'Full Stack'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projectsList.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projectsList.length - 1 : prev - 1));
  };

  const activeProject = projectsList[activeIndex];

  // Touch Swipe Handlers
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const getCardStyle = (index) => {
    let offset = index - activeIndex;
    const total = projectsList.length;

    // Handle seamless wrap-around visually
    if (offset < -Math.floor(total / 2)) offset += total;
    if (offset > Math.floor(total / 2)) offset -= total;

    let translateX = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 5;
    let filter = 'brightness(1)';

    if (offset === 0) {
      // Active center
      translateX = 0;
      rotateY = 0;
      scale = 1;
      opacity = 1;
      zIndex = 10;
      filter = 'brightness(1)';
    } else if (offset === -1) {
      // Prev left
      translateX = -110;
      rotateY = 35;
      scale = 0.8;
      opacity = 0.7;
      zIndex = 5;
      filter = 'brightness(0.5)';
    } else if (offset === 1) {
      // Next right
      translateX = 110;
      rotateY = -35;
      scale = 0.8;
      opacity = 0.7;
      zIndex = 5;
      filter = 'brightness(0.5)';
    } else {
      // Hidden cards (push to sides and shrink)
      translateX = offset < 0 ? -220 : 220;
      rotateY = offset < 0 ? 60 : -60;
      scale = 0.5;
      opacity = 0;
      zIndex = 1;
      filter = 'brightness(0.2)';
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale}) perspective(1200px) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      filter
    };
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>CREATIONS</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="carousel-wrapper">
        <button className="carousel-arrow" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>

        <div 
          className="carousel-container"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="carousel-track">
            {projectsList.map((project, index) => {
              const isActive = index === activeIndex;
              const cardClass = isActive ? 'carousel-item is-active' : 'carousel-item';

              return (
                <div 
                  className={cardClass} 
                  key={project.id} 
                  onClick={() => !isActive && setActiveIndex(index)}
                  style={getCardStyle(index)}
                >
                  <div className="project-card-carousel corner-borders">
                    {/* Corner Targeting Elements */}
                    <div className="corner-top-left"></div>
                    <div className="corner-top-right"></div>
                    <div className="corner-bottom-left"></div>
                    <div className="corner-bottom-right"></div>

                    <div className="project-card-overlay">
                      <span className="project-date">{project.date}</span>
                    </div>

                    <div className="project-card-image-wrapper">
                      <img src={project.image} alt={project.title} className="project-card-image" />
                    </div>

                    <div className="project-card-footer">
                      <a href={project.link} className="btn-view-live" target="_blank" rel="noopener noreferrer">
                        VIEW LIVE
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="carousel-arrow" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="project-details">
        <div className="project-details-content">
          <h3 className="project-details-title">
            <span className="title-text">{activeProject.title.toUpperCase()}</span>
            <span className="title-dots">........................</span>
          </h3>
          <p className="project-type">{activeProject.type}</p>
          <p className="project-details-description">{activeProject.description}</p>
          
          <div className="project-details-tech">
            {activeProject.techStack.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-pagination">
        <div className="pagination-line"></div>
        <div className="pagination-indicator">
          {activeIndex + 1}/{projectsList.length}
        </div>
        <div className="pagination-line"></div>
      </div>
    </section>
  );
};

export default Projects;