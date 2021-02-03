import React from 'react';
import { useParams } from 'react-router-dom';
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


function ProductDetail() {
    const classes = useStyles();
    const burgers = {
        "crunchos 1": {
            name : "CRUNCHOS",
            img : "/images/burgerpic2.jpg"
        },
    
        "measymeat 2": {
            name: "MeasyMeat",
            img : "/images/burgerpic8.jpg"
        },
    
        "smoky tang 3": {
            name: "Smoky Tang",
            img : "/images/burgerpic4.jpg"
        },
    
        "pizza burger 4": {
            name: "Pizza Burger",
            img : "/images/burgerpic5.jpg"
        },
        "fiery gigantic 5": {
            name: "FIERY GIGANTIC",
            img : "/images/burgerpic9.jpg"
        },
        "wings 6": {
            name: "FIERY WINGS",
            img : "/images/burgerpic7.jpg"
        },
    }
    const {productkey} = useParams();
    const burger = burgers[productkey];

    if (!burger) {
        return <h2>not found!</h2>
    }

    const {name,img} = burger;
    return (
      <div>
          <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Donuts"
                        height="260"
                        image={img}
                        title="Amazing Donuts"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     RS 350
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        
      </div>
    );
 }
  
  export default ProductDetail;