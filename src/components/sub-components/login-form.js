import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles/login-form.css';

export default function LoginForm(props){

    const tryLogin = (event) => {
        event.persist();
        event.preventDefault();
    }

    const inputChanged = (event) => {
        event.persist();
    }
    let displayLoading = false;
    return(
        <div className="login-container center-container">
            <form className="login-form" onSubmit={(e) => tryLogin(e)}>
                <Typography variant='h4' className="form-title">{props.title}</Typography>
                <div className="input-container">
                    <TextField required id="user" label="Email" variant="outlined" helperText={props.error ? 'Error Loging in' : ''} onChange={(e) => inputChanged(e,'email')}/>
                </div>
                <div className="input-container">
                    <TextField required id="password" label="Password" variant="outlined" type="password" helperText={props.error ? 'Error Loging in' : ''} onChange={(e) => inputChanged(e,'pass')}/>
                </div>
                <div className="input-container">
                    <CircularProgress className={displayLoading ? '' : 'hidden'} />
                    <Button className={displayLoading ? 'hidden' : ''} variant="contained" color="primary" type="submit">Login</Button>
                    <Link to="/create-admin">
                        <Button className={displayLoading ? 'hidden' : ''} variant="contained" color="primary">
                        Update
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    )
    
}