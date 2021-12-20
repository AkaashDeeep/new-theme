import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Cards = (props) =>{
  
  return(
    <>
      <div className="card_box">
        <div className="cardImage">
          <img src={props.images} alt="cardimages" />
        </div>
        <div className="cardTypography">
            <h4>{props.title}</h4>
            <br/>
            <p>{props.description}</p>
            <br/>
            <Tooltip title="Read More">
              <Button  variant="contained" color="secondary" style={props.themes} size="small" >Read More</Button>
            </Tooltip>
        </div>
      </div>
    </>
  );
}

export default Cards; 