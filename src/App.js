import React from "react";
import { Navbar } from "./Components/navbar";
import { Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
function App() {
  return (
    <div>
      <Navbar />
      <Button onClick={() => alert("clicked")} type="primary" style={{}}>
        hello
      </Button>
      <Avatar alt="Remy Sharp" icon={<UserOutlined />} />
    </div>
  );
}

export default App;
