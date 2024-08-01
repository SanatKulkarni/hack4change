import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import BusinessTypes from './pages/BusinessTypes';
import Dashboard from './components/Dashboard';
import PartnershipDeedDrafting from './components/PartnershipDeedDrafting';
import Chatbot from './components/Chatbot';

const App = () => {
  const [sections, setSections] = useState([
    {
      title: 'Paperwork',
      tasks: [
        { id: 1, name: 'Partnership Deed Drafting', completed: false },
        { id: 2, name: 'PAN Card Application', completed: false },
        { id: 3, name: 'Address Proof Collection', completed: false },
        { id: 4, name: 'Bank Account Opening', completed: false },
      ],
    },
    {
      title: 'Printing',
      tasks: [
        { id: 5, name: 'Deed Printing', completed: false },
        { id: 6, name: 'Stamp Duty Payment', completed: false },
        { id: 7, name: 'Notarization of Documents', completed: false },
      ],
    },
    {
      title: 'Completed',
      tasks: [
        { id: 8, name: 'Registration Certificate Issuance', completed: false },
        { id: 9, name: 'Partnership Firm Establishment Notification', completed: false },
      ],
    },
  ]);

  const toggleTaskCompletion = (sectionIndex, taskId) => {
    setSections(prevSections => {
      return prevSections.map((section, index) => {
        if (index === sectionIndex) {
          return {
            ...section,
            tasks: section.tasks.map(task => 
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          };
        }
        return section;
      });
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/business-types" element={<BusinessTypes />} />
        <Route path="/dashboard" element={<Dashboard sections={sections} toggleTaskCompletion={toggleTaskCompletion} />} />
        <Route path="/partnership-deed-drafting" element={<PartnershipDeedDrafting onComplete={() => toggleTaskCompletion(0, 1)} />} />
        <Route path="/ai" element={<Chatbot />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
