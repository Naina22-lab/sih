import React from 'react';
import { Table } from 'antd';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

const columns = [
  {
    title: '',
    dataIndex: 'first',
    key: 'first',
    width: '20%', // 20% of screen width
  },
  {
    title: '',
    dataIndex: 'second',
    key: 'second',
    width: '80%', // 80% of screen width
  },
];

const data = [
  {
    key: '1',
    first: 'Leagal Name',
    second: 'DYLOG ITES PRIVATE LIMITED',
  },
  {
    key: '2',
    first: 'Address',
    second: '4th FLOOR, FLAT NO- A1/403, VISHNU HITECH CITY, University Road , HE Hospital Sub Post Office, BHOPAL, Bhopal, Madhya Pradesh',
  },
  {
    key: '3',
    first: 'City',
    second: 'BHOPAL',
  },
  {
    key: '4',
    first: 'State',
    second: 'Madhya Pradesh',
  },
  {
    key: '5',
    first: 'Country',
    second: 'India',
  },
  {
    key: '6',
    first: 'Website',
    second: '',
  },
  {
    key: '7',
    first: 'Nature of Entity',
    second: 'Private Limited Company',
  },
  {
    key: '8',
    first: 'Industry Detail',
    second: '',
  },
  {
    key: '9',
    first: 'What is the problem you are solving?',
    second: 'Our startup addresses inefficiencies through a comprehensive approach: we develop tailored software solutions, provide expert consulting, and offer scalable systems. By integrating cutting-edge technologies and optimizing processes, we enhance operational efficiency and support business growth.',
  },
  {
    key: '10',
    first: 'What is your unique selling point?',
    second: 'Our solution uniqueness lies in its integration of cutting-edge technology with bespoke customization, allowing us to deliver scalable, highly adaptable software and consulting services tailored to each client specific needs.',
  },
  {
    key: '11',
    first: 'What will be the revenue model? (Revenue Model: It is a framework for generating financial income and identifies the sources of revenue for a product or service.)',
    second: 'Our startup generates revenue through a multi-faceted model: we charge for bespoke software development, consulting services, training programs, and ongoing support. Additionally, we earn from licensing fees for our software solutions, subscription-based services, and transaction fees for software distribution and hosting.',
  },
  
];

const DetailPage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{fontSize:"40px",fontWeight:"bold",textAlign:"center"}}>StartUp Detail</h1>
      </div>
      <div style={{margin:'30px'}}>
<Table
      columns={columns}
      dataSource={data}
      pagination={false} 
      bordered
    />
    </div>
    <Footer></Footer>
    </div>
    
  );
};

export default DetailPage;
