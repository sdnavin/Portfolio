import React from 'react'
import dp from '../images/rich.jpg';
import '../styles/header.css';
import Linker from './Linker';
import ReactTypingEffect from 'react-typing-effect';

export default function PortHeader() {
  var portfolioName="Richard Navin";
  var title="Developer,";
  var titleDescription="Stepped into Programming with loads of dreams, building it up by learning and developing Applications & Games";


  return (
    <div className='portheader background-tint'>
      {/* <img src={dp} className="portfolio-dp" alt="logo" />
      <h1 className='portname'> {portfolioName}</h1> */}
      
      <ReactTypingEffect className="titledescribe" staticText={title} text={titleDescription} speed = "100" cursor="_" eraseDelay='1000000000'/>
        <div className='portLinker'>
          <Linker/>
        </div>
    </div>
  )
}
