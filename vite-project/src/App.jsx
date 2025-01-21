import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MatchList from "./components/MatchList";
import Header from "./components/Header";

import { BrowserRouter } from "react-router";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <MatchList />
    </BrowserRouter>
  );
}

export default App;
