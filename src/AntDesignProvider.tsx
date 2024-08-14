import {type ReactNode, useMemo} from "react";
import {ConfigProvider, theme} from "antd";

const AntDesignProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const primaryColor = '#17b890'

  return (
    <ConfigProvider
      theme={{
        // algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
        token: {
          // Seed Token
          colorPrimary: primaryColor,
          borderRadius: 0,
          controlHeight: 36,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default AntDesignProvider;
