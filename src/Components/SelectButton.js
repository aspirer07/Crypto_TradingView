import { makeStyles } from '@material-ui/core';
import React from 'react'

const SelectButton = ({ children, selected,onClick  }) => {
    const useStyles = makeStyles({
        SelectButton:{
            border: "1px solid gold",
            borderRadius: 5,
            padding:10,
            paddingLeft:20,
            paddingRight:20,
            fontFamily: "Montserrat",
            cursor:"pointer",
            backgroundColor: selected ? "gold" : "",
            color: selected ? 700:500,
            "&:hover":{
                backgroundColor:"gold",
                color:"black",
            },
            width:"22%",
            margin: 5,
        },

    });
    const classes = useStyles();
  return (  
    <span onClick={onClick} className={classes.SelectButton}>
        {children}
        </span>
  );
};

export default SelectButton;