import React from "react";

function Card({ obj }) {
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
            {obj.league_name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-[#0891b2] dark:text-gray-400">
          Start Date : {obj.start_date.slice(0, 10)}
        </p>
        <p className="mb-3 font-normal text-[#0891b2] dark:text-gray-400">
          End Date : {obj.end_date.slice(0, 10)}
        </p>
      </div>
    </div>
  );
}

export default Card;
