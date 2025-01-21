import { useEffect, useState } from "react";
import { getMatches } from "../../api";
import { Link } from "react-router";
import MatchCard from "./MatchCard";
import "../App.css";
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

  function goCreateMatch(e) {
    e.preventDefault;
    return <Link to="/matches/create_match"></Link>;
  }
  if (!matches) return <p>No matches here</p>;

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <>
      <section>
        <div>
          {matches.map((match) => {
            return (
              <>
                <section>
                  <ul key={match.match_id}>
                    <MatchCard match={match} />
                    <Link to={"/matches/" + match.match_id + "/stats"}>
                      Click here to find out more..
                    </Link>
                  </ul>
                </section>
              </>
            );
          })}
        </div>
        <Link to="/matches/create_match">
          <button>Create Match</button>
        </Link>
      </section>
    </>
  );
}
