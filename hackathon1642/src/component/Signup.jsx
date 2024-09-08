import React from 'react';
import Form from "./Form.jsx";

const Signup = () => {
  return (
     <div style={styles.container}>
      <div style={styles.formWrapper}>
        <Form />
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
    width: '500px', // Increased width
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '18px',
    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.1)',
  },
};

export default Signup;
