import { useEffect, useState } from "react";
import { postMatch } from "../../api";

export default function CreateMatch() {
  const [matchDate, setMatchDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [matchDuration, setMatchDuration] = useState(null);
  const [leagueId, setLeagueId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    postMatch(matchDate, startTime, matchDuration, leagueId).then(
      ({ match }) => {
        console.log(match);
        setMatchDate(match.match_date);
        setStartTime(match.start_time);
        setMatchDuration(match.duration);
        setLeagueId(match.league_id);
        setIsLoading(false);
      }
    );
    setMatchDate(null);
    setStartTime(null);
    setMatchDuration(null);
    setLeagueId(null);
  }

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <>
      <p>Create Match...</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setMatchDate(e.target.value);
          }}
          type="text"
          value={matchDate}
          placeholder="enter your match date"
        ></input>
        <input
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
          type="text"
          value={startTime}
          placeholder="enter your start time"
        ></input>
        <input
          onChange={(e) => {
            setMatchDuration(e.target.value);
          }}
          type="text"
          value={matchDuration}
          placeholder="enter your match duration"
        ></input>
        <input
          onChange={(e) => {
            setLeagueId(e.target.value);
          }}
          type="text"
          value={leagueId}
          placeholder="enter your league id"
        ></input>
      </form>
    </>
  );
}
