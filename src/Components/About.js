import { Button, Container,  Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();

  return (

  <Container style={{ textAlign:"center"}}> 
       <Typography
          style={{ margin: 18, color:"#EEBC1D",fontFamily:"Montserrat", fontWeight: "bold" }}
           >
         <h1> Hey Newbie, regards from Team Crypto TradingView.</h1>
      </Typography>
      <div> 
    <img src={"CC.jpg"}
    alt={""}
    height="300"
    width="1200"
  />
  </div>
      <Typography
      style={{ textAlign:"justify" }}>
        <h2 style={{ color:"#EEBC1D"}}>Cryptocurrency - meaning and definition</h2>
        <h4><p>Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions.
          Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units.</p></h4>
          <br/>
          <h2 style={{ color:"#EEBC1D"}}>What is cryptocurrency?</h2>
          <h4><p>Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions.
            It's a peer-to-peer system that can enable anyone anywhere to send and receive payments. 
            Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. 
            When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.</p></h4>
            <h4><p>Cryptocurrency received its name because it uses encryption to verify transactions. 
              This means advanced coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers. 
              The aim of encryption is to provide security and safety.</p></h4>
            <h4><p>The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today. 
              Much of the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.</p></h4>
              <br/>
              <h2 style={{color:"#EEBC1D"}}>How does cryptocurrency work?</h2>
              <h4><p>Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.</p></h4>
              <h4><p>Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins. 
                Users can also buy the currencies from brokers, then store and spend them using cryptographic wallets.</p></h4>
              <h4><p>If you own cryptocurrency, you don't own anything tangible. 
                What you own is a key that allows you to move a record or a unit of measure from one person to another without a trusted third party.</p></h4>
              <h4><p>Although Bitcoin has been around since 2009, cryptocurrencies and applications of blockchain technology are still emerging in financial terms, and more uses are expected in the future. 
                Transactions including bonds, stocks, and other financial assets could eventually be traded using the technology.</p></h4>
              <br/>
              <h2 style={{ color:"#EEBC1D" }}>Browse through some of the related videos.</h2>
              <br/>
              <div className="videos" style={{ display:"flex",height:250,overflowX:"scroll", backgroundColor:"#FF0000",scrollbarColor:"#FF0000"}}>
                <iframe
                width="400"
                height="200"
                src="https://youtube.com/embed/1YyAzVmP9xQ"
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyrosope; picture-in-picture"
                allowFullScreen
                style={{marginLeft:15,marginTop:15}}
                ></iframe>
                 <iframe
                width="400"
                height="200"
                src="https://youtube.com/embed/SSo_EIwHSd4"
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyrosope; picture-in-picture"
                allowFullScreen
                style={{marginLeft:15,marginTop:15}}
                ></iframe>
                <iframe
                width="400"
                height="200"
                src="https://youtube.com/embed/Fx5mWceRQpM"
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyrosope; picture-in-picture"
                allowFullScreen
                style={{marginLeft:15,marginTop:15}}
                ></iframe>
                <iframe
                width="400"
                height="200"
                src="https://youtube.com/embed/rYQgy8QDEBI"
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyrosope; picture-in-picture"
                allowFullScreen
                style={{marginLeft:15,marginTop:15}}
                ></iframe>
                <iframe
                width="400"
                height="200"
                src="https://youtube.com/embed/ZE2HxTmxfrI"
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyrosope; picture-in-picture"
                allowFullScreen
                style={{marginLeft:15,marginTop:15}}
                ></iframe>
                 <iframe
                width="400"
                height="200"
                src="https://youtube.com/embed/8NgVGnX4KOw"
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyrosope; picture-in-picture"
                allowFullScreen
                style={{marginLeft:15,marginTop:15,marginRight:15}}
                ></iframe>
              </div>
              <Button
        onClick={() => history.push("/")} 
        variant='outlined'
        style={{
        color:"white",
        alignContent:"center",
        borderColor:"#EEBC1D",
        marginLeft:500,
        marginTop:15,
        marginBottom:25
        }}
        >
        Back to Homepage
          
      </Button>

      </Typography>
  </Container>
  
  
  );
};


export default About;