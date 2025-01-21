import { useEffect, useState } from "react";
import { getMatchStatsById } from "../../api";

export default function MatchStats({ match_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [matchStats, setMatchStats] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    getMatchStatsById(match_id).then((matchStats) => {
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
      <section></section>
    </>
  );
}
