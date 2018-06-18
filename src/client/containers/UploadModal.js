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
  container: {
    position: 'fixed',
    background: 'white',
    width: 'fit-content',
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
              maxLength='10'
            />
            <TextField
              required
              id='mood'
              label='Mood'
              placeholder='Dank Sushi'
              className={classes.textField}
              margin='normal'
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
              maxLength='10'
            />
          </form>
        </Card>
      </Modal>
    )
  }


}

export default withStyles(styles)(UploadModal);