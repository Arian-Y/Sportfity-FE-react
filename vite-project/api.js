import axios from "axios";

const sportifyApi = axios.create({
  baseURL: "https://sportify-sessions.onrender.com/api",
});

export function getMatches() {
  return sportifyApi.get("/matches").then(({ data: matches }) => {
    return matches;
  });
}

export function getMatchById(match_id) {
  return sportifyApi.get(`/matches/${match_id}`).then(({ data: match }) => {
    return match;
  });
}

export function getMatchStatsById(match_id) {
  return sportifyApi
    .get(`/matches/${match_id}/stats`)
    .then(({ data: matchStats }) => {
      return matchStats;
    });
}

export function getPlayerGoalsById(match_id) {
  return sportifyApi
    .get(`/matches/${match_id}/player_goals`)
    .then(({ data: matchPlayerGoals }) => {
      console.log(matchPlayerGoals);
      return matchPlayerGoals;
    });
}

export function getLineUpByMatchId(match_id) {
  return sportifyApi
    .get(`/matches/${match_id}/line_up`)
    .then(({ data: lineUp }) => {
      return lineUp;
    });
}

export function postMatch(match_date, start_time, duration, league_id) {
  return sportifyApi
    .post(`/matches/`, { match_date, start_time, duration, league_id })
    .then(({ data: match }) => {
      return match;
    });
}

export function patchMatch(
  match_id,
  match_date,
  start_time,
  duration,
  league_id
) {
  return sportifyApi
    .patch(`/matches/${match_id}`, {
      match_date,
      start_time,
      duration,
      league_id,
    })
    .then(({ data: match }) => {
      return match;
    });
}

export function postMatchPlayer(match_id, player_id, goals, assists) {
  return sportifyApi
    .post(`/matches/${match_id}/match_players`, { player_id, goals, assists })
    .then(({ data: matchPlayers }) => {
      return matchPlayers;
    });
}

export function deleteMatch(match_id) {
  return sportifyApi.delete(`/matches/${match_id}`).then(({ data: match }) => {
    return match;
  });
}

export function getMatchTeamsByMatchId(match_id) {
  return sportifyApi
    .get(`/matches/${match_id}/match_teams`)
    .then(({ data: matchTeams }) => {
      return matchTeams;
    });
}
