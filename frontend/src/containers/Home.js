import React, { Component } from 'react'
import Goals from '../components/Goals'

class Home extends Component {
    render(){    
        return (
        <div>
            <h1>Home</h1>
            <p>Positivity-Point is.. 
                <strong>A Place Where You Can Reach A Positive Mindset & Achieve Your Goals</strong></p>
                <i><p>Surround yourself with positive and successful people. The influence people have over our own personal energy is amazing. Moods and attitudes are so easily spread – think about how much of a difference a simple smile from a stranger can make for your day, and then magnify it 1000 times!  When you have people around you who inspire you, believe in you and want you to succeed, there’s no room for doubts and even when they creep up, they’re quickly swept away. </p></i>
            < Goals />
        </div>
    )}
}
export default Home;
