import React from 'react';
import { Row, Col, Statistic } from 'antd';

const formatter = (value) => new Intl.NumberFormat().format(value);

const DashboardStats = () => {
  const styles = {
    statistic: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginBottom: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    value: {
      fontSize: '24px',
    },
  };

  return (
    <Row gutter={100} justify="space-between">
      <Col span={6}>
        <Statistic
          title={<div style={styles.title}>Companies Registered</div>}
          value={5000}
          formatter={formatter}
          valueStyle={styles.value}
        />
      </Col>
      <Col span={8}>
        <Statistic
          title={<div style={styles.title}>Account Balance (CNY)</div>}
          value={112893}
          precision={2}
          formatter={formatter}
          valueStyle={styles.value}
        />
      </Col>
      <Col span={8}>
        <Statistic
          title={<div style={styles.title}>Account Balance (CNY)</div>}
          value={112893}
          precision={2}
          formatter={formatter}
          valueStyle={styles.value}
        />
      </Col>
    </Row>
  );
};

export default DashboardStats;
