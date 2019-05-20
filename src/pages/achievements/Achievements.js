import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../../styles/achieve.css'

export default class Achievements extends Component {

    openWebPage=(pageURL)=>{
        if(pageURL.length>0){
            window.open(pageURL, "_blank") //to open new page
        }
    }

    getAchievements(){
        const allLines=[];
        console.log(this.props.allAchievements);
        {this.props.allAchievements.map((Achievement)=>{
            allLines.push (<div className="Achieve" key={Achievement.id} >
                <h1 onClick={this.openWebPage.bind(this,Achievement.websiteUrl)}><span>{Achievement.name} </span> </h1>
                <p>{Achievement.about}</p>
                <img className="achieveImg" src={require("../../images/achievement/"+Achievement.imageURL)} />
                <p>{Achievement.platforms}</p>
            </div>);
            })}
            return allLines;
    }
  render() {
    return (
      <div>
        {this.getAchievements()}
      </div>
    )
  }
}

 // PropTypes
Achievements.propTypes = {
    allAchievements: PropTypes.array.isRequired
}
