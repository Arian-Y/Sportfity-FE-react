import { useState } from "react";
import { postMatch } from "../../api";
const CreateMatch = () => {
  const [matchDetails, setMatchDetails] = useState({
    matchDate: "",
    startTime: "",
    duration: "",
    leagueId: 0,
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMatchDetails({ ...matchDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postMatch(
      matchDetails.matchDate,
      matchDetails.startTime,
      matchDetails.duration,
      matchDetails.leagueId
    ).then((response) => {
      return response;
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={matchDetails.matchDate}
          placeholder="match date"
          onChange={handleChange}
          name="matchDate"
        />
        <input
          type="text"
          value={matchDetails.startTime}
          placeholder="start time"
          onChange={handleChange}
          name="startTime"
        />
        <input
          type="text"
          value={matchDetails.duration}
          placeholder="duration"
          onChange={handleChange}
          name="duration"
        />
        <input
          type="number"
          value={matchDetails.leagueId}
          placeholder="league id"
          onChange={handleChange}
          name="leagueId"
        />
        <button>Create Match!</button>
      </form>
    </>
  );
};
export default CreateMatch;
