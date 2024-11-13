import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Offcanvas, Navbar, Nav, Container, Button } from 'react-bootstrap';

const Sidebar = ({ profile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Navbar with Sidebar Toggle Button */}
      <Navbar bg="light" expand="lg" className="d-block d-lg-none">
  <Container>
    <Navbar.Brand href="http://portfolio.parishith.live"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {/* Add any additional navbar items here if needed */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




      {/* Sidebar for medium screens and up */}
      <div className="col-md-3 col-lg-2 bg-light p-3 sidebar d-none d-md-block vh-100">
        <img 
          src={`${process.env.PUBLIC_URL}/Avatar/avatar2.png`} 
          alt="Profile" 
          className="img-fluid rounded-circle profile-img mb-3  d-block mx-auto" 
        />
        <h2 className="text-center">{profile.name}</h2>
        {/* <p className="text-center mb-0">{profile.title}</p> */}
        <p className="text-center mb-0">undergraduate</p>
        <p className="text-center mb-0"><a href = "https://cse.mrt.ac.lk/">Computer Science and Engineering</a> </p>
    <p className="text-center">     @ <a href = "https://uom.lk/">{profile.university}</a></p>
        
        <h5 className="mt-4 text-center">Contact</h5>
        <p className="text-center">
          Email: <a href = {profile.email}>{profile.email}</a><br />
          Location: {profile.location}
        </p>
        
        <h5 className="mt-4 text-center">Skills</h5>
        <ul className="list-unstyled text-center">
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        {/* Social Links */}
        <h5 className="mt-4 text-center">Connect with me</h5>
        <div className="text-center">
  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
    <i className="bi bi-linkedin text-secondary" style={{ fontSize: '1.5rem' }}></i>
  </a>
  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mx-2">
    <i className="bi bi-github text-secondary" style={{ fontSize: '1.5rem' }}></i>
  </a>
  <a href={profile.facebook} target="_blank" rel="noopener noreferrer" className="mx-2">
    <i className="bi bi-facebook text-secondary" style={{ fontSize: '1.5rem' }}></i>
  </a>
  <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="mx-2">
    <i className="bi bi-instagram text-secondary" style={{ fontSize: '1.5rem' }}></i>
  </a>
</div>

      </div>

      {/* Offcanvas Sidebar for small screens */}
      <Offcanvas show={show} onHide={handleClose} className="d-md-none" placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{profile.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img 
            src={`${process.env.PUBLIC_URL}/Avatar/avatar2.png`} 
            alt="Profile" 
            className="img-fluid rounded-circle profile-img mb-3 d-block mx-auto" 
          />
          <p className="text-center">{profile.title}</p>
          <p className="text-center">@{profile.university}</p>
          
          <h5 className="mt-4">Contact</h5>
          <p className="text-center">
            Email: {profile.email}<br />
            Location: {profile.location}
          </p>
          
          <h5 className="mt-4">Skills</h5>
          <ul className="list-unstyled text-center">
            {profile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          {/* Social Links for small screens */}
          <h5 className="mt-4">Connect with me</h5>
          <div className="text-center">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
              <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mx-2">
              <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
