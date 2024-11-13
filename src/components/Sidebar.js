import React from 'react';

const Sidebar = ({ profile }) => (
  <div className="col-md-3 col-lg-2 bg-light p-3 sidebar">
    <img src={`${process.env.PUBLIC_URL}/Avatar/avatar2.png`} alt="Profile" className="img-fluid rounded-circle profile-img mb-3 d-block mx-auto" />
    <h2 className="text-center">{profile.name}</h2>
    <p className="text-center">{profile.title}</p>
    <p className="text-center">@{profile.university}</p>
    <h5 className="mt-4">Contact</h5>
    <p>Email: {profile.email}<br />Location: {profile.location}</p>
    <h5 className="mt-4">Skills</h5>
    <ul className="list-unstyled">
      {profile.skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
  </div>
);

export default Sidebar;
