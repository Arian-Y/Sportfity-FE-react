import React, { useEffect, useState } from "react";
import { getMatchTeamsByMatchId, getTeamsById } from "../../../api";
import { Link } from "react-router";

function MatchListCard({ obj }) {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMatchTeamsByMatchId(obj.match_id)
      .then(({ teams }) => {
        console.log(teams[0].team_id);
        return Promise.all([
          getTeamsById(teams[0].team_id),
          getTeamsById(teams[1].team_id),
        ]);
      })
      .then((teams) => {
        setTeams(teams);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {teams.map(([team], index) => {
          return index === 0 ? (
            <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Team {team.team_name} vs{" "}
            </span>
          ) : (
            <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Team {team.team_name}
            </span>
          );
        })}

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Schedule Date: {new Date(obj.match_date).toLocaleDateString()}
        </p>
        <Link
          to={"/matches/" + obj.match_id}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0891b2] rounded-lg hover:bg-[#45b1cc] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Find more...
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default MatchListCard;
