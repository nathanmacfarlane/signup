import { Form, Input, Select } from 'antd';

const { TextArea } = Input;

export const GeneralInfo = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form wrapperCol={{ span: 8 }} requiredMark="optional" layout="vertical" form={form} name="general-info" onFinish={onFinish}>
      {/* TITLE */}
      <Form.Item name="Title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      {/* DESCRIPTION */}
      <Form.Item name="Description" label="Description">
        <TextArea placeholder="Not sure what to put here? Leave it blank and edit it after publishing!" />
      </Form.Item>
      {/* TAGS */}
      <Form.Item name="Tags" label="Tags" extra="Keywords here help people find your sign up.">
        <Select mode="tags" style={{ width: '100%' }} placeholder="Ex. Fall, Fundraiser, ABC Church" />
      </Form.Item>
    </Form>
  )
}