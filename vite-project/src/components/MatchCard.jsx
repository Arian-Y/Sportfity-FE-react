import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function MatchCard({ match }) {
  return (
    <section>
      <p>{match.match_id}</p>
    </section>
  );
}
