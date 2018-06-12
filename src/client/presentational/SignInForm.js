import React, {Component} from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom'


const styles = theme => ({
  container: {
    width: 'fit-content',
    height: 'fit-content',
    padding: '2rem',
    margin: 'auto',
  },
  header: {
    fontSize: '2rem',
    textAlign: 'center'
  },
  textField: {
    // marginLeft: '1rem',
    // marginRight: '1rem',
    width: '100% !important',
    margin: '1rem',
  },
  link: {
    marginTop: '1rem',
    textAlign: 'center'
  }
});

class SignInForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.container}>
        <Typography className={classes.header} component='h3'>Sign In</Typography>
        <form
          id='sign-in-form'
          onSubmit={event => this.props.handleForm(event)}
          style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
          }}
        >
          <TextField
            required
            id='username'
            label='Username'
            placeholder='DavidBlanchard'
            className={classes.textField}
            margin='normal'
            onChange={event => this.props.handleInputs('user', event.target.value)}
            maxLength='10'
          />
          <TextField
            required
            placeholder='password123'
            id='password'
            label='Password'
            type='password'
            onChange={event => this.props.handleInputs('pass', event.target.value)}
            className={classes.textField}
            margin='normal'
          />
          <Button
            className={classes.textField}
            type='submit'
            variant='contained'
            color='primary'
            // onClick={() => this.props.handleSubmit(this.refs.form)}
          >
            Sign In
          </Button>
          <label htmlFor='login' style={{
            width: '100%',
            padding: 0,
            margin: 0,
          }}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.textField}
              component={this.props.login}
              style={{
                margin: 0,
                color: '#FFFFFF'
              }}
            >
              GoogleLogin
            </Button>
          </label>
          <this.props.login
            id="login"
            style={{display: 'none'}}
            classname={classes.textField}
            clientId="624256432400-7jde5h7a5lbn9tnmdtm07qt05d7c39nu.apps.googleusercontent.com"
            onSuccess={auth => console.log('success', auth)}
            onFailure={() => console.log('fail')}

          />
          <a className={classes.link} href='#'>Sign up Now!</a>
        </form>
      </Card>
    )
  }
};

export default withStyles(styles)(SignInForm)