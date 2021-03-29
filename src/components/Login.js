import React, { useState, useEffect } from "react";
import { Form, Button, Input, Space, message } from "antd";
import styled from "styled-components";
import Success from "../pages/Success";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UsernameField = styled(Input)`
  width: 15rem;
  padding: 5px;
  margin: 3px auto;
  border-radius: 8px;
`;

const PasswordField = styled(Input.Password)`
  width: 15rem;
  padding: 5px;
  margin: 3px auto;
  border-radius: 8px;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;
`;

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();

  const checkPassword = () => {
    console.log(errorMessage);
    if (name === "" && password === "") {
      setErrorMessage("Username and password fields cannot be empty");
    } else if (name === "") {
      setErrorMessage("Usename field cannot be empty");
    } else if (password === "") {
      setErrorMessage("Password field cannot be empty");
    } else if (name === "mocto" && password === "HelloCodingItForward!") {
      history.push("/success");
    } else {
      setErrorMessage("Username or password is incorrect");
    }
  };

  return (
    <Router>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "30%",
            minWidth: "16rem",
            border: "3px solid #7FB2F0",
            backgroundColor: "#ADD5F7",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <FormContainer>
            <h2
              style={{
                margin: "5px 0px 20px 0px",
                textAlign: "center",
              }}
            >
              Login to Your Account
            </h2>
            <UsernameField
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder={"Enter Username"}
              size="large"
            />
            <PasswordField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Password"
              size="large"
            />
            <p
              style={{
                fontSize: "10px",
                color: "red",
              }}
            >
              {errorMessage}
            </p>
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={checkPassword}
            >
              Login
            </Button>
          </FormContainer>
        </div>
      </div>
    </Router>
  );
}
