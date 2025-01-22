import { useEffect, useState } from "react";
import { getMatchStatsById } from "../../api";

export default function MatchStats({ match_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [matchStats, setMatchStats] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    getMatchStatsById(match_id).then(({ matchStats }) => {
      setMatchStats(matchStats);
      console.log(matchStats);
      setIsLoading(false);
    });
  }, []);

  if (matchStats.length === 0) return <p>No match stats available...</p>;

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <>
      <section>
        <h3 className="text-center my-6 text-2xl text-[#0891b2] underline">
          Team Stats
        </h3>
        <div class="relative overflow-x-auto w-1/2 mx-auto p-8">
          <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 border-2 border-solid border-gray-300">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-[#0891b2]">
                  Team Name
                </th>
                <th scope="col" class="px-6 py-3 text-[#0891b2]">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {matchStats.map((obj) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {obj.team_name}
                    </th>
                    <td class="px-6 py-4">{obj.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section className=" text-center p-4 flex flex-col justify-center align-center gap-2">
        <p>
          <span className="font-bold text-xl text-[#0891b2] mx-2">
            Match Date:
          </span>{" "}
          <span className="text-gray-400">
            {new Date(matchStats[0].match_date).toLocaleDateString()}
          </span>
        </p>
        <p>
          <span className="font-bold text-xl text-[#0891b2] mx-2">
            Start time:
          </span>

          <span className="text-gray-400">{matchStats[0].start_time}</span>
        </p>
        <p>
          <span className="font-bold text-xl text-[#0891b2] mx-2">League:</span>
          <span className="text-gray-400">{matchStats[0].league_name}</span>
        </p>
      </section>
    </>
  );
}
