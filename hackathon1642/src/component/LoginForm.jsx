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
    fontFamily:'bold'
  },
  input: {
    width: '300px', // Make the input fields take the full width
    height:'40px'
  },
  button: {
    width: '150px', // Make the button take the full width of the div
    marginTop: '20px',
    marginLeft:'60px'
  },
};

const App = () => {
  const [componentVariant, setComponentVariant] = useState('filled');

  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };

  return (
    <div>
      <h2 style={styles.container}>Login</h2>
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
          label="Email"
          name="InputNumber"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <InputNumber style={styles.input} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="InputNumber"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <InputNumber style={styles.input} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 18, 
          }}
        >
            <a href="/"><Button type="primary" style={{background:"black",height:"40px",width:"190px",marginLeft:"30px"}}>
            Login
          </Button></a>
          
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
