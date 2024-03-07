import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faReddit } from '@fortawesome/free-brands-svg-icons';
import { Container, Typography } from '@material-ui/core';

const Contact = () => {
    
return (
    <Container style={{ display:"flex",justifyContent:'center'}} fontFamily="Montserrat">
    <div> <Typography style={{ color:"#EEBC1D",marginBottom:20}}>
        <h2>JOIN US ON</h2>
        </Typography> </div>
    <div className = "social">        
        <a href= "https://www.facebook.com/anujsarsolkar.07" style={{ cursor:"pointer",marginLeft:10}}><FontAwesomeIcon icon = {faFacebook}></FontAwesomeIcon></a>
        <a href= "https://www.instagram.com/anuj_sarsolkar/" style={{ cursor: "pointer",marginLeft:10,marginRight:10}}><FontAwesomeIcon icon = {faInstagram}></FontAwesomeIcon></a>
        <a href= "https://www.linkedin.com/in/anuj-sarsolkar-7b7946202/" style={{ cursor: "pointer"}}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></a>
        <a href= "https://www.reddit.com/r/CryptoCurrency/" style={{ cursor: "pointer",marginLeft:10,marginRight:10}}><FontAwesomeIcon icon = {faReddit}></FontAwesomeIcon></a>
        <a href= "https://github.com/aspirer07" style={{ cursor: "pointer"}}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></a>        
        
        
    </div>
    </Container>
  );
}
export default Contact;
