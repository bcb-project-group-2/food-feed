import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import FeedPost from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';

const styles = {
  container: {
    position: 'fixed',
    background: 'white',
    width: 'fit-content',
    height: 'fit-content',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
};

@connect(store => store)
class PostModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      content: {}
    };

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.props.dispatch({
      type: 'TOGGLE_MODEL',
      payload: {
        post: {
          open: false,
        }
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.open !== !!nextProps.view.modals.post.open) {
      this.setState({
        open: nextProps.view.modals.post.open,
        // content: nextProps.post.open,
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.open || nextProps.view.modals.post.open;
  }



  render() {
    const {classes} = this.props;
    return (
      <Modal
        open={this.state.open}
        onClose={this.closeModal}
      >
        <div
          className={classes.posts}
        >
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(PostModal);