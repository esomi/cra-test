import React from 'react';
import './App.css';
import {Button, Divider, Menu, Select, SelectProps, Space, theme} from "antd";
import {items} from './menuItems';
import CmMenu from "./CmMenu";
import { LuMoon, LuSun } from "react-icons/lu";
export interface AppProps {
  isDarkMode?: boolean;
  setIsDarkMode?: (isDarkMode: boolean) => void;
}
const App: React.FC<AppProps> = ({ isDarkMode=false, setIsDarkMode=()=>{} }) => {
  const options: SelectProps['options'] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  return (
    <div className="App"
         style={{ backgroundColor: isDarkMode ?'#282c34' : '#ededed', color: isDarkMode ? '#ffffff' : '#000000' }}
    >
      <div className="App-header">
        <span role="img" aria-label="logo" className="App-logo">
          🌏
        </span>
        <span>
          {/*{isDarkMode ? <Button onClick={() => setIsDarkMode(false)}>Light Mode</Button> :*/}
          {/*  <Button onClick={() => setIsDarkMode(true)}>Dark Mode</Button>}*/}
          {isDarkMode ? <Button type='text' shape='circle' size='large'
                                icon={<LuMoon size={30} />}
                                style={{ color: '#ff4848'}}
                                onClick={() => setIsDarkMode(false)} /> :
            <Button type='text' shape='circle'  size='large'
                    icon={<LuSun size={30} />}
                    style={{ color: '#ff4848'}}
                    onClick={() => setIsDarkMode(true)} />}
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
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              items={items}
            />

            <Divider type={"vertical"} />

            <CmMenu
              background="#dbdaea"
              width={256}
              selectedItemBackground="#7F9C96"
              selectedItemColor="#ff3162"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
            <CmMenu
              background="#dbdaea"
              width={256}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
            <CmMenu
              background="#10384f"
              width={256}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              items={items}
            />
            <CmMenu
              background="#4c4b63"
              width={256}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              items={items}
            />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
