import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { LoginOutlined, TeamOutlined, LinkOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          theme="dark"
          style={{ backgroundColor: "#35478C" }}
        >
          <Menu.Item key="login" icon={<LoginOutlined />}>
            <Link to="/">Login</Link>
          </Menu.Item>
          <Menu.Item key="app" icon={<TeamOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>

          <Menu.Item key="alipay" icon={<LinkOutlined />}>
            <a
              href="https://www1.nyc.gov/assets/cto/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MOCTO
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
