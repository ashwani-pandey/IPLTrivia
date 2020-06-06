import React from 'react';

class TeamCard extends React.Component {

    constructor(props){
        super(props);
    }

    style(photo){
        return {background: `url(${photo}) center center no-repeat`};
    }

    render() {
        const {team} = this.props;

        return (
            <div className={`team-card ${team.short}-card`}>
                <div className="card">
                    <div className="team-card-front" style={this.style(team.photo)}>
                        <div className="content" style={{background: team.color}}>
                            <div className="logo">
                                <img src={team.image} alt={team.name} width={team.width} style={{marginTop: team.marginTop}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamCard;
