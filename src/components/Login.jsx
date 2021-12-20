import React from 'react';
import login from '../components/images/login.png';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Login = (props) =>{
  return(
    <>
      <div className="container_full" style={props.backColor}>
        <div className="container main_box">
            <div className="formbox">
              <div className="form_image">
                <img src={login} alt="imagefor" />
              </div>
              <div className="logform">
                <h1 className="alignment">Login</h1>
                <div className="input_box double">
                  <div className="twoinput">
                    <input type="text" required/>
                    <label> First Name </label>
                  </div>
                  <div className="twoinput">
                    <input type="text" required/>
                    <label> Last Name </label>
                  </div>
                </div>
                <div className="input_box">
                  <input type="Email" required/>
                  <label>Email </label>
                </div>
                <div className="input_box">
                  <input type="number" required/>
                  <label>Phone Number </label>
                </div>
                <div className="input_box">
                  <input type="password" required/>
                  <label>Password </label>
                </div>
                <Tooltip title="Submit">
                  <Button variant="contained" color="secondary" style={props.themes}>Submit</Button>
                </Tooltip>
              </div>  
            </div>
        </div>
      </div>
    </>
  );
}

export default Login;
