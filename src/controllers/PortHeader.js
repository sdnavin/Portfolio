import React, { Component } from 'react'

import '../styles/header.css';
import Linker from './Linker';
import ReactTypingEffect from 'react-typing-effect';

export default class PortHeader extends Component {
  title="Developer,";
  titleDescription="Stepped into Programming with loads of dreams, building it up by learning and developing Applications & Games";
  defaultheader="portheader background-tint";
  constructor(props){
    super(props);
    // Run the checkHeader function every time you scroll
    // window.addEventListener('scroll', this.handleScroll); 
  }
  
  render() {
    return (
      <div className='portheader background-tint'>
      <ReactTypingEffect className="titledescribe" staticText={this.title} text={this.titleDescription} speed = "50" cursor="_" eraseDelay='1000000000'/>
      <div className='portLinker'>
      <Linker/>
      </div>
      </div>
      )
    }
    
    
    handleScroll=()=> {
      let scrollPosition = Math.round(window.scrollY);
      // If we've scrolled 100px, add "sticky" class to the header
      if (scrollPosition > 50){
        let header= document.getElementsByClassName(this.defaultheader);
        if(header.length>0)
          header[0].className=(this.defaultheader+' sticky');

        header= document.getElementsByClassName("pages");
        if(header.length>0)
          header[0].className=('pages'+' offset');
      }
      // If not, remove "sticky" class from header
      else {
        let header= document.getElementsByClassName(this.defaultheader+' sticky');
        if(header.length>0)
          header[0].className=(this.defaultheader);
          header= document.getElementsByClassName("pages"+' offset');
          if(header.length>0)
            header[0].className=('pages');
      }
    }
  }
  
  