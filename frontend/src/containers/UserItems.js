import React, { Component } from 'react'
import UserPostIts from '../components/UserPostIts'
import UserStories from '../components/UserStories';
import {getPostIts} from '../redux/actions/postItActions';
import {getStories} from '../redux/actions/storyActions';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class UserItems extends Component {
    componentDidMount() {
        this.props.getPostIts();
        this.props.getStories();
    };
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><UserPostIts deletePostIt={this.props.deletePostIt} postIts={this.props.postIts}/></Col>
                        <Col><UserStories deleteStory={this.props.deleteStory} stories={this.props.stories}/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        postIts: state.postIts.all,
        stories: state.stories.all
}}
const mapDispatchToProps = dispatch => ({
    getPostIts,
    getStories
  })

export default connect(mapStateToProps, mapDispatchToProps)(UserItems)

