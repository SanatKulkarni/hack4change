import React from 'react';
import styled from 'styled-components';
import Dashboard from '../components/Dashboard';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #1890ff;
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  background-color: #001529;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const RegistrationPage = () => {
  return (
    <PageContainer>
      <Header>
        <h1>Partnership Firm Registration Dashboard</h1>
      </Header>
      
      <main>
        <Dashboard />
      </main>
      
      <Footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </Footer>
    </PageContainer>
  );
};

export default RegistrationPage;
