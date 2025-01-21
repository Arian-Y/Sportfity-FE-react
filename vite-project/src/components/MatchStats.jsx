import { useEffect, useState } from "react";
import { getMatchStatsById } from "../../api";

export default function MatchStats({ match_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [matchStats, setMatchStats] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    getMatchStatsById(match_id).then(({ matchStats }) => {
      setMatchStats(matchStats);
      console.log(matchStats);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <>
      <section>
        {matchStats.map((team) => {
          return (
            <ul>
              <p>{team.score}</p>
              <p>{team.team_name}</p>
            </ul>
          );
        })}
      </section>
      <section>
        <ul>
          <p>{matchStats[0].match_date}</p>
          <p>{matchStats[0].start_time}</p>
          <p>{matchStats[0].league_name}</p>
        </ul>
      </section>
      <section></section>
    </>
  );
}
