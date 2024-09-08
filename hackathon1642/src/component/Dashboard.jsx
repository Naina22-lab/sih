import React from 'react';
import { Button, Typography } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  const companyData = {
    companyName: "Tech Innovators",
    founderName: "Jane Doe",
    coFounderName: "John Smith",
    email: "contact@techinnovators.com",
    domain: "Tech Education",
  };
  const handleTrack=()=>{
    navigate('/track')
  }
  const handlePost=()=>{
    navigate('/postapproval')
  }

  return (
   <div style={{
    backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2v_80ripYUoxtWEsKYtLd1YksDkS4IuRmg&s')`,
    minHeight:"100vh",
    width:"100vw",
    background:"cover",
    margin:'0,0'
   }}>
       <div
      style={{
        maxWidth: 600,
        margin: 'auto',
        padding: '40px',
        textAlign: 'center',
        border: '2px solid #ccc',
        borderRadius: '15px',
        backgroundColor: 'beige',
        boxShadow: '0 14px 18px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Title level={2} style={{ fontFamily: 'Ariel', marginBottom: '80px' ,fontSize:"40px"}}>
        WELCOME TO DASHBOARD
      </Title>

      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Text strong style={{ display: 'block', marginBottom: '18px',fontSize:"25px" }}>
          StartUp Name: {companyData.companyName}
        </Text>
        <Text strong style={{ display: 'block', marginBottom: '18px',fontSize:"20px" }}>
          Founder Name: {companyData.founderName}
        </Text>
        <Text strong style={{ display: 'block', marginBottom: '18px',fontSize:"20px" }}>
          CO-Founder Name: {companyData.coFounderName}
        </Text>
        <Text strong style={{ display: 'block', marginBottom: '18px',fontSize:"20px" }}>
          Email-ID: {companyData.email}
        </Text>
        <Text strong style={{ display: 'block', marginBottom: '18px',fontSize:"20px" }}>
          Domain: {companyData.domain}
        </Text>
      </div>

      <Button
        type="primary"
        size="large"
        style={{ padding: '10px 30px', fontSize: '18px', borderRadius: '10px',background:"black",height:"50px",marginRight:"30px"}}
        onClick={handleTrack}
      >
        Track Your Application Status
      </Button>
      <Button
        type="primary"
        size="large"
        style={{ padding: '10px 30px', fontSize: '18px', borderRadius: '10px',background:"black",height:"50px" }}
        onClick={handlePost}
      >
        Post Approval Status
      </Button>
    </div>
   </div>
  );
};

export default Dashboard;
