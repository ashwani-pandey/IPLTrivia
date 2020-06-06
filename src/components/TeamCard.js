import React from 'react';
import "./TeamCard.css";

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
                            <div className="text">
                                <div className="team-name">
                                    {team.name}
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className="best-result">
                                <img src="/static/img/misc/cup.png" alt="" style={{zIndex: 2, position: "absolute"}}/>
                                <div className="text">
                                    Best Result
                                    <span className="result">{team.bestResult.position}</span>
                                    <div className="year">{team.bestResult.year.join(",")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamCard;
