import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Stories from '../components/Stories';
import PostIts from '../components/PostIts';
import SavedStories from '../components/SavedStories';
import Account from '../containers/Account';
import UserStories from '../components/UserStories';
import UserPostIts from '../components/UserPostIts';

function Routes() {
    return (
        <Switch>
            <div>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/stories" component={Stories}/>
                <Route exact path="/post-its" component={PostIts}/>
                <Route exact path="/saved-stories" component={SavedStories}/>
                <Route exact path="/account" component={Account}/>
                <Route exact path="/userStories" component={UserStories}/>
                <Route exact path="/userPostIts" component={UserPostIts}/>
            </div>
        </Switch>
    )
}

export default Routes;
