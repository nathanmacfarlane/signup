import React, { useState } from 'react';
import { Table, Input, InputNumber, Form } from 'antd';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  title: any;
  inputType: 'number' | 'text';
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  inputType,
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td>
      <Form.Item
        name={title}
        style={{ margin: 0 }}
        rules={[
          {
            required: true,
            message: `Please Input ${title}!`,
          },
        ]}
      >
        {inputNode}
      </Form.Item>
    </td>
  );
};

interface EditableTableProps {
  rows?: any[],
  columns?: any[]
}

export const EditableTable = ({ rows }: EditableTableProps) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);

  const columns = [
    {
      title: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      width: '40%',
      editable: true,
    }
  ];

  const mergedColumns = columns.map(col => {
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: 'text',
        title: col.title,
        editing: true,
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
      />
    </Form>
  );
};