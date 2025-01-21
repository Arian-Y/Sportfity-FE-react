import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import MatchList from "./components/MatchList";
import Header from "./components/Header";
import League from "./components/League";
import { BrowserRouter } from "react-router";
import Footer from "./components/Footer";
import CreateMatch from "./components/CreateMatch";

function App() {
  return (
    <>
      <Header />

      {/* <Routes>
        <Route path="/matches" element={<MatchList />}></Route>
        <Route path="/leagues" element={<League />}></Route>
        <Route path="/matches/create_match"></Route>
      </Routes> */}
      <CreateMatch />
      <Footer />
    </>
  );
}

export default App;
