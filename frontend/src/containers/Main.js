import React, { Component } from 'react';
import logo from '../items/logo.png'

export default class Main extends Component{
  render (){
    return (
      <div>
        <br/>
          <h1 class="text-center" >Positivity Point</h1><hr/>
          <img src={logo} alt="Logo" className="logo"/>
          <h6><br/>This social media app is a positive place where you can share successes, gratitudes and encouragement with others!<br/>
          With public stories and post-its, this app lets you inspire and be inspired by others! Your homepage holds private goals which <br/>
          you can keep track of and improve on as you live life. There is also a feature that will let you connect with mentors through<br/>
          their success stories, coming soon!</h6><br/>
          <h2>You can signup or login above!</h2>
      </div>
  );}
};