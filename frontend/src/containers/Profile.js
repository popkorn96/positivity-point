import React, { Component } from 'react'
import axios from 'axios';
// import {getUser} from '../redux/actions/getUser';
import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props){
        super(props)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }
    // componentDidMount() {
    //     const id = this.props.user.id
    //     this.props.getUser(id);
    // }
    
    handleLogoutClick(){
        axios.delete(`http://localhost:3001/logout`, {withCredentials: true})
        .then(response => {
            this.props.handleLogout()
            this.props.history.push("/main")
        }).catch(error => console.log("logout error", error))
    };
    renderUser(){

    }
    render() {
        return (
            <div>
                <h1 class="text-center">Profile Information</h1>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Post Its</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Stories</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Edit Information</button><hr></hr>
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }
// const mapDispatchToProps = dispatch => ({
//     getUser: dispatch(getUser())
// })
// export default connect(mapStateToProps, mapDispatchToProps)
export default (Profile);
