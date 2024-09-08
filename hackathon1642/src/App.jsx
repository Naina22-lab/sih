// import React from "react"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from "./component/Register"
// import Dashboard from "./component/Dashboard"
// import StartupPage from './component/StartupPage.jsx'
// import DetailPage from './component/DetailPage.jsx'
// import Login from './component/Login.jsx'
// import Signup from './component/Signup.jsx'
// import DetailPage from './component/DetailPage.jsx'
// import Home from './component/Home.jsx'
// import Track from "./component/Track"

// function App() {

//   return (
//     <div>
//        <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/track" element={<Track />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/startuppage" element={<StartupPage />} />
//         <Route path="/startupdetail" element={<DetailPage/>} />
//       </Routes>
//     </Router>
//     </div>
//   )
// }

// export default App






import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import StartupPage from './component/StartupPage.jsx';
import DetailPage from './component/DetailPage.jsx';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Home from './component/Home.jsx';
import Track from "./component/Track";
import PostApprove from './component/PostApprove.jsx'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track" element={<Track />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/startuppage" element={<StartupPage />} />
          <Route path="/startupdetail" element={<DetailPage />} />
          <Route path="/postapproval" element={<PostApprove />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
