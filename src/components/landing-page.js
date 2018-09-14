import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';

import './style/landing-page.css';

export class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoginShowing: false
    };
  }

  render(){
    // If we are logged in redirect straight to the user's dashboard
    console.log(this.props.loggedIn);
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    const currentForm = (
      <div className="form-container">
        <RegistrationForm key="form"
          regSuccess={() => this.setState({isLoginShowing: true})}
        />
        <span className="form-container--message">{this.props.message}</span>,
      </div>
    );

    return (
      <div className="landing">
        <h2>Welcome to Sakura Learning!</h2>
        
        <div className="landing-content">
          <div className='landing-content-left'>
            <p>Ever wanted to learn Japanese? Now you can! 
            Sakura Learning allows you to learn Japanese with easy-to-use 
            flashcard exercises! To get started, please login or register.</p>
          </div>
          <div className='landing-content-right'>
            <h3>Register</h3>
            {currentForm}
          </div>
        </div>

      </div>
    );
  }

}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  message: state.user.message
});

export default connect(mapStateToProps)(LandingPage);
