import React from 'react';
import Cards from './Cards';
import Data from './Data';

const Service = (props) =>{
  return(
    <>
      <div className="container_full" style={props.backColor}>
        <div className="container">
          <h1>Hello I am Service Page</h1>
          <div className="row" >
          {Data.map((val)=>{
              return(
                <Cards 
                key={val.id}
                images={val.images}
                title={val.title}
                description={val.description}
                themes={props.themes}
                />
              );
          })};
          </div>
        </div>
      </div>   
    </>
  );
}

export default Service;
