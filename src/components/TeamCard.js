import React from 'react';
import "./TeamCard.css";

var BarChart = require("react-chartjs").Bar;
//import Bar from "react-chartjs";

class TeamCard extends React.Component {

    constructor(props){
        super(props);
    }

    style(photo){
        return {background: `url(${photo}) center center no-repeat`};
    }

    getChartData = (team) => {
        
        return {
            labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            datasets: [
                {
                    label: 'Matches won in season',
                    fillColor: team.color.slice(40, 47),
                    data: team.totalMatchesWon
                },
                {
                    label: 'Total Matches played in season',
                    fillColor: team.color.slice(25, 34),
                    data: team.totalMatches
                }
            ]
        }
    }

    getTotalMatches(team) {
        let totalMatches = 0
        team.totalMatches.forEach((yearMatches) => totalMatches += yearMatches);
        return totalMatches;
    }

    getWinningRate(team) {
        let totalMatchesWon = 0;
        team.totalMatchesWon.forEach((yearlyWins) => totalMatchesWon += yearlyWins);
        let winningRate = (totalMatchesWon/this.getTotalMatches(team))*100;
        return winningRate.toFixed(2);
    }

    render() {
        const {team} = this.props;
        const chartData = this.getChartData(team);

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
                                <div className="text" style={{color: team.color.slice(25, 34)}}>
                                    Best Result
                                    <span className="result">{team.bestResult.position}</span>
                                    <div className="year">{team.bestResult.year.join(",")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-card-back">
                        <div className="content" style={{background: team.color}}>
                            <span className="team-statistic">Performance</span>
                            <div className="performance">
                                <div className="total-matches" style={{color: team.color.slice(25, 34)}}>
                                    TOTAL MATCHES : {this.getTotalMatches(team)}
                                </div>
                                <div className="winning-rate" style={{color: team.color.slice(25, 34)}}>
                                    WINNING RATE : {this.getWinningRate(team)} % 
                                </div>
                                <div className="bar-chart">
                                    <BarChart data={chartData} options={{}} width="330" height="250"/>
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
