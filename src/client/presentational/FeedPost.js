import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class FeedPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div style={{padding: '.5rem'}}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://hightimes.com/wp-content/uploads/2017/04/Arizona-Police-Lizard.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography element='h4'>
              Post
            </Typography>
            <Typography element='p'>
              TEEEEEEE EEEE lEEEEEEEEEEE EEEEEEEE lEEEEEEEEE llEEx ltjha lsdlkfj lhjfhl lkjahsj lhdjfhfk
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(FeedPost);