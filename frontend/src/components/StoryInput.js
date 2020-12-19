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
      <div>
        <br/>
        <Form onSubmit={(event) => this.handleOnSubmit(event)}>
            <Form.Row>
                <Form.Label column="lg" lg={2}>
                    
                </Form.Label>
                    <Col>
                        <Form.Control size="lg" type="text" placeholder="Your Story's Title: " />
                    </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Form.Label column lg={2}>
                </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Normal text" />
                    </Col>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control placeholder={this.props.userState.email} disabled/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Author:</Form.Label>
                <Form.Control placeholder={this.props.userState.name} disabled/>
                </Form.Group>
            </Form.Row>
            <Button type="submit" class="btn btn-outline-primary btn-lg btn-block">Create Story</Button><hr></hr>

        </Form>
      </div>
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