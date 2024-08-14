import {ConfigProvider, Menu, MenuProps} from 'antd';
import React from 'react';
import chroma from "chroma-js";

interface CmMenuProps extends MenuProps {
  background: string;
  selectedItemBackground?: string;
  selectedItemColor?: string;
}
const CmMenu = ({ background, selectedItemBackground, selectedItemColor, ...props }: CmMenuProps) => {

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            // dark
            darkItemBg: background,
            darkSubMenuItemBg: chroma(background).darken(0.5).hex(),
            darkItemSelectedBg:
              selectedItemBackground ||
              chroma(background).brighten(0.5).hex(),
            // light
            itemBg: background,
            subMenuItemBg: chroma(background).darken(0.5).hex(),
            itemSelectedBg: selectedItemBackground || chroma(background).brighten(0.5).hex(),
            ...(selectedItemColor && {itemSelectedColor: selectedItemColor}),
            itemActiveBg: selectedItemBackground && chroma(selectedItemBackground).brighten(0.9).hex()
          },
        },
      }}
    >
      <div style={{ width: 256 }}>
        <Menu {...props} />
      </div>
    </ConfigProvider>
  );
};

export default CmMenu;