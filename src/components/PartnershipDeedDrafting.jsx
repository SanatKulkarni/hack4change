import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 18px;
  color: #333;
  margin-top: 20px;
`;

const PartnershipDeedDrafting = ({ onComplete }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    partner1Name: '',
    partner2Name: '',
    joiningDate: '',
    address: '',
    witness1Name: '',
    witness2Name: '',
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (Object.values(formData).every(value => value.trim() !== '')) {
      // Mark the task as completed
      if (typeof onComplete === 'function') {
        onComplete();
      }
      // Show the message
      setShowMessage(true);
      // Navigate back to dashboard after a short delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <PageContainer>
      <Title>Partnership Deed Drafting</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="partner1Name"
          placeholder="Partner 1 Name"
          value={formData.partner1Name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="partner2Name"
          placeholder="Partner 2 Name"
          value={formData.partner2Name}
          onChange={handleChange}
          required
        />
        <Input
          type="date"
          name="joiningDate"
          placeholder="Joining Date"
          value={formData.joiningDate}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Company Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="witness1Name"
          placeholder="Witness 1 Name"
          value={formData.witness1Name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="witness2Name"
          placeholder="Witness 2 Name"
          value={formData.witness2Name}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit Form</Button>
      </Form>
      {showMessage && (
        <Message>Coming soon. Please check Demo video :D</Message>
      )}
    </PageContainer>
  );
};

export default PartnershipDeedDrafting;
