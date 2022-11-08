import React from "react";
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Forgotpassword() {
    let navigate = useNavigate();
    return <div className='sign-in-container'>
            ForgotPassword
        <div className='container-textfield'>
            <TextField
                label="Email"
                required
                name="email"
                fullWidth
                autoComplete="username"
                autoFocus
            />
        </div>
        <div className='container-textfield'>
            <TextField
                label="Code"
                required
                name="code"
                autoComplete="username"
                autoFocus
            />
        </div >
            <Button type="submit" onClick = {() =>navigate('/SignIn')} variant="contained" sx={{ mt: 2 }}>
                Sign In
            </Button>
        </div>;
}

export default Forgotpassword;