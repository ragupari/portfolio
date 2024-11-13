import React, { useState } from 'react';

const Home = ({ profile, featuredProjects, certifications }) => {
  // State to keep track of the expanded project
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  // Function to toggle the expansion of a project
  const toggleExpandProject = (index) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <p>I'm {profile.name}, a passionate Computer Science and Engineering undergraduate at the {profile.university}. My areas of interest include:</p>
      <ul>
        {profile.skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
      <h3 className="mt-4">Featured Projects</h3>
      <div className="row">
        {featuredProjects
          .filter(project => project.featured === true) // Filter out non-featured projects
          .map((project, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div 
                className="card h-100"
                onClick={() => toggleExpandProject(index)} // Toggle the project expansion
                style={{ cursor: 'pointer' }} // Show that it's clickable
              >
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                {/* Show expanded details if this project is clicked */}
                {expandedProjectIndex === index && (
                  <div className="card-footer">
  <p className='text-center'>
    <a 
      href={project.githublink} 
      style={{ textDecoration: 'none', color: 'inherit' }} // Prevent link color and underlining
    >
      <i className="bi bi-github"></i> View on Github
    </a>
  </p>
</div>

                )}
              </div>
            </div>
          ))}
      </div>

      <h3 className="mt-4">Certifications</h3>
      <ul className="list-group">
        {certifications.map((cert, index) => (
          <li className="list-group-item" key={index}>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: 'inherit' }} // Prevent color change and underlining
            >
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
