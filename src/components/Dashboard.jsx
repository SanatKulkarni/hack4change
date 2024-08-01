import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import ProgressBar from './ProgressBar';

const DashboardContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px; // Add padding to the top to account for the navbar
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Dashboard = ({ sections, toggleTaskCompletion }) => {
  const navigate = useNavigate();

  const handleToggleTask = (sectionIndex, taskId) => {
    if (sectionIndex === 0 && taskId === 1) {
      // Navigate to Partnership Deed Drafting page
      navigate('/partnership-deed-drafting');
    } else {
      toggleTaskCompletion(sectionIndex, taskId);
    }
  };

  const calculateProgress = () => {
    const totalTasks = sections.reduce((acc, section) => acc + section.tasks.length, 0);
    const completedTasks = sections.reduce((acc, section) => 
      acc + section.tasks.filter(task => task.completed).length, 0);
    return (completedTasks / totalTasks) * 100;
  };

  return (
    <DashboardContainer>
      <Title>Partnership Firm Registration Progress</Title>
      <ProgressBar progress={calculateProgress()} />
      <SectionsContainer>
        {sections.map((section, index) => (
          <Section
            key={section.title}
            title={section.title}
            tasks={section.tasks}
            onToggleTask={(taskId) => handleToggleTask(index, taskId)}
          />
        ))}
      </SectionsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
