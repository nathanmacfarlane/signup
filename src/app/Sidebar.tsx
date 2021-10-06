import { Menu, Layout } from 'antd';
import { CopyOutlined, MessageOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Logo } from './Logo';
import { useHistory } from 'react-router';

const { Sider } = Layout;

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { push } = useHistory();

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <Logo />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" onClick={() => push('my-signups')} icon={<CopyOutlined />}>
          My Signups
        </Menu.Item>
        <Menu.Item key="2" onClick={() => push('create-sign-up')} icon={<PlusOutlined />}>
          Create Signup
        </Menu.Item>
        <Menu.Item key="3" onClick={() => push('chat')} icon={<MessageOutlined />}>
          Chat
        </Menu.Item>
        <Menu.Item key="4" icon={<QuestionOutlined />}>
          Tutorial
        </Menu.Item>
      </Menu>
    </Sider>
  )
}