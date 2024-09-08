// import React, { useState } from "react";
// import { Form, Input, Button, Upload, Spin } from "antd";
// import { InboxOutlined } from "@ant-design/icons";
// import greenn from '../assets/greenn.jpg'
// import { useNavigate } from "react-router-dom";


// const { Dragger } = Upload;

// const Register = () => {
//   const [loading, setLoading] = useState(false);
//   const [verified, setVerified] = useState(false);
//   const navigate = useNavigate();
  

//   const handleVerify = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setVerified(true);
//     }, 3000); 
//   };

//   // const handleRegisterClick = () => {
//   //   navigate('/dashboard'); 
//   // };

//   const onFinish = (values) => {
//     console.log("Form values: ", values);
//   };

//   return (
//     <div style={{ maxWidth: 700, margin: "auto", padding: "20px", border: "4px solid #ccc", borderRadius: "10px",  backgroundColor: "white",
//       boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
//       transform: "scale(1.05)", 
//       transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//       position: "relative",
//       zIndex: 1000,}}>
//       {verified ? (
//         <div style={{ textAlign: "center" }}>
//           <img 
//           src={greenn}
//           alt="Verified Startup" 
//           style={{ width: "150px", marginBottom: "20px" }} 
//           />
//           <h2>Your Startup is Successfully Verified</h2>
//           <Button type="primary"
//           style={{height:"50px",width:"190px",background:"black",fontSize:"20px"}}>Register Now</Button>
//         </div>
//       ) : (
//         <Form layout="vertical" onFinish={onFinish}>
//           <h2 style={{ textAlign: "center" ,fontWeight:"bold",fontSize:"35px"}}>Register Your StartUp</h2>

//           <Form.Item name="startupName" label="StartUp Name" rules={[{ required: true, message: "Please input the startup name!" }]}>
//             <Input  
//             placeholder="Enter Your StartUp Name"/>
//           </Form.Item>
          
//           <Form.Item name="founderName" label="Founder Name" rules={[{ required: true, message: "Please input the founder's name!" }]}>
//             <Input
//             placeholder="Enter Founder's Full Name" />
//           </Form.Item>

//           <Form.Item name="founderEmail" label="Founder Email" rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}>
//             <Input  
//             placeholder="Enter Founder's E-mail"/>
//           </Form.Item>

//           <Form.Item name="founderContact" label="Founder Contact No." rules={[{ required: true, message: "Please input the contact number!" }]}>
//             <Input 
//             placeholder="Enter Founder's Contact Number"/>
//           </Form.Item>

//           <Form.Item name="CofounderName" label=" Co Founder Name" rules={[{ required: true, message: "Please input the founder's name!" }]}>
//             <Input 
//             placeholder="Enter Co Founder's Full Name"/>
//           </Form.Item>

//           <Form.Item name="CofounderEmail" label=" Co Founder Email" rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}>
//             <Input
//             placeholder="Enter Co Founder's Email" />
//           </Form.Item>

//           <Form.Item name="CofounderContact" label=" Co Founder Contact No." rules={[{ required: true, message: "Please input the contact number!" }]}>
//             <Input
//              placeholder="Enter Co Founder's Contact Number"/>
//           </Form.Item>

//           <Form.Item name="domain" label="Domain Name" rules={[{ required: true, message: "Please input your Domain" }]}>
//             <Input
//              placeholder="Enter Your Domain"/>
//           </Form.Item>


//           <Form.Item name="description" label="Description" rules={[{ required: true, message: "Please input the description!" }]}>
//             <Input.TextArea rows={4}
//             placeholder="Describe your StartUp" />
//           </Form.Item>

//           <Form.Item label="Video Presentation Upload" rules={[{ required: true, message:"Upload your Presentation" }]}>
//             <Dragger name="file" multiple={false} >
//               <p className="ant-upload-drag-icon">
//                 <InboxOutlined />
//               </p>
//               <p className="ant-upload-text">Click or drag file to this area to upload</p>
//             </Dragger>
//           </Form.Item>

//           <Form.Item label="Documents Upload">
//             <Dragger name="file" multiple>
//               <p className="ant-upload-drag-icon">
//                 <InboxOutlined />
//               </p>
//               <p className="ant-upload-text">Click or drag file to this area to upload</p>
//             </Dragger>
//           </Form.Item>

//           <div style={{ display: "flex", justifyContent: "center", alignContent:"center" }}>
//             <Button onClick={handleVerify} disabled={loading} style={{background:"black", height:"40px",color:"white"}}>
//               {loading ? <Spin /> : "Verify with AI"}
//             </Button>
//           </div>
//         </Form>
//       )}
//     </div>
//   );
// };

