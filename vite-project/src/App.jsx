import { Routes, Route } from "react-router";
import "./App.css";
import MatchList from "./components/MatchList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/matches" element={<MatchList />}></Route>
      </Routes>
    </>
  );
}

export default App;
