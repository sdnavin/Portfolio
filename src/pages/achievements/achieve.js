import React, { Component } from 'react'
import achievedata from '../../data/achieveData.json'
import Achievements from './Achievements.js';

export default class achieve extends Component {
  canRender=false;
  
  state = {
    achievements:[]
  }
  
  componentDidMount(){
    this.setState({achievements:achievedata});
    this.canRender=true;
  }

  render() {
    if(this.canRender){
      return (
        <div >
        <Achievements allAchievements={this.state.achievements} />
        </div>
        )
      }else{
        return (<div></div>)
      }
  }
}
