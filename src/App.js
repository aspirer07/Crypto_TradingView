import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import Alert from "./Components/Alert"
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
   const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color:"white",
      minHeight:"100vh"
    },
   }))
  const classes = useStyles();
  return (
   <BrowserRouter>
    <div className={classes.App}>
    <Header/>
    <Route path="/" component={Homepage} exact/>
    <Route path="/coins/:id" component={CoinPage} /> 
    <Route path="/About" component={About}/>
    </div>
    <Alert/>
   </BrowserRouter>
   
  );
}

export default App;
