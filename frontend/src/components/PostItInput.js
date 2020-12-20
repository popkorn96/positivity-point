import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {sessionStatus} from '../redux/actions/sessionStatus'
import {connect} from 'react-redux'

class PostItInput extends Component {
    state = {
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
        this.props.createPostIt({content: this.state.content, user_id: this.props.userState.id});
        this.setState({
          content: ''
        });
        window.location.reload()
      }
    render() {
        
        return (
            <Accordion>
            <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Create A Post-It
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
                <form onSubmit={this.handleOnSubmit}>
                  <fieldset>
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
export default connect(mapStateToProps, mapDispatchToProps)(PostItInput)
