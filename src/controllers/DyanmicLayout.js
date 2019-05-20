import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class DyanmicLayout extends Component {
  
  arrayOfDiv=[];
  totalRows=0;
  canRender=false;
  totalIn=0;

  componentDidMount(){
    this.totalIn=this.props.children.length;
    this.start();
    this.forceUpdate();
  }
  componentDidUpdate(){
    if(this.totalIn!==this.props.children.length)
    {
      this.start();
      this.totalIn=this.props.children.length;
      this.forceUpdate();
    }
  }

 
  start(){
    this.arrayOfDiv=this.props.children;
    this.canRender=true;
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
      if(this.props.noofcolumns==1||j===icolumn||loop){
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
  
  render() {
    if(this.canRender){
      return (
        <div className="dyanmicBox">
        {this.getcolumns()}
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
    