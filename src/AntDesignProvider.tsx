import {ReactElement, useState, type ReactNode} from "react";
import {ConfigProvider, theme} from "antd";
import React from "react";

const AntDesignProvider: React.FC<{children: ReactElement}> = ({children}) => {
  const primaryColor = '#0D9490'
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ConfigProvider
      theme={{
        // algorithm: [theme.compactAlgorithm],
        algorithm: [isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm],

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
        },
      }}
    >
      {React.cloneElement(children, { isDarkMode, setIsDarkMode })}
    </ConfigProvider>
  );
};
export default AntDesignProvider;
