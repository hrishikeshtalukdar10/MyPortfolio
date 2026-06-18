function Projects() {
    const projects = [
      {
        title: "Aaywaa",
        description:
          "Bank offer aggregation platform."
      },
      {
        title: "Online IDE",
        description:
          "Docker based multi-language code execution platform."
      },
      {
        title: "Offer Scraper",
        description:
          "Automated web scraping platform using Puppeteer."
      }
    ];
  
    return (
      <section className="section">
  
        <h2>Featured Projects</h2>
  
        <div className="project-grid">
  
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.title}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }
  
  export default Projects;