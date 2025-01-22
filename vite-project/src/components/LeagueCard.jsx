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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://editorial.uefa.com/resources/0290-1bb9aa185b0a-1972bade03fd-1000/uefa_champions_league_2024_25_league_phase_draw_.jpeg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0891b2] dark:text-white">
            {league.league_name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {`Start Date: ${startDate}`}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {`End Date: ${endDate}`}
        </p>

        {organisers.map((organiser) => {
          if (organiser.organiser_id === league.organiser_id) {
            return (
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {organiser.organiser_name[0].toUpperCase() +
                  organiser.organiser_name.slice(1)}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

export default LeagueCard;

// <li key={league.league_id} classNameName="league-list">
//       <h2>{league.league_name}</h2>
//       <p>Start Date: {startDate}</p>
//       <p>End Date: {endDate}</p>
//       {organisers.map((organiser) => {
//         if (organiser.organiser_id === league.organiser_id) {
//           return (
//             <p>
//               {organiser.organiser_name[0].toUpperCase() +
//                 organiser.organiser_name.slice(1)}
//             </p>
//           );
//         }
//       })}
//     </li>
