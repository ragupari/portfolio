import React from 'react';

const Home = ({ profile, featuredProjects, certifications }) => (
  <div>
    <h2>Welcome to My Portfolio</h2>
    <p>I'm {profile.name}, a passionate Computer Science and Engineering undergraduate at the {profile.university}. My areas of interest include:</p>
    <ul>
      {profile.skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
    <h3 className="mt-4">Featured Projects</h3>
    <div className="row">
      {featuredProjects.map((project, index) => (
        <div className="col-md-6 mb-3" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <h3 className="mt-4">Certifications</h3>
    <ul className="list-group">
      {certifications.map((cert, index) => <li className="list-group-item" key={index}>{cert}</li>)}
    </ul>
  </div>
);

export default Home;
