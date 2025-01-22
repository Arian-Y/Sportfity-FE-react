import { useEffect, useState } from "react";
import { getLineUpByMatchId } from "../../api";

export default function MatchLineUp({ match_id }) {
  const [lineUp, setLineUp] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getLineUpByMatchId(match_id).then(({ line_up }) => {
      setLineUp(line_up);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading ...</p>;
  if (lineUp.length === 0) {
    return <p>No lineup data available.</p>;
  }

  return (
    <section>
      <section className="text-center p-4">
        <h3 className="text-center my-4 text-2xl text-[#0891b2] underline">
          Line up
        </h3>
      </section>
      {/*  */}
      <section className=" flex  flex-col p-4 gap-2 md:flex-row ">
        {/* TABLE 1 */}
        <table class="w-full text-sm text-center  text-gray-500 dark:text-gray-400 border-solid border-2 border-gray-300 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-[#0891b2]">
                Team {lineUp[0].team_name}
              </th>
            </tr>
          </thead>
          <tbody>
            {lineUp.map((obj) => {
              if (obj.team_name === lineUp[0].team_name) {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {obj.player_name}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        {/* TABLE 2 */}
        <table class="w-full text-sm text-center  text-gray-500 dark:text-gray-400 border-solid border-2 border-gray-300">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-[#0891b2]">
                Team {lineUp[5].team_name}
              </th>
            </tr>
          </thead>
          <tbody>
            {lineUp.map((obj) => {
              if (obj.team_name === lineUp[5].team_name) {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {obj.player_name}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </section>
    </section>
  );
}
