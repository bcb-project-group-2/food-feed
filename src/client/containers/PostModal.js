import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import FeedPost from '../presentational/FeedPost'
import {withStyles} from '@material-ui/core/styles';

const styles = {
  posts: {
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
    this.props.dispatch({type: 'TOGGLE_MODEL'})
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.open !== nextProps.view.modalOpen) {
      this.setState({
        open: nextProps.view.modalOpen,
        // content: nextProps.post.open,
      })
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.state.open !== nextProps.view.modalOpen
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
          <FeedPost/>
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(PostModal);