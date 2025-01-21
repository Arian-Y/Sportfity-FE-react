import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import MatchList from "./components/MatchList";
import Header from "./components/Header";
import League from "./components/League";
import { BrowserRouter } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/matches" element={<MatchList />}></Route>
      </Routes>
      <League />
      <Footer />
    </>
  );
}

export default App;
