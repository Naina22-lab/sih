import React from 'react';
import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection:'column',
      padding: '10px 20px',
      color: 'black',
     fontSize:'30px'
    },
    
    logo: {
      width: '100px', 
      height: '90px',
    },
    navLinks: {
      display: 'flex',
      gap: '15px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#f0f0f0',
    },
    button: {
      backgroundColor: '#ff5722',
      border: 'none',
      padding: '8px 16px',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
      borderRadius: '4px',
    },
    buttonHover: {
      backgroundColor: '#e64a19',
    },
  };
  const navigate = useNavigate() ;

  return (
    <div style={{display:'flex' , justifyContent:'space-between', alignItems:'center',marginTop:'14px',cursor:'pointer',marginBottom:"20px"}}>
     <div style={{marginLeft:'8px'}}>
     <img src={logo} alt="Logo" style={styles.logo} />
     </div>
     <div style={{display:'flex' , justifyContent:'space-between', alignItems:'center' ,gap:'2'}}>
        <div>
        <span style={{marginLeft:'4px',fontSize:"20px",fontWeight:"bold"}} onClick={() => navigate('/')}>Home</span>
        </div>
     <div>
     <span style={{marginLeft:'44px' ,marginRight:'34px',fontSize:"20px",fontWeight:"bold"}} onClick={() => navigate('/dashboard')}>Dashboard</span>
     </div>
     <div>
     <Flex gap="small" wrap>
        
    <Button type="primary" 
    style={{background:"black",width:"90px",height:"40px",marginRight:"20px"}}onClick={()=> navigate('/login')}>Login</Button>
    <Button type="primary" 
     style={{background:"black",width:"100px",height:"40px"}}
     onClick={()=> navigate('/signup')}>Signup</Button>
  </Flex>
     </div>
      
     </div>
      </div>
     
   
  );
};

export default Navbar;
