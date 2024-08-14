import {type ReactNode, useMemo} from "react";
import {ConfigProvider, theme} from "antd";

const AntDesignProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const primaryColor = '#0D9490'

  return (
    <ConfigProvider
      theme={{
        // algorithm: [theme.compactAlgorithm],
        // algorithm: [theme.darkAlgorithm],
        // Global Tokens
        token: {
          colorPrimary: primaryColor,
          borderRadius: 2,
          controlHeight: 36,
        },
        // Component Tokens
        components: {
          Button: {
            paddingInline: '25px',
          },
          // Menu: {
          //   darkItemBg: '#10384f',
          //   darkSubMenuItemBg: '#284c61',
          // },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default AntDesignProvider;
