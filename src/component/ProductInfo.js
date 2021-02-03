import React from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {  Link } from 'react-router-dom';


function ProductInfo() {

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
    return (
      <div>
         <Grid container spacing={3} >
             {Object.entries(burgers).map(([productkey,{name,img}])=>(
            <Grid item xs key={productkey}>
                <Paper elevation={3} >
                    <Link class="link" to={productkey}>
                        <h2>{name}</h2>
                        <img class="burger" src = {img} alt={name}></img>
                    </Link>
                </Paper>
            </Grid>
        
           ))}
        </Grid>
      </div>
    );
  }
  
  export default ProductInfo;