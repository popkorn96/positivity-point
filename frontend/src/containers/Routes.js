import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Stories from '../components/Stories';
import PostIts from '../components/PostIts';
import SavedStories from '../components/SavedStories';
import Account from '../containers/Account';
import UserStories from '../components/UserStories';
import UserPostIts from '../components/UserPostIts';
import UserItems from '../containers/UserItems';
import Comments from '../components/Comments';
import Main from '../containers/Main'
import Login from '../components/Login'


function Routes() {
    return (
        <Switch>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/main" component={Main}/>
                <Route exact path="/stories" component={Stories}/>
                <Route exact path="/post-its" component={PostIts}/>
                <Route exact path="/saved-stories" component={SavedStories}/>
                <Route exact path="/account" component={Account}/>
                <Route exact path="/userStories" component={UserStories}/>
                <Route exact path="/userPostits" component={UserPostIts}/>
                <Route exact path="/userPosts" component={UserItems}/>
                <Route exact path="/comments" component={Comments}/>
                <Route exact path="/login" render={(routerProps) => <Login history={routerProps.history} />}></Route>
            </div>
        </Switch>
    )
}

export default Routes;
