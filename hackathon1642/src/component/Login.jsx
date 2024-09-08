import React from 'react';
import LoginForm from "./LoginForm.jsx";

const Login = () => {
  return (
    // <div style={{  
    //     minHeight:'100vh',
    //     // backgroundImage: `url('https://img.freepik.com/free-vector/illustration-startup-business_53876-18154.jpg')`, 
    //     backgroundSize: 'cover', 
    //     backgroundPosition: 'center', 
    //     display: 'flex', 
    //     justifyContent: 'center', 
    //     alignItems: 'center',
    //     padding: '20px', 
    //   }}>
    <div style={styles.container}> 
      <div style={styles.formWrapper}>
        <LoginForm />
      {/* </div> */}
    </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f0f0f0', // Optional: Add a background color
  },
  formWrapper: {
    width: '450px', // Increased width
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    // border:"2px solid black",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Login;
