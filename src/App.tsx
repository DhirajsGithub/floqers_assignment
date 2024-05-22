import { Button, ConfigProvider, Switch, theme } from "antd";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { generalContext } from "./provider/authContext";
function App() {
  const ctx = useContext(generalContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
    ctx?.setModeValue(!ctx.isDark);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: ctx?.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: ctx?.isDark ? "#141414" : "#f3f3f3",
          height: "100vh",
          // width: "100vw",
          overflowX: "scroll",

        }}
      >
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <Link to="/"> <Button type="link">Home</Button> </Link>
          <Switch onChange={handleClick} />
        </div>
        <Outlet />
      </div>
    </ConfigProvider>
  );
}

export default App;
