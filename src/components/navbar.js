import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Box, makeStyles, Grid, Container, Toolbar } from '@material-ui/core';
import {Typography,IconButton,Button} from '@material-ui/core'

const style=theme=>({
  root:{
    flexGrow:1
  },
    logo:{
     color:"#007F82",
     fontFamily:"harlow solid",
     fontSize:"15pt",
            
        
    },
    navLi:{
        color:"#007F82",
        fontFamily:"Segoe UI",
        font:"bold",
        margin:"15px",
        fontSize:"12pt"
    }
    
});
const st=style();
class navbar extends Component{
    
    render(){
        const navbarcl={border:"none",backgroundColor:"#EEE3E7" ,boxShadow:"none" ,width:"100%",overflowX:"hidden",margin:"0px"};
        return (<AppBar className={st.root} position="static" style={navbarcl}>
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            
          </IconButton>
          <Box flexGrow="1">
          <Typography variant="h6" style={st.logo} >
            Eeternal Elite
          </Typography>
          </Box>
          <Typography variant="h6" style={st.navLi} >
            Home 
          </Typography>
          
          <Typography variant="h6" style={st.navLi} >
            Gallery
          </Typography>
          <Typography variant="h6" style={st.navLi} >
            About US
          </Typography>
          <Typography variant="h6" style={st.navLi} >
            Reach 
          </Typography>
        </Toolbar>
      </AppBar>
        );  
    }
}
export default  navbar;