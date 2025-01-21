import { Routes, Route } from "react-router";
import MatchList from "./components/MatchList";
import Header from "./components/Header";
import League from "./components/League";
import Footer from "./components/Footer";
import Match from "./components/Match";
import "./App.css";
import CreateMatch from "./components/CreateMatch";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/matches" element={<MatchList />}></Route>
        <Route path="/leagues" element={<League />}></Route>
        <Route path="/matches/create_match" element={<CreateMatch />}></Route>
        <Route path="/matches/:match_id/" element={<Match />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
