import React, { useState } from 'react';
import './Navbar.css';
import mentorImg from './mentor.png';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

import Placement from '../pages/Placement';
import HumanDetection from '../pages/HumanDetection'; // if it exists

function Navbar() {
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

  const openProject = (name) => {
    setActiveProject(name);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  const renderProjectComponent = () => {
    switch (activeProject) {
      case 'Placement Predictor':
        return <Placement />;
      case 'Human Detection':
        return <HumanDetection />;
      default:
        return null;
    }
  };

  const projects = [
    { name: 'Placement Predictor' },
    { name: 'Human Detection' },
  ];

  return (
    <div className="navbar-container">
  <div className="header" onClick={() => navigate('/')}>
    <img src={mentorImg} alt="Hanumat Lal Vishwakarma" className="mentor-img" />
    <div className="text-info">
      <h1 className="name">HANUMAT LAL VISHWAKARMA</h1>
      <p className="tagline">Software Engineer @Rakuten Group Inc. Tokyo, Japan</p>
      <p>Founder @IITJEE MATHX (visit here: <a href="https://www.iitjeemathx.com/">https://www.iitjeemathx.com/</a>)</p>
      <a href="https://www.linkedin.com/in/hlvcse/" target="_blank" rel="noopener noreferrer">
        <button className="contact-button">Visit my LinkedIn Page</button>
      </a>
      <a href="mailto:hlvcse@gmail.com" target="_blank" rel="noopener noreferrer">
        <button className="contact-button">Email ID: hlvcse@gmail.com</button>
      </a>
    </div>
  </div>

  <div className="navbar-links">
    <div className="project-links">
      {projects.map((project) => (
        <button
          key={project.name}
          className="project-link"
          onClick={() => openProject(project.name)}
        >
          {project.name}
        </button>
      ))}
    </div>

    <div className="external-links">
      <a href="https://www.iitjeemathx.com/" target="_blank" rel="noopener noreferrer">
        <button className="external-link-btn">IITJEE MATHX Website</button>
      </a>
    </div>
  </div>

  <Modal isOpen={!!activeProject} onClose={closeModal}>
    {renderProjectComponent()}
  </Modal>
</div>


  );
}

export default Navbar;
