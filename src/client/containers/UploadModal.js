import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import FileUpload from '!@material-ui/icons/FileUpload'
import Cancel from '!@material-ui/icons/Cancel'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  imageUrl: {
    width: '100% !importaint',
    height: 'fit-content',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  container: {
    position: 'fixed',
    background: 'white',
    width: '27rem',
    height: 'fit-content',
    top: '50%',
    left: '50%',
    padding: '.5rem',
    transform: 'translate(-50%, -50%)',
  },
  textField: {
    // marginLeft: '1rem',
    // marginRight: '1rem',
    width: '100% !important',
    margin: '1rem',
  },
  bar: {
    height: 'fit-content',
    display: 'flex',
    flexFlow: 'row-reverse nowrap',
    justifyContent: 'space-between',
    padding: '0 .4rem',
    borderBottom: '1px solid gray',
  },
  header: {
    fontSize: '2rem',
    textAlign: 'center',
  },
};

@connect(store => store)
class UploadModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null
    };

    this.inputs = {
      title: '',
      description: '',
      mood: '',
      img: '',
    }

    this.handleInputs = this.handleInputs.bind(this)
  }

  handleInputs(feild, val) {
    this.inputs[feild] = val;
    console.log(feild, val)
  }

  handleUpload() {
    window.cloudinary.openUploadWidget(
      {upload_preset: 'my_preset'},
      (err, res) => {
        if (err) throw err;
        this.props.handleInputs('img', res[0].url);
        this.setState({imageUrl: res[0].url})
      },
    );
  }

  shouldComponentUpdate(nextProps) {
    return this.props.view.modals.upload !== nextProps.view.modals.upload
  }

  render() {
    const {classes} = this.props;
    return (
      <Modal open={this.props.view.modals.upload || false}>
        <Card className={classes.container}>
          <div className={classes.bar}>
            <IconButton
              onClick={() => this.props.dispatch({
                type: 'TOGGLE_MODAL', payload: 'upload'
              })}
            >
              <Cancel/>
            </IconButton>
            <Typography className={classes.header} variant='headline'>Upload</Typography>
          </div>
          <form
            id='sign-in-form'
            // onSubmit={event => this.props.handleForm(event)}
            style={{
              padding: '0 1rem',
              display: 'flex',
              flexFlow: 'column nowrap',
              alignItems: 'center',
            }}
          >
            <TextField
              required
              id='title'
              label='Title'
              placeholder='Foooooooooood'
              className={classes.textField}
              margin='normal'
              onChange={event => this.handleInputs('title', event.target.value)}
              maxLength='10'
            />
            <TextField
              required
              id='mood'
              label='Mood'
              placeholder='Dank Sushi'
              className={classes.textField}
              margin='normal'
              onChange={event => this.handleInputs('mood', event.target.value)}
              maxLength='10'
            />
            <TextField
              required
              multiline
              id='description'
              label='description'
              placeholder='Dank Sushi'
              className={classes.textField}
              margin='normal'
              onChange={event => this.handleInputs('description', event.target.value)}
              maxLength='10'
            />
            <div className={classes.imageUrl}>
              <TextField
                value={this.state.imageUrl || null}
                required
                id='img'
                label={this.state.imageUrl ? '' : 'image url'}
                margin='normal'
                onChange={event => this.handleInputs('img', event.target.value)}
              />
              <IconButton
                onClick={this.handleUpload}
              >
                <FileUpload/>
              </IconButton>
            </div>
            <Button
              className={classes.textField}
              variant={"contained"}
              color={"primary"}
            >
              create post
            </Button>
          </form>
        </Card>
      </Modal>
    )
  }


}

export default withStyles(styles)(UploadModal);