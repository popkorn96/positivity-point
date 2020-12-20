import React, { Component } from 'react'
import Goals from '../components/Goals'

class Home extends Component {
    render(){    
        return (
        <div>
            <br/>
            <h1>Home</h1>
                <p><strong>A Place Where You Can Reach A Positive Mindset & Achieve Your Goals</strong></p>
                <i><p>Surround yourself with positive and successful people. <br/>
                The influence people have over our own personal energy is amazing. <br/>
                Moods and attitudes are so easily spread – think about how much of a difference a simple smile from a stranger <br/>
                can make for your day, and then magnify it 1000 times!  When you have people around you who inspire you, <br/>
                believe in you and want you to succeed, there’s no room for doubts and even when they creep up, <br/>
                they’re quickly swept away. </p></i><hr/>
            < Goals />
        </div>
    )}
}
export default Home;
