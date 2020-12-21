import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


class GoalInput extends Component {
    state = {
        content: "",
        title: ""
    }
    
    handleOnChange = event => {
    const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleOnSubmit = event => {
      event.preventDefault();
      this.props.createGoal({
          title: this.state.title,
          content: this.state.content,
          user_id: this.props.user.id});
      this.setState({
          content: "",
          title: ""
      });
      window.location.reload()
    }
    render(){
    return (
            <Accordion>
            <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Add New Goal
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
                    <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset> 
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )}
}
export default (GoalInput)
