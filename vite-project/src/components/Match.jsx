import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMatchStatsById } from "../../api";
import MatchStats from "./MatchStats";
import MatchLineUp from "./MatchLineUp";

export default function Match() {
  const [isLoading, setIsLoading] = useState(false);
  const { match_id } = useParams();

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <>
      <MatchStats match_id={match_id} />
      <MatchLineUp match_id={match_id} />
    </>
  );
}
