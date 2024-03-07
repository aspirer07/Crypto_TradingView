import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles (() => ({
    Banner: {
        backgroundImage: "url(./banner2.jpg)",
},
bannerContent: {
    height: 400,
    display: "flex",
    flexDirection:"column",
    paddingTop:25,
    justifyContent:"space-around",
},
tagline:{
    display:"flex",
    height:"40%",
    flexDirection:"column",
    justifyContent:"centre",
    textAlign:"cnetre",
},
}));
const Banner = ()=> {
    const classes = useStyles();

    return( <div className={classes.Banner}>
        <Container className={classes.bannerContent}> 
            <div className = {classes.tagline}>
                <Typography
                variant="h2"
                style={{
                    fontWeight:"bold",
                    marginBottom:15,
                    fontFamily:"Montserrat",
                }}
            >
                Crypto TradingView
            </Typography>
            <Typography
            variant="subtitle2"
            style={{
                color:"gold",
                textTransform:"capitalize",
                fontFamily: "Montserrat",
                fontWeight:"bold",
            }}
            >
                Your Trusted Cryptocurrrency Partner
            </Typography>
            </div>
            <Carousel/>
        </Container>
    </div>
    );

};

export default Banner;