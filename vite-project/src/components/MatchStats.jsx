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

  if (matchStats.length === 0) return <p>No match stats available...</p>;

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
          <p>{new Date(matchStats[0].match_date).toLocaleDateString()}</p>
          <p>Start time: {matchStats[0].start_time}</p>
          <p>League: {matchStats[0].league_name}</p>
        </ul>
      </section>
      <section></section>
    </>
  );
}
