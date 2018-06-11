import React, { Component } from 'react'
import SignInForm from '../presentational/SignInForm'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom'
import chopsticks from '../images/chopSticks.png'


class SignInPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'signin',
      authenticated: false,
    };
    this.inputs = {
      signin: {
        user: '',
        pass: ''
      },
      signup: {
        user: '',
        pass: ''
      },
    };

    this.pageNode = React.createRef()

    this.handleInputs = this.handleInputs.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleInputs(feild, val) {
    this.inputs[this.state.mode][feild] = val;
    console.log(val, feild, this.state.mode)
  }

  authenticateTransition() {
    let node = this.pageNode.current;
    node.classList.add('fade-out');
    setTimeout(() => {
      this.setState({
        authenticated: true
      })
    }, 300)
  }


  formSubmit(event) {
    event.preventDefault();
    this.authenticateTransition();
  }


  render() {
    if (this.state.authenticated) {
      return <Redirect to='/feed'/>
    }
    return (
      <section id='sign-in-wrapper' ref={this.pageNode}>
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
          <SignInForm
            login={GoogleLogin}
            handleInputs={this.handleInputs}
            handleForm={this.formSubmit}
          />
        </div>
      </section>
    )
  }

}

export default SignInPageContainer;