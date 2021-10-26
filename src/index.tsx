import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';

ReactDOM.render(
  <Router>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
