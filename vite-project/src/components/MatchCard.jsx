import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getMatchTeamsByMatchId, getTeamsById } from "../../api";
import "../App.css";

export default function MatchCard({ match }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getMatchTeamsByMatchId(match.match_id)
      .then(({ teams }) => {
        return Promise.all([
          getTeamsById(teams[0].team_id),
          getTeamsById(teams[1].team_id),
        ]);
      })
      .then((teams) => {
        setTeams(teams);
      });
  }, []);
  return (
    <>
      <section>
        {teams.map(([team], index) => {
          return index === 0 ? (
            <p>{team.team_name} vs. </p>
          ) : (
            <p>{team.team_name}</p>
          );
        })}
        <p>{new Date(match.match_date).toLocaleDateString()}</p>
      </section>
    </>
  );
}
