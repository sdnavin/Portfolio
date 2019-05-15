import React, { Component } from 'react'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import '../../styles/skills.css';

export default class SkillGraph extends Component {
    
    render() {
        return (
            <div className="skillset">
            {this.props.skills.map((skill)=>{
                    return <CircularProgressbarWithChildren className = {((skill.id>4)?"minor":"")+"skill"} key={skill.id} value={skill.value}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        trailColor:'#007acc',
                        pathColor: "#eff4ff",
                        backgroundColor: '#007acc'
                      })}>
                    <img className={((skill.id>4)?"minor":"")+"skillImg"} src={require("../../images/skills/"+skill.iconUrl)} alt="doge" />
                    </CircularProgressbarWithChildren>
            })}
            </div>
            )
        }
        
    }
    
    // PropTypes
    SkillGraph.propTypes = {
        skills: PropTypes.array.isRequired
    }
    