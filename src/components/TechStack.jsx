import React from 'react';
import { Cpu, Layout, Database, Wrench } from 'lucide-react';
import '../styles/TechStack.css';

const TechStack = () => {
  // Custom OS-themed titles, avoiding generic picture reference names: new
  const SYSTEM_MODULES = [
    {
      title: "Logic Processing",
      icon: <Cpu className="category-icon text-[#ff003c]" />,
      skills: [
        { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://devdocs.io/c/" },
        { name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://docs.python.org/3/" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
      ]
    },
    {
      title: "Interface Rendering",
      icon: <Layout className="category-icon text-[#ff003c]" />,
      skills: [
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev/" },
        { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org/docs" },
        { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", url: "https://docs.flutter.dev/" },
        { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/docs" }
      ]
    },
    {
      title: "Data & Architecture",
      icon: <Database className="category-icon text-[#ff003c]" />,
      skills: [
        { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org/en/docs/" },
        { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com/docs" },
        { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", url: "https://supabase.com/docs" },
        { name: "Pinecone", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://docs.pinecone.io/" } // Using a placeholder devicon until Pinecone is officially added to their CDN
      ]
    },
    {
      title: "AI & Engineering Tools",
      icon: <Wrench className="category-icon text-[#ff003c]" />,
      skills: [
        { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://www.tensorflow.org/api_docs" },
        { name: "Gemini AI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", url: "https://ai.google.dev/docs" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/doc" },
        { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/docs" },
        { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://docs.github.com/" }
      ]
    }
  ];

  return (
    <section className="stack-section" id="stack">
      <h2 className="section-title">CORE_MODULES</h2>
      <div className="stack-grid">
        {SYSTEM_MODULES.map((category, index) => (
          <div key={index} className="stack-category-card">
            <div className="category-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="icon-grid">
              {category.skills.map((skill, i) => (
                <a key={i} href={skill.url} target="_blank" rel="noreferrer" className="skill-icon-card">
                  <img src={skill.src} alt={skill.name} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;