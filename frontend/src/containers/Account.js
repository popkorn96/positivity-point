import React, { Component } from 'react'
import AccountItem from '../items/AccountItem'
import axios from 'axios';
import {getUser} from '../redux/actions/getUser';
import { connect } from 'react-redux';

class Account extends Component {
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
        const { user } = this.props;
        console.log(user)
        return (
            <div>
                <h1 class="text-center">Account Information</h1>
                <h2 class="text-center"><AccountItem user={this.props.user}/></h2>
                <h3 class="text-center">STATUS: <i>{this.props.loggedInStatus}</i></h3>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Post Its</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Stories</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Edit Information</button><hr></hr>
                <button 
                type="button" 
                class="btn btn-outline-primary btn-lg btn-block"
                onClick={() => this.handleLogoutClick()}
                >Logout</button><hr></hr>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = dispatch => ({
    getUser: dispatch(getUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Account);
