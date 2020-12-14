// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import Stories from './components/Stories';
import PostIts from './components/PostIts';
import SavedStories from './components/SavedStories';
import Account from './containers/Account'
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component= {Home}/>
        <Route path="/stories" component={Stories}/>
        <Route path="/post-its" component={PostIts}/>
        <Route path="/saved-stories" component={SavedStories}/>
        <Route path="/account" component={Account}/>
      </Switch>
    </Router>
  );
}

export default App;
