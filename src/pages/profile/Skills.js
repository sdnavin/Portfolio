import React, { Component } from 'react'
import '../../styles/pages.css'
import PropTypes from 'prop-types';
import SkillGraph from './SkillGraph';
import '../../styles/skills.css';

export default class Skills extends Component {
  
  experienceNo=0;
  previousState="< ";
  nextState=" >";
  skip=false;

  componentDidMount(){
    setInterval(()=>{this.moveToNext()},15000);
  }
  

  moveToNext(){
    if(this.skip){
      this.skip=false;
      return;
    }
    if(this.experienceNo===this.props.experiences.length-1){
      this.experienceNo=0;
    }
    this.checkButtonActivate(1);
  }

  changeExp = (vNo) => {
    this.experienceNo=this.experienceNo+vNo;
    this.experienceNo=this.numbClamp(this.experienceNo,0,(this.props.experiences.length-1));
    // console.log(this.experienceNo);
    this.forceUpdate();
  };
  
  numbClamp =(numbValue,  min,  max ) => {
    if( numbValue < min ) return min;
    if( numbValue > max ) return max;
    return numbValue;
  };

  checkButtonActivate=(valIn)=>{
    if((valIn===-1)?(this.experienceNo!==0):(this.experienceNo!==(this.props.experiences.length-1)))
      return this.changeExp(valIn);
    else
      return null;
  };

  checkButtonCSS=(valIn)=>{
    if((valIn===-1)?(this.experienceNo!==0):(this.experienceNo!==(this.props.experiences.length-1)))
      return "";
    else
      return " disable";
  };
  render() {

    return(
      <div className="skillholder">
      <h2 className="title">Skills & <br/> Experience</h2>

      <p className ={"skillbut"+this.checkButtonCSS(-1)} onClick={()=>{this.checkButtonActivate(-1);
      this.skip=true;}}>{this.previousState}</p>
      <p className ={"skillbut span"+this.checkButtonCSS(1)} onClick={()=>{this.checkButtonActivate(1);
      this.skip=true;}}>{this.nextState}</p>

      <div className="skillabout">
      <p className="abouttitle">{this.props.experiences[this.experienceNo].name}<br/>
      {this.props.experiences[this.experienceNo].companyName}<br/>
      {this.props.experiences[this.experienceNo].projectName}</p>
      <p className="about">{this.props.experiences[this.experienceNo].about}</p>
      
      </div>
      <SkillGraph className="skillgraph" skills={this.props.experiences[this.experienceNo].skills}/>
      </div>
      )
    }
  }
  
  
  // PropTypes
  Skills.propTypes = {
    experiences: PropTypes.array.isRequired
  }
  