import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class DyanmicLayout extends Component {
  
  arrayOfDiv=[];
  totalRows=0;
  canRender=false;
  widthCheck=0;
  totalIn=0;
  
  state={
    allLines:[]
  }
  
  componentDidMount(){
    this.widthCheck=window.innerWidth;
    this.totalIn=this.props.children.length;
    this.start();
    this.addwithDelay();
  }
  componentDidUpdate(){
    
    if(this.widthCheck!==window.innerWidth||this.totalIn!==this.props.children.length)
    {
      this.start();
      this.widthCheck=window.innerWidth;
      this.totalIn=this.props.children.length;
      this.addwithDelay();
    }
  }
  
  
  start(){
    this.arrayOfDiv=this.props.children;
    this.state.allLines=[];
    this.canRender=true;
    this.lineNo=0;
    this.DLines=[];
  }
  
  getcolumns(){
    const allLines=[];
    
    for(let i=0;i<this.props.noofcolumns;i++){
      allLines.push(<div className="dyanmicColunms" key={i} >{this.getEachColumn(i)}</div>);
    }
    return allLines;
  }
  
  getEachColumn=(icolumn)=>{
    var loop=false;
    var totalCount=this.props.noofcolumns-1;
    let j=0;
    const allLines=[];
    
    for(j=0;j<this.arrayOfDiv.length;j++){
      if(this.props.noofcolumns===1||j===icolumn||loop){
        loop=false;
        totalCount=this.props.noofcolumns-1;
        allLines.push(<div className="dyanmicColunmsItem" key={j} >{this.arrayOfDiv[j]}</div>);
      }else{
        totalCount--;
        totalCount=Math.max(0,totalCount);
        if(totalCount===0){
          loop=true;
        }
      }
    }
    return allLines;
  }
  
  
 
  
  lineNo=0;
  DLines=[];
  addwithDelay(){
    if(this.lineNo===0){
      this.DLines=this.getcolumns();
    }
    setTimeout(() => {
      if(this.lineNo<this.DLines.length){
        var delayLines=[];
        for(let i=0;i<=this.lineNo;i++){
          delayLines.push(this.DLines[i]);
        }
        const {allLines} = this.state
        this.setState({
          allLines:(delayLines)
        });
        this.lineNo=this.lineNo+1;
        this.addwithDelay();
      }
    }, this.lineNo===0?0:1000);
  }
  
  render() {
    if(this.canRender){
      return (
        <div className="dyanmicBox">
        {this.state.allLines.map(line => (line))}
        </div>
        )
      }else{
        return (
          <div>
          </div>
          )
        }
      }
    }
    
    // PropTypes
    DyanmicLayout.propTypes = {
      noofcolumns: PropTypes.number.isRequired
    }
    