import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  posts: {
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
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.posts}>
        <Typography
          id='sign-in-title'
          className={classes.header}
          component='h3'
        >
          Sign In
        </Typography>
        <Popover
          open={this.props.error.open}
          anchorEl={document.getElementById('sign-in-title')}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>{this.props.error.message}</Typography>
        </Popover>
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
            id='email'
            label='Email'
            placeholder='DavidBlanchard@gobalto.com'
            className={classes.textField}
            margin='normal'
            onChange={event => this.props.handleInputs('email', event.target.value)}
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
          <Button
            variant='contained'
            className={classes.textField}
            onClick={this.props.switch}
          >Sign up Now!</Button>
        </form>
      </Card>
    )
  }
};
export default withStyles(styles)(SignInForm)