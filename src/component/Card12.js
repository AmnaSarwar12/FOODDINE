
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Card12() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="BURGER"
          height="260"
          image="/images/burger.jpg"
          title="Amazing Burger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Burger o clock
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Burger O'Clock is a modern restaurant that exists to delight passionate burger lovers. ... If its your first trip you would love our gourmet burgers Crunchos with fried mozzarella cheese patty and crisp nachos or Messy meat with crispy onion rings and saucy chili.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/Product">
        <Button size="small" color="primary">
          View more results
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
export default Card12;
  