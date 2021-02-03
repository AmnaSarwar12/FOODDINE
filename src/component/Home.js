import React from 'react';
import Header from './Header';
import '../App.css';
import Card12 from './Card12'
import Grid from '@material-ui/core/Grid';

import Card2 from './Card2';
import Card3 from './Card3'


function Home() {
    return (
      <div>
        <Header />
         <img class ="foodinn" src="/images/foodpic.jpg" alt="food pic"></img>

         <div>
             <h2 class="text">WELCOME TO FOODDINE</h2>
         </div>
         <div>
        <Grid container spacing={3}>
            <Grid item xs>
                <Card12 />
            </Grid>
            <Grid item xs>
                <Card2 />
            </Grid>
            <Grid item xs>
                <Card3/>
            </Grid>
        </Grid>
         </div>
      </div>
      

      
    );
  }
  
  export default Home;
  