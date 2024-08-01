import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 20px 0;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #4CAF50;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <Progress progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
