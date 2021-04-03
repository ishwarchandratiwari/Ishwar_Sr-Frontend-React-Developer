import { connect } from "react-redux";
import { login } from "../actions/userActions";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user
});

const Login = ({ user, login }) => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector(state => state.user.status);
  const dispatch = useDispatch();

  // // reset login status
  // useEffect(() => {
  //   logout()
  // }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      dispatch(login({username:username, password:password}));
    }
  }
  return <div className="row">{
    <div className="col-md-12">
      <div className="thumbnail card text-center">
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
            {submitted && !username &&
              <div className="invalid-feedback">Username is required</div>
            }
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
            {submitted && !password &&
              <div className="invalid-feedback">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
            // onClick={() => login({ email: 'User007', pass: 'User0071' })}
            >
              {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    <br></br>
            {/* <h>{user && user.data.email}</h> */}
            {user && user.status===false && user.data &&
              <div className="invalid-feedback">{user.data}</div>
            }
          </div></form>
        <div>
          <div className='form-group'>

          </div>
        </div>
      </div>
    </div>
  }</div>;
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
