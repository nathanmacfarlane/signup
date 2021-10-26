import './App.css';

import { Layout, Input } from 'antd';
import { Sidebar } from './Sidebar';
import { Crumbs } from './Crumbs';
import { Switch, Route } from "react-router-dom";
import { CreateSignUp } from '../create-sign-up/CreateSignUp';
import { MySignUps } from '../my-sign-ups/MySignUps';
import { Chat } from '../chat/Chat';
import { ViewSignup } from '../view-signup/ViewSignup';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default function App() {
  const onSearch = (value: string) => console.log(value);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Search style={{ width: 300 }} placeholder="Find Something" onSearch={onSearch} enterButton />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Crumbs />
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* ROUTES */}
            <Switch>
              <Route exact path="/">
              </Route>
              <Route path="/create-sign-up">
                <CreateSignUp />
              </Route>
              <Route path="/my-signups">
                <MySignUps />
              </Route>
              <Route path="/signups/:id">
                <ViewSignup />
              </Route>
              <Route path="/chat">
                <Chat />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Nathan Macfarlane ©2021
        </Footer>
      </Layout>
    </Layout>
  );
}