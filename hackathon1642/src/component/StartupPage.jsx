import React from 'react';
import { Button, Input, Space, Table, Tag } from 'antd';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

const styles = {
  button: {
    width: '110px',
    height: '40px',
    marginTop: '15px',
    marginLeft: '60px',
    fontWeight: '60px',
    background:'black',
  },
};

const columns = [
  {
    title: 'S.NO.',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name of Startup',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
    render: (text) => <a href={text}>{text}</a>,
  },
  {
    title: '', // No title for this column
    key: 'viewMore',
    render: (_, record) => (
        <a href="/startupdetail"><Button type="link"  onClick={() => handleViewMore(record.key)}>
        View More
      </Button></a>
      
    ),
}
];

const data = [
  {
    key: '1',
    name: 'DYLOG ITES PRIVATE LIMITED',
    email: 'Dylogit@gmail.com',
    address: '',
    website: '',
  },
  {
    key: '2',
    name: 'GREEN LIFE ORGANICS',
    email: 'green.life.organics.satna@gmail.com',
    address: '456 Innovation Ave, London, UK',
    website: 'www.greenlifeorganics.in',
  },
  {
    key: '3',
    name: 'NETFRAME SOFTWARE INDIA PRIVATE LIMITED',
    email: 'sha2kar@gmail.com',
    address: '789 Enterprise Rd, Sydney, AU',
    website: 'www.netframe.com',
  },
  {
    key: '4',
    name: 'NETFRAME SOFTWARE INDIA PRIVATE LIMITED',
    email: 'sha2kar@gmail.com',
    address: '789 Enterprise Rd, Sydney, AU',
    website: 'www.netframe.com',
  },
  {
    key: '5',
    name: 'NETFRAME SOFTWARE INDIA PRIVATE LIMITED',
    email: 'sha2kar@gmail.com',
    address: '789 Enterprise Rd, Sydney, AU',
    website: 'www.netframe.com',
  },
  {
    key: '6',
    name: 'NETFRAME SOFTWARE INDIA PRIVATE LIMITED',
    email: 'sha2kar@gmail.com',
    address: '789 Enterprise Rd, Sydney, AU',
    website: 'www.netframe.com',
  },
  {
    key: '7',
    name: 'NETFRAME SOFTWARE INDIA PRIVATE LIMITED',
    email: 'sha2kar@gmail.com',
    address: '789 Enterprise Rd, Sydney, AU',
    website: 'www.netframe.com',
  },
  {
    key: '8',
    name: 'NETFRAME SOFTWARE INDIA PRIVATE LIMITED',
    email: 'sha2kar@gmail.com',
    address: '789 Enterprise Rd, Sydney, AU',
    website: 'www.netframe.com',
  },
  {
    key: '9',
    name: 'NETFRAME SOFTWARE INDIA PRIVATE LIMITED',
    email: 'sha2kar@gmail.com',
    address: '789 Enterprise Rd, Sydney, AU',
    website: 'www.netframe.com',
  },

];

const StartupPage = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{fontSize:"40px",fontWeight:"bold",textAlign:"center"}}>StartUp List</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Input placeholder="Basic usage" style={{ width: '25%', height: '40px', marginTop: '16px' }} />
        <Button type="primary" htmlType="submit" style={styles.button}>
          Submit
        </Button>
      </div>
      <div style={{marginTop:'25px'}}>
        <Table columns={columns} dataSource={data} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default StartupPage;
