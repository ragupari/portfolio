import React from 'react';

const Projects = ({ projects }) => (
  <div>
    <h2>My Projects</h2>
    <div className="row">
      {projects.map((project, index) => (
        <div className="col-md-6 mb-3" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
