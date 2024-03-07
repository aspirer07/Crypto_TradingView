import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@material-ui/core";
import React from "react"
import Banner from "../Components/Banner/Banner"
import CoinsTable from "../Components/CoinsTable";
import Contact from "../Components/Contact";



const Homepage = () => {
  return (
    <>
    <Banner/>
    <CoinsTable/>
    <Contact/>
    </>
  );
};
export default Homepage;
