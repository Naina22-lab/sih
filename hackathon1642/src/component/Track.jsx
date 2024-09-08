// import React from 'react';

// function Track() {
//   return (
//     <div style={styles.trackingContainer}>
     
//       <div style={styles.trackingStepCompleted}>
//         <span style={styles.stepIconCompleted}>✔</span>
//         <div>
//           <strong>Registered Successfully</strong>
//           <p>Your request has been placed, Mon 9 Sep</p>
//         </div>
//       </div>

//       <div style={styles.trackingStep}>
//         <span style={styles.stepIconPending}>◯</span>
//         <div>
//           <strong>Verification of Document</strong>
//           <p>Verification will be on 15 Sep</p>
//         </div>
//       </div>

//       <div style={styles.trackingStep}>
//         <span style={styles.stepIconPending}>◯</span>
//         <div>
//           <strong>DPIIT Recognition Badge</strong>
//         </div>
//       </div>

//       <div style={styles.trackingStep}>
//         <span style={styles.stepIconPending}>◯</span>
//         <div>
//           <strong>StartUp verified Successfully</strong>
//         </div>
//       </div>

//       <a href="#" style={styles.seeAllUpdates}>See All Updates</a>
//     </div>
//   );
// }

// // Styles for the component
// const styles = {
//   trackingContainer: {
//     border: '1px solid #ddd',
//     padding: '20px',
//     borderRadius: '5px',
//     backgroundColor: '#fff',
//     width: '300px',
//     margin: '20px auto'
//   },
//   trackingStep: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '15px'
//   },
//   trackingStepCompleted: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '15px',
//     backgroundColor: '#e6f7e6', // Light green background for completed steps
//     padding: '5px',
//     borderRadius: '5px'
//   },
//   stepIconCompleted: {
//     color: 'green',
//     marginRight: '10px',
//     fontSize: '20px'
//   },
//   stepIconPending: {
//     color: '#ddd',
//     marginRight: '10px',
//     fontSize: '20px'
//   },
//   seeAllUpdates: {
//     color: '#007BFF',
//     textDecoration: 'none',
//     display: 'block',
//     textAlign: 'center',
//     marginTop: '10px'
//   }
// };

// export default Track;
import React from 'react';

function Track() {
  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.header}>Application Tracking</h2>
      <div style={styles.trackingContainer}>
        <div style={styles.trackingStepCompleted}>
          <span style={styles.stepIconCompleted}>✔</span>
          <div>
            <strong style={styles.stepTitle}>Registered Successfully</strong>
            <p style={styles.stepDescription}>Your request has been placed, Mon 9 Sep</p>
          </div>
        </div>

        <div style={styles.trackingStep}>
          <span style={styles.stepIconPending}>◯</span>
          <div>
            <strong style={styles.stepTitle}>Verification of Document</strong>
            <p style={styles.stepDescription}>Verification will be on 15 Sep</p>
          </div>
        </div>

        <div style={styles.trackingStep}>
          <span style={styles.stepIconPending}>◯</span>
          <div>
            <strong style={styles.stepTitle}>DPIIT Recognition Badge</strong>
          </div>
        </div>

        <div style={styles.trackingStep}>
          <span style={styles.stepIconPending}>◯</span>
          <div>
            <strong style={styles.stepTitle}>StartUp verified Successfully</strong>
          </div>
        </div>

        <a href="#" style={styles.seeAllUpdates}>See All Updates</a>
      </div>
    </div>
  );
}

// Updated styles for the dashboard component
const styles = {
  dashboardContainer: {
    backgroundColor: '#f4f6f8',
    padding: '30px',
    borderRadius: '10px',
    width: '600px',
    margin: '40px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  header: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    fontWeight: '600'
  },
  trackingContainer: {
    border: '1px solid #ddd',
    padding: '30px',
    borderRadius: '8px',
    backgroundColor: '#fff'
  },
  trackingStep: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    borderBottom: '1px solid #ddd'
  },
  trackingStepCompleted: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#e6f7e6',
    padding: '10px',
    borderRadius: '8px',
    borderBottom: '1px solid #ddd'
  },
  stepIconCompleted: {
    color: 'green',
    marginRight: '15px',
    fontSize: '30px',
    fontWeight: 'bold'
  },
  stepIconPending: {
    color: '#bbb',
    marginRight: '15px',
    fontSize: '30px',
    fontWeight: 'bold'
  },
  stepTitle: {
    fontSize: '20px',
    color: '#333',
    fontWeight: '600'
  },
  stepDescription: {
    fontSize: '16px',
    color: '#666',
    marginTop: '4px'
  },
  seeAllUpdates: {
    color: '#007BFF',
    textDecoration: 'none',
    display: 'block',
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: '600'
  }
};

export default Track;
