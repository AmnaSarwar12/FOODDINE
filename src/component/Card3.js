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

function Card3() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Donuts"
          height="260"
          image="/images/donut.jpg"
          title="Amazing Donuts"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Dunkin Donut
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Dunkin' is the world's leading baked goods and coffee chain, serving more than 3 million customers each and every day. True to our name, we offer 50+ varieties of donuts, but you can also enjoy dozens of premium beverages, bagels, breakfast sandwiches and other baked goods.
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
export default Card3;
  