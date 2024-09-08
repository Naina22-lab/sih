import React from "react";
import Navbar from "./Navbar.jsx";
import Countup from "./CountUp.jsx";
import Footer from "./Footer.jsx";
import Webinar from "./Webinar.jsx";
import { Button, Flex } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import Slider from "./Slider.jsx";
import { useNavigate } from "react-router-dom";
const columns = [
  {
    title: "S.NO.",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Name of Startup",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    render: (text) => <a href={text}>{text}</a>,
  },
  {
    title: "", // No title for this column
    key: "viewMore",
    render: (_, record) => (
      <a href="/startupdetail">
        <Button type="link" onClick={() => handleViewMore(record.key)}>
          View More
        </Button>
      </a>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "DYLOG ITES PRIVATE LIMITED",
    email: "Dylogit@gmail.com",
    address: "",
    website: "",
  },
  {
    key: "2",
    name: "GREEN LIFE ORGANICS",
    email: "green.life.organics.satna@gmail.com",
    address: "456 Innovation Ave, London, UK",
    website: "www.greenlifeorganics.in",
  },
  {
    key: "3",
    name: "NETFRAME SOFTWARE INDIA PRIVATE LIMITED",
    email: "sha2kar@gmail.com",
    address: "789 Enterprise Rd, Sydney, AU",
    website: "www.netframe.com",
  },
];
const Home = () => {
  const navigate = useNavigate();
  const styles = {
    button: {
      width: "180px",
      height: "45px",
      marginTop: "20px",
      marginLeft: "60px",
    },
  };
  return (
    <div>
      {/* This is an empty component */}
      <Navbar></Navbar>
      {/* <hr /> */}
      <div
        style={{
          height: "350px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#cbd5e1",
          fontSize: "16px",
          lineHeight: "20px",
        }}
      >
        <div
          style={{
            height: "60%",
            width: "100%",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontWeight: "2000px", fontSize: "80px" }}>
            Turn Your Idea into Reality?
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button
            type="primary"
            onClick={() => navigate("/register")}
            style={{
              height: "60px",
              fontSize: "19px",
              fontWeight: "500",
              borderRadius: "10px",
              background: "black",
            }}
          >
            Register your startup <RightOutlined />{" "}
          </Button>
        </div>
      </div>
      <div
        style={{ marginTop: "20px", marginLeft: "30px", marginBottom: "40px" }}
      >
        <h2
          style={{
            color: "#0c233b",
            fontWeight: "bold",
            fontSize: "3em",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Process of Startup Registration
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "45px",
          }}
        >
          <div
            style={{
              height: "280px",
              width: "290px",
              color: "#00000099",
              padding: "16px",
              borderRadius: "16px",
              boxShadow:
                "20px 14px 18px  rgba(0, 0, 0, 0.4)" /* Adjust the box shadow as needed */,
              border: "2px solid white",
            }}
          >
            <div style={{}}>
              <img
                src="https://www.expertbells.com/service/resources/assets/uploads/process/2022-12-144045389.png"
                alt=""
                style={{
                  height: "42px",
                  width: "42px",
                  objectFit: "contain",
                  verticalAlign: "middle",
                  marginLeft: "125px",
                  marginBottom: "0px",
                }}
              />
              <h4
                style={{
                  fontSize: "25px",
                  color: "#0C233B",
                  marginTop: "-2px",
                  marginLeft: "34px",
                }}
              >
                Register as a Startup
              </h4>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "1.4",
                  color: "#000000B3",
                  marginLeft: "15px",
                  marginTop: "-23px",
                }}
              >
                The business which you have incorporated must be registered as a
                startup which is done online through Startup India website.
              </p>
            </div>
          </div>
          <div
            style={{
              height: "280px",
              width: "290px",
              color: "#00000099",
              padding: "16px",
              borderRadius: "16px",
              boxShadow: "20px 14px 18px  rgba(0, 0, 0, 0.4)",
              border: "2px solid white",
            }}
          >
            <div style={{}}>
              <img
                src="https://www.expertbells.com/service/resources/assets/uploads/process/2022-12-143169562.jpg"
                alt=""
                style={{
                  height: "42px",
                  width: "42px",
                  objectFit: "contain",
                  verticalAlign:
                    "middle" /* Changed to 'middle' for proper vertical alignment */,
                  marginLeft: "125px",
                  marginBottom: "0px",
                }}
              />
              <h4
                style={{
                  fontSize: "25px",
                  color: "#0C233B",
                  marginTop: "-2px",
                  marginLeft: "34px",
                }}
              >
                DPIIT Recognition
              </h4>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "1.4" /* Reduced line height */,
                  color: "#000000B3",
                  marginLeft: "15px",
                  marginTop: "-23px",
                }}
              >
                After creating profile on Startup India website you have to
                avail Department for Promotion of Industry and Internal Trade
                (DPIIT) Recognition. This recognition helps to avail benefits to
                startups. After getting this done, you have to fill Recognition
                Application.
              </p>
            </div>
          </div>
          <div
            style={{
              height: "280px",
              width: "290px",
              color: "#00000099",
              padding: "16px",
              borderRadius: "16px",
              boxShadow:
                "20px 14px 18px  rgba(0, 0, 0, 0.4)" /* Adjust the box shadow as needed */,
              border: "2px solid white",
            }}
          >
            <div style={{}}>
              <img
                src="https://www.expertbells.com/service/resources/assets/uploads/process/2022-12-148535882.png"
                alt=""
                style={{
                  height: "42px",
                  width: "42px",
                  objectFit: "contain",
                  verticalAlign: "middle",
                  marginLeft: "125px",
                  marginBottom: "0px",
                }}
              />
              <h4
                style={{
                  fontSize: "25px",
                  color: "#0C233B",
                  marginTop: "-2px",
                  marginLeft: "0px",
                }}
              >
                Submission of Documents
              </h4>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "1.4",
                  color: "#000000B3",
                  marginLeft: "15px",
                  marginTop: "-23px",
                }}
              >
                Documents required for registration have to be submitted for
                verification .
              </p>
            </div>
          </div>
          <div
            style={{
              height: "280px",
              width: "290px",
              color: "#00000099",
              padding: "16px",
              borderRadius: "16px",
              boxShadow: "20px 14px 18px  rgba(0, 0, 0, 0.4)",
              border: "2px solid white",
            }}
          >
            <div style={{}}>
              <img
                src="https://www.expertbells.com/service/resources/assets/uploads/process/2022-07-057233913.jpeg"
                alt=""
                style={{
                  height: "42px",
                  width: "42px",
                  objectFit: "contain",
                  verticalAlign:
                    "middle" /* Changed to 'middle' for proper vertical alignment */,
                  marginLeft: "125px",
                  marginBottom: "0px",
                }}
              />
              <h4
                style={{
                  fontSize: "25px",
                  color: "#0C233B",
                  marginTop: "-2px",
                  marginLeft: "14px",
                }}
              >
                Get Recognition Number
              </h4>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "1.4" /* Reduced line height */,
                  color: "#000000B3",
                  marginLeft: "15px",
                  marginTop: "-23px",
                }}
              >
                Final step of registration is getting the Recognition number.
                This will be done after examination of all the documents which
                is usually done in 2 days after submitting the details online.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div
        style={{ marginTop: "20px", marginLeft: "30px", marginBottom: "25px" }}
      >
        <h2
          style={{
            color: "#0c233b",
            fontWeight: "bold",
            fontSize: "3em",
            textAlign: "center",
          }}
        >
          Explore Register Startup
        </h2>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
        <div style={{ marginLeft: "550px" }}>
          <a href="/startuppage">
            <Button
              type="primary"
              style={{
                background: "black",
                height: "50px",
                width: "170px",
                alignItems: "center",
                marginLeft: "140px",
                marginBottom: "30px",
              }}
            >
              <span style={{ fontWeight: 650, fontSize: "17px" }}>
                Explore More
              </span>
            </Button>
          </a>
        </div>
      </div>
      <hr />
      <div
        style={{ marginTop: "20px", marginLeft: "30px", marginBottom: "25px" }}
      >
        <h2
          style={{
            color: "#0c233b",
            fontWeight: "bold",
            fontSize: "3em",
            textAlign: "center",
          }}
        >
          UpComing Events & Webinars
        </h2>
        <div>
          <Webinar></Webinar>
        </div>
      </div>
      <hr />
      <br />
      <br />
      {/* <hr /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "100px",
          marginRight: "100px",
          marginTop: "40px",
          marginBottom: "20px",
          marginTop: "15px",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "30px",
              marginLeft: "1px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            10000+
          </span>
          <br />
          <span style={{ fontSize: "20px", marginLeft: "15px" }}>User</span>
        </div>
        <div>
          <span
            style={{
              fontSize: "30px",
              marginLeft: "15px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            7000+
          </span>
          <br />
          <span style={{ fontSize: "20px" }}>Registration</span>
        </div>
        <div>
          <span
            style={{
              fontSize: "30px",
              marginLeft: "50px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            5000+
          </span>
          <br />
          <span style={{ fontSize: "20px" }}>Startup Registered</span>
        </div>
      </div>
      <hr />
      <div style={{ marginTop: "50px", marginBottom: "30px" }}>
        <Slider></Slider>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Wanna learn something New? </h2>
        <Button
          style={{
            background: "black",
            height: "50px",
            width: "140px",
            color: "white",
          }}
          onClick={()=>navigate('/postapproval')}
        >
          Click Here!
        </Button>
        <br />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
