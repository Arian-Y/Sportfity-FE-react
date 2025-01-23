import { useEffect, useState } from "react";
import { getMatches } from "../../api";
import { Link } from "react-router";
import MatchCard from "./MatchCard";
import "../App.css";
import MatchListCard from "./MatchesComponents/MatchListCard";
export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDate = () => {
      setIsLoading(true);
      Promise.all([getMatches()])
        .then(([matches, matchTeams]) => {
          setMatches(matches);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching matches & teams:", err);
          setIsLoading(false);
        });
    };

    fetchDate();
  }, []);

  if (!matches) return <p>No matches here</p>;

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <>
      <div className="m-4 p-4 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center ">
        {matches.map((obj) => {
          return <MatchListCard obj={obj} />;
        })}
      </div>
      <div className="text-center my-4">
        <Link
          to="/matches/create_match"
          className="inline-flex items-center px-3 py-2 text-2xl font-medium text-center text-white bg-[#0891b2] rounded-lg hover:bg-[#45b1cc] focus:ring-4 focus:outline-none focus:ring-[#45b1cc] dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
        >
          Create New Match
        </Link>
      </div>
    </>
  );
}
