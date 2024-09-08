import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Segmented,
} from 'antd';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 18, // Adjust this to make the input fields bigger
    },
  },
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '300px', // Make the input fields take the full width
    height:'40px',
    marginLeft:'10px',
  },
  button: {
    width: '300px', // Make the button take the full width of the div
    marginTop: '20px',
  },
};

const App = () => {
  const [componentVariant, setComponentVariant] = useState('filled');

  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };

  return (
    <div>
      <h2 style={styles.container}>SignUp</h2>
      <Form
        {...formItemLayout}
        onValuesChange={onFormVariantChange}
        variant={componentVariant}
        style={{
          maxWidth: 600,
          margin: '0 auto',
        }}
        initialValues={{
          variant: componentVariant,
        }}
      >
        <Form.Item
          label="Name"
          name="Input"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <Input style={styles.input} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <Input style={styles.input} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <Input style={styles.input} />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name=" confirm password"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <Input style={styles.input} />
        </Form.Item>
        
        <Form.Item
          label="Gender"
          name="Select"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <Select style={styles.input} placeholder="Select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="female">Prefer Not to say</Select.Option>
          </Select>
        </Form.Item>

       
        
        <Form.Item
          label="DOB"
          name="DatePicker"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <DatePicker style={styles.input} />
        </Form.Item>

       

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 18, 
          }}
        >
            <a href="/"> <Button type="primary" style={{background:"black",height:"40px",width:"200px",marginLeft:"40px"}}>
            Sign Up
          </Button></a>
         
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
