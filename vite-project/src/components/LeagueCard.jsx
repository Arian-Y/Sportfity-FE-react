import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrganisers } from "../../api";
function LeagueCard({ league }) {
  const [startDate, setStartDate] = useState(2025);
  const [endDate, setEndDate] = useState(2025);
  const [organisers, setOrganisers] = useState([]);

  useEffect(() => {
    setStartDate(String(league.start_date).slice(0, 10));
    setEndDate(String(league.end_date).slice(0, 10));
    getOrganisers().then((response) => {
      setOrganisers(response);
    });
  }, []);
  return (
    <li key={league.league_id} className="league-list">
      {/* <Link to={`/`}> */}
      <h2>{league.league_name}</h2>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      {organisers.map((organiser) => {
        if (organiser.organiser_id === league.organiser_id) {
          return (
            // <Link to={""}>
            <p>
              {organiser.organiser_name[0].toUpperCase() +
                organiser.organiser_name.slice(1)}
            </p>
            // </Link>
          );
        }
      })}
      {/* </Link> */}
    </li>
  );
}

export default LeagueCard;
