import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import Coursework from './components/Coursework';
import data from './data/data.json';

function App() {
  const [activeTab, setActiveTab] = React.useState('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return <Projects projects={data.projects} />;
      case 'coursework':
        return <Coursework coursework={data.coursework} />;
      default:
        return <Home profile={data.profile} featuredProjects={data.projects} certifications={data.certifications} />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row flex-column flex-md-row">
        <Sidebar profile={data.profile} />
        <div className="col-md-9 col-lg-10 p-4">
          <h1 className="mb-4">My Portfolio</h1>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Projects</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'coursework' ? 'active' : ''}`} onClick={() => setActiveTab('coursework')}>Coursework</button>
            </li>
          </ul>
          <div className="mt-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
