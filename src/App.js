import React, { Component } from "react";
import { ConfigProvider } from "antd";
// import global from "../src/utils/antd-global";
import zhCN from "antd/lib/locale/zh_CN";
import "antd/dist/antd.min.css";


import { Button } from 'antd';
export default class App extends Component {
  render() {
    return (
      // {...global}
      <ConfigProvider locale={zhCN}>
        <div className="App">
          <Button  type="primary">Button</Button>
        </div>
      </ConfigProvider>
    );
  }
}
