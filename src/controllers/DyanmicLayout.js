import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class DyanmicLayout extends Component {
  
  arrayOfDiv=[];
  totalRows=0;
  canRender=false;
  totalIn=0;

  componentDidMount(){
    console.log(this.props.children);
    this.totalIn=this.props.children.length;
    this.start();
    this.forceUpdate();
  }
  componentDidUpdate(){
    console.log(this.totalIn+" "+this.props.children[0].length);
    this.start();
    if(this.totalIn!==this.props.children[0].length)
    {
      this.totalIn=this.props.children[0].length;
       this.forceUpdate();
    }
  }

 
  start(){
    this.arrayOfDiv=this.props.children[0];
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
    var totalCount=this.props.noofcolumns;
    let j=0;
    const allLines=[];

    for(j=0;j<this.arrayOfDiv.length;j++){
      if(j===icolumn||loop){
        loop=false;
        totalCount=this.props.noofcolumns-1;
        allLines.push(<div className="dyanmicColunmsItem" key={j} >{this.arrayOfDiv[j]}</div>);
      }else{
        totalCount--;
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
    