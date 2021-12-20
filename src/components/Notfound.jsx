import React from 'react';

const Notfound = (props) =>{
  return(
    <>  
      <div className="container_full" style={props.backColor}>
        <div className="container" style={props.backColor}>
            <h1>Page Not Found</h1>
        </div>
      </div> 
    </>
  );
}

export default Notfound;
