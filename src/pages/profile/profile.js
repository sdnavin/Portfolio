import '../../styles/pages.css';
import Skills from './Skills';
import React, { Component } from 'react'
import profiledata from '../../data/profileData.json'
import Education from './Education';

export default class profile extends Component {
  
  canRender=false;
  
  state = {
    profile:[]
  }
  
  componentDidMount(){
    this.setState({profile:profiledata});
    this.canRender=true;
  }
  
  render() {
    if(this.canRender){
      return (
        <div >
        <Skills experiences={this.state.profile.experience} />
        <Education studies={this.state.profile.education}/>
        </div>
        )
      }else{
        return (<div></div>)
        }
      }
    }
    
    