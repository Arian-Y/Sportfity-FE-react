import { useEffect, useState } from "react";
import { getMatches } from "../../api";
import { Link } from "react-router";
import MatchCard from "./MatchCard";
export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMatches()
      .then((matches) => {
        setMatches(matches);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, []);

  if (!matches) return <p>No matches here</p>;

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <>
      <section>
        <p>Here is a list of matches you can join:</p>
        <ul>
          {matches.map((match, index) => {
            return (
              <section>
                <ul key={index}>
                  <MatchCard match={match} />
                </ul>
              </section>
            );
          })}
        </ul>
        <button>Create Match</button>
      </section>
    </>
  );
}
