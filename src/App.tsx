import React, {useState} from 'react';
import './App.css';
import {Button, SelectProps, Select, Space, theme, Divider, Menu, MenuProps} from "antd";
import { items } from './menuItems';
import CmMenu from "./CmMenu";
function App() {
  const {useToken} = theme;
  const { token } = useToken();
  console.log('colorPrimary:', token.colorPrimary);
  console.log('borderRadius:', token.borderRadius);

  const options: SelectProps['options'] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  return (
    <div className="App">
      <div className="App-header">
        <span role="img" aria-label="logo" className="App-logo">
          🌏
        </span>
      </div>
      <div className="App-content">
        <div>
          <h2>
            Ant Design Theme Customization
          </h2>
          <Space>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link" href={"https://ant.design/theme-editor"} target={"_blank"} rel={"noopener noreferrer"}>Theme Editor</Button>
          </Space>
          <Divider />
          <Space style={{ width: '100%' }} direction="vertical">
            <Select
              mode="multiple"
              allowClear
              style={{ width: '60%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              options={options}
            />
          </Space>
          <Divider />
          <Space align="start" size="large">
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              items={items}
            />

            <Divider type={"vertical"} />

            <CmMenu
              style={{ width: 256 }}
              background="#dbdaea"
              selectedItemBackground="#7F9C96"
              selectedItemColor="#ff3162"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
            <CmMenu
              style={{ width: 256 }}
              background="#dbdaea"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
            <CmMenu
              style={{ width: 256 }}
              background="#10384f"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              items={items}
            />
            <CmMenu
              background="#4c4b63"
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              items={items}
            />
            {/*<CmMenu background={token.colorPrimary} />*/}
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
