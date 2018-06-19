import React, {Component} from 'react';
import SignInForm from '../presentational/SignInForm';
import SignUpForm from '../presentational/SignUpForm';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {GoogleLogin} from 'react-google-login';
import {Redirect} from 'react-router-dom'
import chopsticks from '../images/chopSticks.png'
import {authenticateUser, createUser} from "../actions/signIn";
import {connect} from 'react-redux'


@connect(store => {
  return store
})
class SignInPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'signin',
      authenticated: false,
    };
    this.inputs = {
      signin: {
        email: '',
        pass: '',
      },
      signup: {
        user: '',
        email: '',
        pass: '',
        passConf: '',
        img: ''
      },
    };

    this.pageNode = React.createRef();

    this.handleInputs = this.handleInputs.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.signSwitch = this.signSwitch.bind(this);
  }

  handleInputs(feild, val) {
    this.inputs[this.state.mode][feild] = val;
    console.log(val, feild, this.state.mode)
  }

  authenticateTransition() {
    // let node = this.pageNode.current;
    this.pageNode.current.classList.add('fade-out');
    setTimeout(() => {
      this.setState({
        authenticated: true
      })
    }, 300)
  }

  formSubmit(event) {
    event.preventDefault();
    if (this.state.mode === 'signin') {
      this.props.dispatch(
        authenticateUser(
          this.inputs.signin.email,
          this.inputs.signin.pass
        )
      )
    }
    else {
      this.props.dispatch(
        createUser(
          this.inputs.signup.email,
          this.inputs.signup.user,
          this.inputs.signup.pass,
          this.inputs.signup.img,
        )
      )
    }
  }

  loadForm() {
    return this.state.mode === 'signin' ?
      <SignInForm
        login={GoogleLogin}
        handleInputs={this.handleInputs}
        handleForm={this.formSubmit}
        switch={this.signSwitch}
      />
      :
      <SignUpForm
        login={GoogleLogin}
        handleInputs={this.handleInputs}
        handleForm={this.formSubmit}
        switch={this.signSwitch}
      />

  }

  signSwitch() {
    console.log('switch');
    if (this.state.mode === 'signin') {
      this.setState({mode: 'signup'})
    }
    else {
      this.setState({mode: 'signin'})
    }
  }

  componentWillReceiveProps(nextProps) {
    try {
      if (!!nextProps.user.currentUser.id) {
        this.authenticateTransition()
      }
    }
    catch(e) {}
  }

  render() {
    if (this.state.authenticated) {
      return <Redirect to='/dashboard'/>
    }
    else {
      return (
        <section
          style={this.state.authenticated ? {opacity: '0.1'} : {animation: 'fadein 300ms'}}
          id='sign-in-wrapper'
          ref={this.pageNode}>
          <div id='sign-in-title'
               style={{
                 padding: '1.5rem 5rem 3rem 5rem',
                 display: 'flex',
                 flexFlow: 'row nowrap',
                 // justifyContent: 'space-between'
                 justifyContent: 'center',
                 alignItems: 'center',
               }}>
            <Typography
              component='h1'
              style={{
                fontSize: '3rem',
                paddingRight: '1rem',
                borderBottom: 'solid black 1px'
              }}
            >
              #Foood-Feed
            </Typography>
            <Avatar>
              <PhotoCamera/>
            </Avatar>
          </div>
          <div id='chop-sticks'/>
          <div id='sign-in-form-container' style={{padding: '2rem 0'}}>
            {this.loadForm()}
          </div>
        </section>
      )
    }
  }

}

export default SignInPageContainer;