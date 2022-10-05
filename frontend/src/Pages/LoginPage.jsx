import React from 'react'
import TextField from '@mui/material/TextField';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./LoginPage.css"
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { fontSize } from '@mui/system';



const useStyles = makeStyles(theme => ({
  input: {
    '&::placeholder': {
      color: "white !important"
    },
   
  },
  Submitbtn:{
    padding:"16px !important",
    marginTop:"20px !important" 
  }
}))
export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className='Loginpages'>
      <div className='LoginPage'>
        <div className='Login_logo' >
          <p>Apni <span className='dukan_logo'>Dukaan</span></p>
          <p><ShoppingBagIcon className='Apni_dukan_icon' /></p>
        </div>
        <div className='user-input'>
          <form autoComplete='off'>
            <TextField
              placeholder="Enter your E-mail"
              type="email"

              fullWidth
              size="large"
              margin="normal"
              color="secondary"
              required
              InputProps={{
                classes: { input: classes.input }
              }}
            />
            <TextField
              placeholder="Enter your Password"
              id="outlined-size-small"
              fullWidth
              size="large"
              type={"password"}
              required
              margin="normal"
              InputProps={{
                classes: { input: classes.input }
              }}
              color="secondary"
            />
            <Button variant="outlined" color="secondary" className={classes.Submitbtn} fullWidth type='submit'>Submit</Button>
          </form>

        </div>
        <div>
          <div className='forgotPassword'>Fortgot Password</div>
        </div>
      </div>
    </div>
  )
}