import React, { Component } from 'react'
import '../../styles/pages.css'
import PropTypes from 'prop-types';
import "../../styles/education.css";

export default class Education extends Component {
    
    
    
    
    render() {
        return (
            <div className="education">
            <h2 className="title">Education</h2>
            <div className="studies">
            {this.props.studies.map((study)=>{
                return (<div className="study">
                    <img className="studyImg" src={require("../../images/education/"+study.iconUrl)} alt="doge" />
                <p className="studyabout">{study.name}<br/>{study.type} - {study.major}</p>
                </div>)
                })}
            </div>   
            </div>
            )
        }
    }
    
    // PropTypes
    Education.propTypes = {
        studies: PropTypes.array.isRequired
    }
    