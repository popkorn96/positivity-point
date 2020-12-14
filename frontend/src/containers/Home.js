import React, { Component } from 'react'
import Goals from '../components/Goals'

class Home extends Component {
    render(){    
        return (
        <div>
            <h1>Home</h1>
            <h3>STATUS: <i>{this.props.loggedInStatus}</i></h3>
            <p>Positivity-Point is.. 
                <strong>A Place Where You Can Reach A Positive Mindset & Achieve Your Goals</strong></p>
            < Goals />
        </div>
    )}
}
export default Home;
