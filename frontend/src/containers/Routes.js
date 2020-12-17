import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Stories from '../components/Stories';
import PostIts from '../components/PostIts';
import SavedStories from '../components/SavedStories';
import Profile from '../containers/Profile'

function Routes() {
    return (
        <Switch>
            <div>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/stories" component={Stories}/>
                <Route exact path="/post-its" component={PostIts}/>
                <Route exact path="/saved-stories" component={SavedStories}/>
                <Route exact path="/profile" component={Profile}/>
            </div>
        </Switch>
    )
}

export default Routes;
