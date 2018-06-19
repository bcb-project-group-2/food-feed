import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card'
import Loading from '../presentational/Loading'
import FeedPost from '../presentational/FeedPost'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import TextFeild from '@material-ui/core/TextField'
import ListText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import {withStyles} from '@material-ui/core/styles';

const styles = {
  container: {
    position: 'fixed',
    background: 'transparent',
    width: '100vw',
    height: '100vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
};

@connect(store => store)
class PostModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        id: 0
      }
    };
    this.mounted = false;
    this.input = '';

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  closeModal() {
    this.props.dispatch({
      type: 'TOGGLE_MODEL',
      payload: {
        post: {
          open: false,
        }
      }
    });
  }

  handleChange(event) {
    this.input = event.target.value;
    console.log(this.input);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.input.length > 1) {
      axios.post(
        '/api/comments/new',
        {
          UserId: this.props.user.currentUser.id,
          PostId: this.state.post.id,
          body: this.input
        }
      ).then(res => {
        console.log('res', res);
        this.getData(this.props)
      })
    }
  }

  getComments() {
    return this.state.comments.map(comment => {
      return (
        <ListItem style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'start',
          alignItems: 'start',
          borderTop: 'solid 1px gray',
        }}>
          <ListText>
            <Typography
              style={{
                width: 'fit-content',
                borderBottom: 'solid 1px gray'
              }}
              variant='caption'
            >
              {comment.User.user_name}
            </Typography>
          </ListText>
          <ListText>
            <Typography variant='subheading'>
              {comment.body}
            </Typography>
          </ListText>
        </ListItem>
      )
    }).reverse()
  }

  getPost() {
    console.log(this.state);
    try {
      if (this.state.postLoad) {
        return (
          [
            <FeedPost
              m={true}
              authorName={this.state.author.user_name}
              authorId={this.state.author.id}
              {...this.state.post}
            />,
            <Card style={{
              width: '25%',
              padding: '0 .5rem',
            }}>
              <ListItem
                style={{
                  width: '100%',
                }}
              >
                <ListText
                  style={{
                    width: '100%',
                  }}
                >
                  <Typography
                    variant='headline'
                    style={{
                      textAlign: 'center',
                      margin: 'auto',
                      width: 'fit-content',
                    }}
                  >
                    Comments
                  </Typography>
                </ListText>
              </ListItem>
              <List
                style={{
                  width: '100%',
                  maxHeight: '50vh',
                  overflow: 'auto'
                }}>
                {this.getComments()}
              </List>
              <form
                onSubmit={event => this.handleSubmit(event)}
                style={{
                  width: 'max-content',
                  height: 'fit-content',
                  padding: '.5rem',
                  borderTop: 'solid 1px black',
                  margin: 'auto',
                }}
              >
                <TextFeild
                  required
                  id='comment-input'
                  label='New Comment'
                  onChange={event => this.handleChange(event)}
                />
              </form>
            </Card>
          ]
        )
      }
      else {
        return <Loading/>
      }
    }
    catch (e) {
      console.log('load post err', e);
      return <Loading/>
    }
  }

  getData(props) {

    try { // if (
      //
      // ) {
      axios.get(`/api/post/full/${props.view.modals.post.id}`)
        .then(res => {
          console.log('data', res.data);
          if (!!res.data) {
            this.setState({
              ...this.state,
              post: {
                id: res.data.id,
                url: res.data.url,
                title: res.data.title,
                description: res.data.description,
                likeCount: res.data.likeCount,
                category: res.data.category,
                UserId: res.data.UserId,
              },
              author: res.data.User,
              comments: res.data.Comments,
              postLoad: true,
            })
          }
        })
      // }
    }
    catch (e) {
      console.log('recieve prope err', e)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getData(nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     this.props.view.modals.post.open !== nextProps.view.modals.post.open ||
  //     this.state !== nextState
  //   )
  // }


  render() {
    const {classes} = this.props;
    return (
      <Modal
        open={this.props.view.modals.post.open}
        onClose={this.closeModal}
      >
        <div
          className={classes.container}
        >
          {!!this.props.view.modals.post.id ? this.getPost() : null}
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(PostModal);