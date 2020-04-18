import React from 'react';
import Paper from '@material-ui/core/Paper';
import Matchup from './Matchup'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button';
import { Auth } from 'aws-amplify';

class Sheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matchups: []
        }
    }

    componentDidMount() {
        this.setState({
            matchups: [{"id": 1, "homeTeam": "Dallas", "awayTeam": "Chicago"}, {"id": 2, "homeTeam": "Buffalo", "awayTeam": "Miami"}]
        })
    }

    render() {
      return (
          <Paper>
                <Button onClick={this.signOut}>Sign Out</Button>
                {this.state.matchups.map(matchup => (
                    <div key={matchup.id}>
                        <Matchup matchup={matchup}/>
                        <Divider/>
                    </div>
                ))}
          </Paper>
      )
    }

    signOut() {
        Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
}

export default Sheet