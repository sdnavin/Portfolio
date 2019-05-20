import '../../styles/pages.css';
import Skills from './Skills';
import React, { Component } from 'react'
import profiledata from '../../data/profileData.json'
import Education from './Education';
import TweenLite from 'gsap';

export default class profile extends Component {
  
  canRender=false;
  
  constructor(props){
    super(props);
    this.myElement=null;
    this.myTween=null;
  }

  state = {
    profile:[]
  }
  
  componentDidMount(){
    this.setState({profile:profiledata});
    this.canRender=true;
    setTimeout(()=>{ this.playAnim()},50);
  }
  playAnim(){
    this.myTween=TweenLite.to(this.myElement, .01, {width: "0%"});
    this.myTween=TweenLite.to(this.myElement, 1, {width: "100%"});
  }
  render() {
    if(this.canRender){
      return (
        <div ref={div => this.myElement = div}>
        <Skills experiences={this.state.profile.experience} />
        <Education studies={this.state.profile.education}/>
        </div>
        )
      }else{
        return (<div></div>)
        }
      }
    }
    
    