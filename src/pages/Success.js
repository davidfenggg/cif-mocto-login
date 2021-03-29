import React, { useState, useEffect } from "react";
import { Button, Input, Space, message } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Success() {
  let history = useHistory();

  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "7rem",
          marginLeft: "3rem",
          marginRight: "3rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
            fontSize: "40px",
          }}
        >
          🎉 Congratulations! You have logged in successfully! 🎉
        </h1>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => history.push("/")}
        >
          Back to Login
        </Button>
      </div>
    </Router>
  );
}
