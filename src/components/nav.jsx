import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/userActions";
import { useDispatch } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user
});
const Nav = ({ user }) => {
  const dispatch = useDispatch();

    function handleOut() {
          dispatch(logout())
    }
    return (
        <div className="container">
            {
                user && user.status === false ?
                    <div className="topnav">
                        {/* <a className="active" href="#home">Home</a> */}
                    </div> 
                    : 
                    <div className="topnav">
                        <a className="active" href="#home">Home</a>
                        <a className="text-right pull-right" href="#logout" onClick={handleOut}>Logout</a>
                    </div>
            }
        </div >
    );
}

// export default App;
export default connect(
    mapStateToProps,
    { logout }
)(Nav);
