import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {sessionStatus} from '../redux/actions/sessionStatus'
import {connect} from 'react-redux'


class StoryInput extends Component {
  state = {
    title: "",
    content: ""
  }
  componentDidMount() {
    this.props.sessionStatus();
    };

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createStory({title: this.state.title, content: this.state.content, user_id: this.props.userState.id});
    this.setState({
      title: '',
      content: ''
    });
  }
  render() {
    return(
      <Accordion>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Write A Story
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
                <form onSubmit={this.handleOnSubmit}>
                  <fieldset>
                    <div class="form-group">
                      <label class="col-form-label col-form-label-lg"  for="inputLarge">Title:</label>
                      <input class="form-control form-control-lg" value={this.state.title} type="text" 
                      onChange={this.handleOnChange}  name="title" placeholder="Your Title Here..." id="inputLarge" width="75"></input>
                    </div>
                    <div class="form-group">
                      <label for="content">Content:</label>
                      <textarea class="form-control" id="content" name="content" placeholder="Your content here..." value={this.state.content} rows="3" size="50" onChange={this.handleOnChange}></textarea>
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
                    <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset> 
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>


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