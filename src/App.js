import React from "react";
import { Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import Logoo from "./images/Logoo.svg";
import Navbar from "./Components/navbar";
import Card from "./Components/card";
import Cover from "./Components/coverimage";
function App() {
  return (
    <div>
      {/* <nav>
        <img style={{}} src={Logoo} alt="Golomt Logo" />
      </nav> */}

      <Navbar />
      <Cover />
      <Card />
      {/* <Button onClick={() => alert("clicked")} type="primary" style={{}}>
        hello
      </Button>
      <Avatar alt="Remy Sharp" icon={<UserOutlined />} /> */}
    </div>
  );
}

export default App;
