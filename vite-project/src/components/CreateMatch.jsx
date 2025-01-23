import { useEffect, useState } from "react";
import {
  getLeagues,
  getTeams,
  getTeamsById,
  postMatch,
  postMatchTeams,
} from "../../api";

export default function CreateMatch() {
  const [matchDate, setMatchDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [matchDuration, setMatchDuration] = useState("");
  const [leagueId, setLeagueId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [matchTeams, setMatchTeams] = useState({
    team_one: null,
    team_two: null,
  });

  const addTeamOneToMatchTeams = (team_id) => {
    setMatchTeams((prevMatchTeams) => ({
      ...prevMatchTeams,
      team_one: { team_id },
    }));
  };

  const addTeamTwoToMatchTeams = (team_id) => {
    setMatchTeams((prevMatchTeams) => ({
      ...prevMatchTeams,
      team_two: { team_id },
    }));
  };

  useEffect(() => {
    setIsLoading(true);
    getTeams()
      .then((teams) => {
        setTeams(teams);
        return getLeagues();
      })
      .then(({ leagues }) => {
        setLeagues(leagues);
        setIsLoading(false);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    postMatch(matchDate, startTime, matchDuration, leagueId)
      .then(({ match }) => {
        console.log(match);
        setMatchDate(match.match_date);
        setStartTime(match.start_time);
        setMatchDuration(match.duration);
        setLeagueId(match.league_id);

        return Promise.all([
          postMatchTeams(match.match_id, matchTeams.team_one.team_id),
          postMatchTeams(match.match_id, matchTeams.team_two.team_id),
        ]);
      })
      .then((matchTeams) => {
        console.log(matchTeams, "<<< response");
        setMatchDate("");
        setStartTime(null);
        setMatchDuration(null);
        setLeagueId(null);
        setMatchTeams({ match_id: null, team_id: null });
        setIsLoading(false);
      });
  }

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <div>
      <p className="text-center my-4 text-2xl font-bold text-[#0891b2]">
        Create Match...
      </p>
      <form
        onSubmit={handleSubmit}
        className=" m-4 p-4 flex flex-col md:w-1/2 md:mx-auto"
      >
        <div className="mb-6">
          <label
            htmlFor="match-date"
            className="block mb-2 text-sm font-medium text-[#0891b2] dark:text-white"
          >
            Enter your match date
          </label>
          <input
            type="text"
            id="match-date"
            className="bg-gray-50 border border-gray-300 text-[#0891b2] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setMatchDate(e.target.value);
            }}
            value={matchDate}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="start-time"
            className="block mb-2 text-sm font-medium text-[#0891b2] dark:text-white"
          >
            Enter your start time
          </label>
          <input
            type="text"
            id="start-time"
            className="bg-gray-50 border border-gray-300 text-[#0891b2] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
            value={startTime}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="match-duration"
            className="block mb-2 text-sm font-medium text-[#0891b2] dark:text-white"
          >
            Set match duration
          </label>
          <input
            type="text"
            id="match-duration"
            className="bg-gray-50 border border-gray-300 text-[#0891b2] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setMatchDuration(e.target.value);
            }}
            value={matchDuration}
          />
        </div>

        {/* Leagues */}
        <label
          htmlFor="leagues"
          className="block mb-2 text-sm font-medium text-[#0891b2] dark:text-white"
        >
          Select you league
        </label>
        <select
          id="leagues"
          onChange={(e) => setLeagueId(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-[#0891b2] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {leagues.map((league) => {
            return (
              <option key={league.league_id} value={league.league_id}>
                {league.league_name}
              </option>
            );
          })}
        </select>

        {/* Team one  */}

        <label
          htmlFor="team-one"
          className="block mb-2 my-4 text-sm font-medium text-[#0891b2] dark:text-white"
        >
          Select your team one
        </label>
        <select
          id="team-one"
          onChange={(e) => addTeamOneToMatchTeams(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-[#0891b2] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {teams.map((team) => {
            return (
              <option key={team.team_id} value={team.team_id}>
                {team.team_name}
              </option>
            );
          })}
        </select>

        {/* Team 2 */}

        <label
          htmlFor="team-two"
          className="block mb-2  my-4 text-sm font-medium text-[#0891b2] dark:text-white"
        >
          Select your team two
        </label>
        <select
          id="team-two"
          onChange={(e) => addTeamTwoToMatchTeams(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-[#0891b2] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {teams.map((team) => {
            return (
              <option key={team.team_id} value={team.team_id}>
                {team.team_name}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          class="text-white my-4 bg-[#0891b2] hover:bg-[#3ab2d0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

{
  /* <input
          onChange={(e) => {
            setMatchDate(e.target.value);
          }}
          type="text"
          value={matchDate}
          placeholder="enter your match date"
        ></input>


        <input
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
          type="text"
          value={startTime}
          placeholder="enter your start time"
        ></input>


        <input
          onChange={(e) => {
            setMatchDuration(e.target.value);
          }}
          type="text"
          value={matchDuration}
          placeholder="enter your match duration"
        ></input>


        <select onChange={(e) => setLeagueId(e.target.value)}>
          <option>Select your league</option>
          {leagues.map((league) => {
            return (
              <option value={league.league_id}>{league.league_name}</option>
            );
          })}
        </select>

        <select onChange={(e) => addTeamOneToMatchTeams(e.target.value)}>
          <option>Select your team one</option>
          {teams.map((team) => {
            return <option value={team.team_id}>{team.team_name}</option>;
          })}
        </select>

        <select onChange={(e) => addTeamTwoToMatchTeams(e.target.value)}>
          <option>Select your team one</option>
          {teams.map((team) => {
            return <option value={team.team_id}>{team.team_name}</option>;
          })}
        </select>

        <button>Submit</button> */
}
