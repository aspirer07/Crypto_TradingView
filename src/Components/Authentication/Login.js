import { async } from '@firebase/util';
import { Box, Button, TextField } from '@material-ui/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { CryptoState } from '../../CryptoContext';
import { auth } from '../../firebase';



const Login = ( { handleClose }) => { 
  const [ email,setEmail] = useState("");
  const [ password, setPassword] = useState("");

  const { setAlert } = CryptoState();

  const handleSubmit = async() => {
    if (!email || !password) {
      setAlert({
        opne:true,
        message:"Please fill all the Fields",
        type:"error",
      });
      return;
    }
    try {
      
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open:true,
        message: `Login Successful. Welcome ${result.user.email}`,
        type: "success",
      });
      handleClose();

    } catch (error) {
      setAlert({
        open:true,
        message: error.message,
        type:"error",
    });
  };
  }
  return (
    <Box 
     p={3}
     style={{ display:"", flexdirection:"columns", gap:"20px" }}
    >
       <TextField
       margin="normal"
       variant="outlined"
       type="email"
       label="Enter Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       fullWidth
       />
       <TextField
       margin="normal"
       variant="outlined"
       type="password"
       label="Enter Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       fullWidth
       />
       <Button 
         variant="conatained"
         size="large"
         style={{ backgroundColor: "#EEBC1D" }}
         onClick={handleSubmit}
         fullWidth
         >
          Login
          
         </Button>
         
    </Box>

  );
};

export default Login;