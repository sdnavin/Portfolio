import React, { Component } from 'react'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import ProgressProvider from '../../controllers/ProgressProvider';
import '../../styles/skills.css';

import TweenLite from 'gsap';

export default class SkillGraph extends Component {
    componentDidMount(){
        this.animElements=document.getElementsByClassName("skill");
        // setTimeout(()=>{ this.playAnim()},1000);
    }
    
    animElements=null;
    playAnim(){
        let timeP=0.35;
        for(let t=0;t<this.animElements.length;t++){
            TweenLite.to(this.animElements[t], timeP, {x:10}).delay(t*timeP*0.5);
        }
    }
    
    render() {
        return (
            <div className="skillset">
            {this.props.skills.map((skill)=>{
                return <div><ProgressProvider valueStart={0} valueEnd={skill.value}>
                {(value) =><CircularProgressbarWithChildren className = {"skill"} key={skill.id} value={value}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    trailColor:'#007acc',
                    pathColor: "#eff4ff",
                    backgroundColor: '#007acc',
                })}>
                <img className={"skillImg"} src={require("../../images/skills/"+skill.iconUrl)} alt="../../images/skills/skill.png" />
                </CircularProgressbarWithChildren>}</ProgressProvider>
                <p className ="skillName">{skill.name}</p></div>
            })}
            </div>
            )
        }
        
    }
    
    // PropTypes
    SkillGraph.propTypes = {
        skills: PropTypes.array.isRequired
    }
    