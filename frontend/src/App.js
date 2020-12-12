import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Stories from './components/Stories';
import PostIts from './components/PostIts';
import SavedStories from './components/SavedStories';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component= {Home}/>
        <Route path="/stories" component={Stories}/>
        <Route path="/post_its" component={PostIts}/>
        <Route path="/saved_stories" component={SavedStories}/>
      </Switch>
    </Router>
  );
}

export default App;
