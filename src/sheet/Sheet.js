import React from 'react';
import Paper from '@material-ui/core/Paper';
import Matchup from './Matchup'
import Divider from '@material-ui/core/Divider'

class Sheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matchups: []
        }
    }

    componentDidMount() {
        this.setState({
            matchups: [{"id": 1, "homeTeam": "Dallas", "awayTeam": "Chicago"}, {"id": 1, "homeTeam": "Buffalo", "awayTeam": "Miami"}]
        })
    }

    render() {
      return (
          <Paper>
                {this.state.matchups.map(matchup => (
                    <div key={matchup.id}>
                        <Matchup matchup={matchup}/>
                        <Divider/>
                    </div>
                ))}
          </Paper>
      )
    }
}

export default Sheet