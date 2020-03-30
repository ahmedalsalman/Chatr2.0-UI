import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

/*
 *
 * If the user isn't logged in, they should see the full page with the login link.
 * But if they're logged in, they should be redirected to another page entirely,
 * they shouldn't be able to have access to this page at all.
 *
 */

const Welcome = ({ user }) => (
  <header className="masthead d-flex">
    {!user ? (
      <center>
        <div className="overlay z-0" />
        <Link to="/login" className="btn btn-primary btn-lg">
          Login
        </Link>
      </center>
    ) : (
      <div className="container text-center my-auto z-1">
        <h1 className="mb-1">WELCOME TO CHATR</h1>
        <h3 className="mb-5">
          <em>You're gonna need to login to see the messages</em>
        </h3>
      </div>
    )}
  </header>
);
const mapStateToProps = ({ user }) => ({
  user
});
export default connect(mapStateToProps)(Welcome);
