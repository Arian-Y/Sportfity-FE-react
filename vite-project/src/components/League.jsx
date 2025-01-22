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
    <div className="text-center">
      <div>
        <h2 className="text-left m-4 text-2xl font-bold text-[#0891b2]">
          Leagues that are coming soon...
        </h2>
        <ul className=" p-4 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
          {leagues.map((league) => {
            return <LeagueCard key={league.league_id} league={league} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default League;
