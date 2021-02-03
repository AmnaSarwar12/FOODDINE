import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Card2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="PIZZA"
          height="260"
          image="/images/pizza.png"
          title="Amazing Pizza"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Pizza Hut
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View more results
        </Button>
      </CardActions>
    </Card>
  );
}
export default Card2;
  