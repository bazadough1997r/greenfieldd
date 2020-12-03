import { styled } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const MyButton = styled(Button)  ( {
    border: 0,
   borderRadius: 3,
    padding: '1px 30px',
   margin: " 20px 9px 20px 100px",
     fontStyle:"normal",
    fontWeight: '200px',
    fontSize: '18px',
    color  : '#0A194F'
  });
export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid  item xs={12}
      direction='column'
      alignContent='stretch'
      direction="row"
      alignItems='stretch'
      alignItems='stretch'
      justify='center'
      wrap='wrap'
      > <AppBar position="static"  color = "default">
         <Grid  item xs={12}
      direction='column'
      alignContent='stretch'
      direction="row"
      alignItems='stretch'
      alignItems='stretch'
      justify='center'
      wrap='wrap'
      ><Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src = "https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"  width="150" height="70"></img>
         <Link to ="/inventory"></Link>
          <Link to ="/"><MyButton color="inherit"><b>HOME</b></MyButton></Link><Link to ="/inventory"><MyButton color="inherit"><b>INVENTORY</b></MyButton></Link>
          <Link to ="/about"><MyButton color="inherit"><b>ABOUT US</b></MyButton></Link>
          <Link to ="/login"><MyButton color="inherit"><b>LOG IN</b></MyButton></Link>
          <IconButton><PersonIcon/></IconButton>
        </Toolbar></Grid>
      </AppBar></Grid>
    </div>
  );
}