import React, { useEffect, useState } from "react";
import VideoCard from "../components/MainPageComponents/VideoCard";
import { getLeagues } from "../../api";
import Card from "../components/MainPageComponents/Card";
import { Link } from "react-router";

function MainPage() {
  const [leagues, setLeagues] = useState([]);
  const [error, setError] = useState("");

  console.log(leagues);

  useEffect(() => {
    getLeagues()
      .then(({ leagues }) => {
        setLeagues(leagues);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <div>
      <VideoCard />
      <div className="bg-[#0891b2] py-8 px-4">
        <h2 className="text-2xl  mx-4 font-bold text-white">
          The leagues the are coming soon...
        </h2>
        <ul className="flex flex-col md:flex-row items-center justify-around gap-4 m-4 p-4">
          {leagues.map((obj) => {
            return (
              <li key={obj.league_id}>
                <Card obj={obj} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-white flex flex-col items-center justify-around p-6 md:flex-row">
        <div className="bg-yellow-500">
          <img
            src="../../public/images/Screenshot 2025-01-21 at 8.18.24 PM.png"
            className="w-96"
          />
        </div>
        <div className=" p-2 w-96">
          <div className=" p-8 flex flex-col gap-4 items-center justify-center">
            <p className="text-[#77d7ef] text-xl font-bold">Wanna Join ?</p>
            <Link to="/matches">
              <a className="border-2 solid bg-[#0891b2] text-white font-bold px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-[#0891b2] ">
                Join the Game
              </a>
            </Link>
          </div>
          <div className=" p-8 flex flex-col gap-4 items-center justify-center">
            <p className="text-[#77d7ef] text-xl font-bold">
              Play with friends ?
            </p>
            <Link to="/matches/create_match">
              <a className="border-2 solid bg-[#0891b2] text-white font-bold px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-[#0891b2]">
                Create you own
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
