import React from "react";
import imageToRender from "../assets/images/home/24.png";
import { Grid } from "@material-ui/core";
export default function image(){
    const a=imageToRender;
    function importAll(r) {
        return r.keys().map(r);
      }
      
      const images = importAll(require.context('../assets/images/home', false, /\.(png)$/));
      let imgsrc=images.map(key=>{ 
   return <img src={key} style={{height:'auto',width:'33.3%'}} />
      });
    return(
        <React.Fragment>
            <Grid container justify="center">
             
            {imgsrc}
       </Grid>
       </React.Fragment>
    );
}