import React from 'react';
import LoginForm from '../sub-components/login-form';
import { Redirect } from 'react-router';
import { withRouter} from 'react-router-dom';
//import {refreshAuthToken,enableTestMode} from '../actions/authActions';
import './styles/landing-page.css';

export function LandingPage(props){
    const title = 'BYH App';
    if(props.currentUser){
        return <Redirect to='/create-lesson'/>;
    }

    if(props.location.pathname.includes('/test')){
        //props.dispatch(enableTestMode());
        return <Redirect to='/'/>;
    }
    
    return(
        <div className="center-container">
            <LoginForm title={title}/>
        </div>
    )
}

export default withRouter(LandingPage);