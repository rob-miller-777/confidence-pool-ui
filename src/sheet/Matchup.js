import React from 'react'

export default function Matchup(props) {
    const {matchup} = props
    return (
        <h1>{matchup.awayTeam} at {matchup.homeTeam}</h1>
    )
  }