import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { sessionStatus } from '../redux/actions/sessionStatus'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};