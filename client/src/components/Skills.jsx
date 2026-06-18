function Skills() {
    const skills = [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Jenkins",
      "AWS",
      "Linux",
      "Socket.io",
      "GitHub Actions",
    ];
  
    return (
      <section className="section">
  
        <h2>Skills</h2>
  
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
  
      </section>
    );
  }
  
  export default Skills;