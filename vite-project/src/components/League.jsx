import { useEffect, useState } from "react";
import { getLeagues } from "../../api";
import LeagueCard from "./LeagueCard";

export const League = () => {
  const [leagues, setLeagues] = useState([1]);
  useEffect(() => {
    getLeagues().then((response) => {
      setLeagues(response.leagues);
    });
  }, [leagues]);

  return (
    <div id="league-container-div">
      <div>
        <h2>Leagues</h2>
        <ul className="league-container">
          {leagues.map((league) => {
            return <LeagueCard key={league.league_id} league={league} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default League;
