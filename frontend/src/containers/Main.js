import React from 'react';
import {Link} from 'react-router-dom'
const Main = () => {
  return (
    <div>
        <h1 class="text-center">Main</h1>
            <button type="button" class="btn btn-outline-primary btn-lg btn-block" ><Link to='/login'>Log In</Link></button><hr></hr>
            <button type="button" class="btn btn-outline-primary btn-lg btn-block" ><Link to='/signup'>Sign Up</Link></button><hr></hr>
    </div>
  );
};
export default Main;