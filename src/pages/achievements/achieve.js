import React, { Component } from 'react'
import achievedata from '../../data/achieveData.json'
import Achievements from './Achievements.js';

import TweenLite from 'gsap';


export default class achieve extends Component {
  canRender=false;
  
  state = {
    achievements:[]
  }

  animElements=document.getElementsByClassName("achieveImg");

  playAnim(){
    let timeP=0.35;
    for(let t=0;t<this.animElements.length;t++){
      TweenLite.to(this.animElements[t], timeP, {width:"80%"}).delay(t*timeP*0.5);
    }
  }
  
  componentDidMount(){
    this.setState({achievements:achievedata});
    this.canRender=true;
    setTimeout(()=>{ this.playAnim()},500);
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
