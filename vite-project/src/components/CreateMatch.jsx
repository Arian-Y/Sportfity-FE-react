import { useEffect, useState } from "react";
import {
  getLeagues,
  getTeams,
  getTeamsById,
  postMatch,
  postMatchTeams,
} from "../../api";

export default function CreateMatch() {
  const [matchDate, setMatchDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [matchDuration, setMatchDuration] = useState(null);
  const [leagueId, setLeagueId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [matchTeams, setMatchTeams] = useState({
    team_one: null,
    team_two: null,
  });

  const addTeamOneToMatchTeams = (team_id) => {
    setMatchTeams((prevMatchTeams) => ({
      ...prevMatchTeams,
      team_one: { team_id },
    }));
  };

  const addTeamTwoToMatchTeams = (team_id) => {
    setMatchTeams((prevMatchTeams) => ({
      ...prevMatchTeams,
      team_two: { team_id },
    }));
  };

  useEffect(() => {
    setIsLoading(true);
    getTeams()
      .then((teams) => {
        setTeams(teams);
        return getLeagues();
      })
      .then(({ leagues }) => {
        setLeagues(leagues);
        setIsLoading(false);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    postMatch(matchDate, startTime, matchDuration, leagueId)
      .then(({ match }) => {
        console.log(match);
        setMatchDate(match.match_date);
        setStartTime(match.start_time);
        setMatchDuration(match.duration);
        setLeagueId(match.league_id);

        return Promise.all([
          postMatchTeams(match.match_id, matchTeams.team_one.team_id),
          postMatchTeams(match.match_id, matchTeams.team_two.team_id),
        ]);
      })
      .then((matchTeams) => {
        console.log(matchTeams, "<<< response");
        setMatchDate("");
        setStartTime(null);
        setMatchDuration(null);
        setLeagueId(null);
        setMatchTeams({ match_id: null, team_id: null });
        setIsLoading(false);
      });
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
        <select onChange={(e) => setLeagueId(e.target.value)}>
          <option>Select your league</option>
          {leagues.map((league) => {
            return (
              <option value={league.league_id}>{league.league_name}</option>
            );
          })}
        </select>
        <select onChange={(e) => addTeamOneToMatchTeams(e.target.value)}>
          <option>Select your team one</option>
          {teams.map((team) => {
            return <option value={team.team_id}>{team.team_name}</option>;
          })}
        </select>
        <select onChange={(e) => addTeamTwoToMatchTeams(e.target.value)}>
          <option>Select your team one</option>
          {teams.map((team) => {
            return <option value={team.team_id}>{team.team_name}</option>;
          })}
        </select>
        <button>Submit</button>
      </form>
    </>
  );
}
