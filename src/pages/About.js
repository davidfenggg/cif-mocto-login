import React, { Component } from "react";

export default function About() {
  return (
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
        }}
      >
        Hello 👋! I appreciate your curiosity wondering what this page is!
      </h1>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        But really, this is just a fun exercise for the Mayor's Office Chief
        Technology Officer of New York City 🏙️! How rad is that 🤙?
      </h2>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Anyway, for a quick introduction, my name is David, and I'm a freshman
        studying computer science at the University of Pennsylvania 🏫. Beside
        my passion for CS, I'm also an avid outdoorsman ⛰️, fly angler 🎣,
        Denver sports fan 🏀🏈, and amateur artist 🎨.
      </h3>
    </div>
  );
}
