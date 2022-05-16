import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './section.css';
import OkImg from '../Impish-Indri.jpg';


 import { Link } from "react-router-dom"


class Section extends Component {
  constructor(props){
    super(props);
    // Не вызывайте здесь this.setState()!
    this.state = { counter: 0 };
    this.OMG=this.OMG.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.images = {isToggleon: true};
  }
  OMG(){
    console.log("i 'm, working!"+this.state.counter);
    this.state.counter++;
    if(this.state.counter===1){
      document.querySelector("body > main > section > span").classList.remove('openT');
    document.querySelector("body > main > section > span").classList.add('open');
    }else if(this.state.counter===2){
    document.querySelector("body > main > section > span").classList.remove('open');
      document.querySelector("body > main > section > span").classList.add('open3');
    }else{
      document.querySelector("body > main > section > span").classList.remove('open3');
        document.querySelector("body > main > section > span").classList.add('openT');
        this.state.counter=0;
    }

    let divEl =document.createElement('div');
    divEl.classList.add('newElement');
    document.body.insertBefore(divEl, document.querySelector('main'));
    document.querySelector('.newElement').addEventListener('click',()=>{
      console.log("of");
      divEl.remove();
    });
    const txt='<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
    divEl.innerHTML=txt;
    // if(this.state.counter===1){
    //     document.querySelector('.tXt').
    //     document.querySelector('.newElement').prepend(document.querySelector('.tXt'));
    //   document.querySelector('.tXt').style.cssText="dipalay;block";
    // }

  }
  render() {
    return (
    <React.Fragment>
    <h1>Section</h1>
    <p>123</p>
    <i>lorem</i>
<span> oK new Text to section the future </span>
<p style={{color:"white"}}> GOOD things ARE G<span style={{color:"red"}}>O</span>ING to HAPPEN</p>
<strong style={{borderRadius:"10px",background:"rgba(0,0,255,0.3)",display:"grid",alignItems:"center",justifyContent:"center"}} onClick={this.OMG}>Open!</strong>


    </React.Fragment>
    );
  }
}

export default Section;
