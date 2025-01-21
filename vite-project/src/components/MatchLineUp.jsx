import { useEffect, useState } from "react";
import { getLineUpByMatchId } from "../../api";

export default function MatchLineUp({ match_id }) {
  const [lineUp, setLineUp] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getLineUpByMatchId(match_id).then(({ line_up }) => {
      setLineUp(line_up);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading ...</p>;
  if (lineUp.length === 0) {
    return <p>No lineup data available.</p>;
  }

  return (
    <>
      <section>
        <p>{lineUp[0].team_name}</p>
        {lineUp.map((player) => {
          if (player.team_name === lineUp[0].team_name)
            return <p>{player.player_name}</p>;
        })}
      </section>
      <section>
        <p>{lineUp[5].team_name}</p>
        {lineUp.map((player) => {
          if (player.team_name === lineUp[5].team_name)
            return <p>{player.player_name}</p>;
        })}
      </section>
    </>
  );
}
