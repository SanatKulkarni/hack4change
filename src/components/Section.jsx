import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const SectionContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  flex: 1;
  min-width: 300px;
`;

const SectionTitle = styled.h2`
  color: #444;
  margin-bottom: 15px;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const TaskName = styled.span`
  margin-left: 10px;
  color: ${props => props.completed ? '#888' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;

const Section = ({ title, tasks, onToggleTask }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id} onClick={() => onToggleTask(task.id)}>
            {task.completed ? <FaCheckCircle color="#4CAF50" /> : <FaCircle color="#9E9E9E" />}
            <TaskName completed={task.completed}>{task.name}</TaskName>
          </TaskItem>
        ))}
      </TaskList>
    </SectionContainer>
  );
};

export default Section;
