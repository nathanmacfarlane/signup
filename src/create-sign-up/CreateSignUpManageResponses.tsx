import { Form, Checkbox, Select } from 'antd';

const { Option } = Select;

export const ManageResponses = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form wrapperCol={{ span: 20 }} form={form} requiredMark="optional" layout="vertical" name="manage-responses" onFinish={onFinish}>
      {/* RSVP Settings */}
      <Form.Item required={true}>
        <Checkbox>Keep a count of children attending</Checkbox>
        <br />
        <Checkbox>Allow attendees to RSVP guests</Checkbox>
      </Form.Item>
      {/* RSVP RESPONSE OPTIONS */}
      <Form.Item name="RSVP Responses" label="RSVP Responses" extra="Add any additional responses." required={true}>
        <Select defaultValue={["Yes", "No"]} mode="tags" style={{ width: "50%" }} tokenSeparators={[',']}>
          <Option value="Yes" key="Yes">Yes</Option>
          <Option value="No" key="No">No</Option>
          <Option value="Maybe" key="Maybe">Maybe</Option>
        </Select>
      </Form.Item>
    </Form>
  )
}