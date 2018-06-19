import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import FileUpload from '!@material-ui/icons/FileUpload'
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
  imageUrl: {
    width: '100% !importaint',
    height: 'fit-content',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  link: {
    marginTop: '1rem',
    textAlign: 'center'
  }
});

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileUrl: null
    };

    this.uploadUrlRef = React.createRef();
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload() {
    window.cloudinary.openUploadWidget(
      {upload_preset: 'my_preset'},
      (err, res) => {
        if (err) throw err;
        this.props.handleInputs('img', res[0].url);
        this.setState({profileUrl: res[0].url})
      },
    );

  }

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.posts}>
        <Typography
          className={classes.header}
          component='h3'
          id='sign-up-title'
        >
          Sign up
        </Typography>
        <Popover
          open={this.props.error.open}
          anchorEl={document.getElementById('sign-up-title')}
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
          <TextField
            required
            placeholder='password123'
            id='confirm-password'
            label='Confirm Password'
            type='password'
            onChange={event => this.props.handleInputs('passConf', event.target.value)}
            className={classes.textField}
            margin='normal'
          />
          <TextField
            required
            id='email'
            label='Email Address'
            placeholder='DavidBlanchard@dfb.io'
            className={classes.textField}
            margin='normal'
            onChange={event => this.props.handleInputs('email', event.target.value)}
          />
          <div className={classes.imageUrl}>
            <TextField
              value={this.state.profileUrl || null}
              required
              id='img'
              label={this.state.profileUrl ? '' : 'image url'}
              margin='normal'
              onChange={event => this.props.handleInputs('img', event.target.value)}
              innerRef={this.uploadUrlRef}
            />
            <IconButton
              onClick={this.handleUpload}
            >
              <FileUpload/>
            </IconButton>
          </div>
          <Button
            className={classes.textField}
            type='submit'
            variant='contained'
            color='primary'
            // onClick={() => this.props.handleSubmit(this.refs.form)}
          >
            Sign up
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
              onSuccess={auth => console.log(JSON.stringify(auth, null, 2))}
              clientId="624256432400-7jde5h7a5lbn9tnmdtm07qt05d7c39nu.apps.googleusercontent.com"
            >
              Google Login
            </Button>
          </label>
          <Button
            variant='contained'
            onClick={this.props.switch}
            className={classes.textField}>
            sign in
          </Button>
          <this.props.login
            id="login"
            style={{display: 'none'}}
            classname={classes.textField}
            clientId="624256432400-7jde5h7a5lbn9tnmdtm07qt05d7c39nu.apps.googleusercontent.com"
            onSuccess={auth => console.log('success', auth)}
            onFailure={() => console.log('fail')}

          />
        </form>
      </Card>
    )
  }
}
;

export default withStyles(styles)(SignInForm)