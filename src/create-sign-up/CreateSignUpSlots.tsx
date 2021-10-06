import { Button, Form, Table, Radio } from 'antd';
import { useState } from 'react';
import { EditableTable } from '../components/EditableTable';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    editable: true
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export const Slots = () => {
  const [form] = Form.useForm();

  const [signupType, setSignupType] = useState<string>();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const getExtra = () => {
    switch (signupType) {
      case "rsvp":
        return "Good for managing attendance.";
      case "items":
        return "Good for signups with specific items to bring.";
      case "slots":
        return "Good for signups with specific time slots.";
      default:
        return "";
    }
  }

  return (
    <Form form={form} layout="vertical" name="slots" onFinish={onFinish}>
      {/* DATE TYPE */}
      <Form.Item name="Signup Type" label="Sign Up Type" extra={getExtra()}>
        <Radio.Group onChange={e => setSignupType(e.target.value)} buttonStyle="solid">
          <Radio.Button value="rsvp">RSVP Only</Radio.Button>
          <Radio.Button value="items">Items</Radio.Button>
          <Radio.Button value="slots">Time Slots</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {/* GRID */}
      <Form.Item hidden={signupType !== "items"}>
        <Button>Add Item</Button>
      </Form.Item>
      <Form.Item hidden={signupType !== "items"}>
        {/* <Table dataSource={dataSource} columns={columns} /> */}
        <EditableTable />
      </Form.Item>
    </Form>
  )
}