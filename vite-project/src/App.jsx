import "./App.css";
import { Routes, Route } from "react-router";
import MatchList from "./components/MatchList";
import Header from "./components/Header";
import League from "./components/League";
import Footer from "./components/Footer";
import MainPage from "./Pages/MainPage";
import Match from "./components/Match";
import "./App.css";
import CreateMatch from "./components/CreateMatch";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/matches" element={<MatchList />} />
          <Route path="/leagues" element={<League />} />
          <Route path="/matches/create_match" element={<CreateMatch />} />
          <Route path="/matches/:match_id/" element={<Match />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
