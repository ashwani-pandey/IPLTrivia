import React from 'react';
import TeamCard from "./TeamCard";
import teams from "./../store/teams.json";

class TeamsView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            teams: []
        }
    }

    componentDidMount(){
        this.setState({teams: teams});
    }

    render(){
        
        let teamCards = this.state.teams.map((team) => {
            return <TeamCard key={team.short} team={team} />
        });

        return (
            <div>
                <div className="team-scroll">
                    <div className="team-list">
                        {teamCards}
                    </div>
                </div>
            </div>
        );
    }    
}

export default TeamsView;