// export default Register;










import React, { useState } from "react";
import { Form, Input, Button, Upload, Spin } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import greenn from '../assets/greenn.jpg';
import { useNavigate } from "react-router-dom";

const { Dragger } = Upload;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
    }, 3000);
  };

  const handleRegisterClick = () => {
    setRegistered(true);
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  const onFinish = (values) => {
    console.log("Form values: ", values);
  };

  return (
    // <div style={{  
    //   minHeight:'100vh',
    //   // backgroundImage: `url('https://img.freepik.com/free-vector/business-startup-with-businessman-flying-rocket_107791-9852.jpg')`, 
    //   backgroundSize: 'cover', 
    //   backgroundPosition: 'center', 
    //   display: 'flex', 
    //   justifyContent: 'center', 
    //   alignItems: 'center',
    //   padding: '20px' 
    // }}>
      <div style={{ 
        maxWidth: 700, 
        margin: "auto", 
        padding: "20px", 
        border: "4px solid #ccc", 
        borderRadius: "10px",  
        backgroundColor: "white",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
        transform: "scale(1.05)", 
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        position: "relative",
        zIndex: 1000
      }}>
        {registered ? (
          <div style={{ textAlign: "center" }}>
            <img 
              src={greenn}
              alt="Verified Startup" 
              style={{ width: "150px", marginBottom: "20px" }} 
            />
            <h2>Your Startup Registered Successfully</h2>
            <Button type="primary" style={{height:"50px",width:"200px",background:"black",fontSize:"20px"}} onClick={handleGoToDashboard}>Go to Dashboard</Button>
          </div>
        ) : verified ? (
          <div style={{ textAlign: "center" }}>
            <img 
              src={greenn}
              alt="Verified Startup" 
              style={{ width: "150px", marginBottom: "20px" }} 
            />
            <h2>Your Startup is Successfully Verified</h2>
            <Button type="primary"
              style={{height:"50px",width:"190px",background:"black",fontSize:"20px"}} onClick={handleRegisterClick}>Register Now</Button>
          </div>
        ) : (
          <Form layout="vertical" onFinish={onFinish}>
            <h2 style={{ textAlign: "center" ,fontWeight:"bold",fontSize:"35px"}}>Register Your StartUp</h2>

            <Form.Item name="startupName" label="StartUp Name" rules={[{ required: true, message: "Please input the startup name!" }]}>
              <Input placeholder="Enter Your StartUp Name"/>
            </Form.Item>
            
            <Form.Item name="founderName" label="Founder Name" rules={[{ required: true, message: "Please input the founder's name!" }]}>
              <Input placeholder="Enter Founder's Full Name" />
            </Form.Item>

            <Form.Item name="founderEmail" label="Founder Email" rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}>
              <Input placeholder="Enter Founder's E-mail"/>
            </Form.Item>

            <Form.Item name="founderContact" label="Founder Contact No." rules={[{ required: true, message: "Please input the contact number!" }]}>
              <Input placeholder="Enter Founder's Contact Number"/>
            </Form.Item>

            <Form.Item name="CofounderName" label="Co-Founder Name" rules={[{ required: true, message: "Please input the co-founder's name!" }]}>
              <Input placeholder="Enter Co-Founder's Full Name"/>
            </Form.Item>

            <Form.Item name="CofounderEmail" label="Co-Founder Email" rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}>
              <Input placeholder="Enter Co-Founder's Email" />
            </Form.Item>

            <Form.Item name="CofounderContact" label="Co-Founder Contact No." rules={[{ required: true, message: "Please input the contact number!" }]}>
              <Input placeholder="Enter Co-Founder's Contact Number"/>
            </Form.Item>

            <Form.Item name="domain" label="Domain Name" rules={[{ required: true, message: "Please input your Domain" }]}>
              <Input placeholder="Enter Your Domain"/>
            </Form.Item>

            <Form.Item name="description" label="Description" rules={[{ required: true, message: "Please input the description!" }]}>
              <Input.TextArea rows={4} placeholder="Describe your StartUp" />
            </Form.Item>

            <Form.Item label="Video Presentation Upload" rules={[{ required: true, message: "Upload your Presentation" }]}>
              <Dragger name="file" multiple={false}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </Form.Item>

            <Form.Item label="Documents Upload">
              <Dragger name="file" multiple>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
              <Button onClick={handleVerify} disabled={loading} style={{background:"black", height:"40px",color:"white"}}>
                {loading ? <Spin /> : "Verify with AI"}
              </Button>
            </div>
          </Form>
        )}
      </div>
    // </div>
  );
};

export default Register;
