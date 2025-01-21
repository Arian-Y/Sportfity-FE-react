import { useState } from "react";
import "./App.css";
import MatchList from "./components/MatchList";
import Header from "./components/Header";

import { BrowserRouter } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MatchList />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
