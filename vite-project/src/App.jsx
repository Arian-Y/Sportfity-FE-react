
import { useState } from "react";
import "./App.css";
import MatchList from "./components/MatchList";
import Header from "./components/Header";
import League from "./components/League";

import { BrowserRouter } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MatchList />
  //  <League/>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
