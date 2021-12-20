import React from 'react';
import QuiltedImageList from './Imagelist';

const Portfolio = (props) =>{
  return(
    <>
      <div className="container_full" style={props.backColor}>
        <div className="container">
            <h1>Hello I am Portfolio Page</h1>
            <div className="main_row">
                <QuiltedImageList />
            </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
