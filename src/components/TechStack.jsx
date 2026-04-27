import React from 'react';
import '../styles/TechStack.css';

const TechStack = () => {
  const skills = [
    { category: "LANGUAGES", items: ["C", "C#", "Python", "JavaScript", "TypeScript"] },
    { category: "FRONTEND", items: ["React", "Next.js", "Flutter"] },
    { category: "BACKEND", items: ["Node.js", "Firebase", "Supabase"] },
    { category: "AI & DATA", items: ["TensorFlow", "Pinecone", "Gemini AI"] }
  ];

  return (
    <section className="stack-section" id="stack">
      <h2 className="section-title">CORE_MODULES</h2>
      <div className="stack-grid">
        {skills.map((skill, index) => (
          <div key={index} className="stack-card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;