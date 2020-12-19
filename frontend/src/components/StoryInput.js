import React, { Component } from 'react'
import {sessionStatus} from '../redux/actions/sessionStatus'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


class StoryInput extends Component {
  state = {
    title: "",
    content: ""
  }
  componentDidMount() {
    this.props.sessionStatus();
    };

  handleOnChange(event){
    this.setState({
      name: event.target.value,
    });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addStory(this.state);
    this.setState({
      name: '',
    });
  }
  render() {
    return(
    <form>
        <fieldset>
          <legend>Write A Story</legend>
          <div class="form-group">
            <label class="col-form-label col-form-label-lg" for="inputLarge">Title:</label>
            <input class="form-control form-control-lg" type="text" placeholder="Your Title Here" id="inputLarge"></input>
          </div>
          <div class="form-group">
            <label for="content">Content:</label>
            <textarea class="form-control" id="content" rows="3"></textarea>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
            <div class="col-sm-10">
            <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value={this.props.userState.email}></input>
            </div>
          </div> 
          <div class="form-group row">
            <label for="staticUser" class="col-sm-2 col-form-label">Author:</label>
            <div class="col-sm-10">
            <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value={this.props.userState.name}></input>
            </div>
          </div>
      </fieldset> 
    </form>
    )
  }
}
const mapStateToProps = state => {
    return {
        userState: state.userState.user
    };
};
const mapDispatchToProps={
    sessionStatus
};
export default connect(mapStateToProps, mapDispatchToProps)(StoryInput);