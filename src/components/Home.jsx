import React from 'react';
import product1 from '../components/images/product1.jpg';
import product2 from '../components/images/product2.jpg';
import product3 from '../components/images/product3.jpg';
import product4 from '../components/images/product4.jpg';
import Button from '@mui/material/Button';

const Home = (props) =>{
  return(
    <>
        <div className="container_full home_back">
          <div className="overlay" style={props.backColor}>
            <div className="container divide">
              <div className="banner_boxes">
              <h1>Hello I am Home Page</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quisquam corrupti, vel voluptates deleniti rerum assumenda nihil quo ullam nobis cum, ex excepturi dolorem quod sint.  </p>
              <Button variant="contained" color="secondary" size="large" style={props.themes}>Read More</Button>
              </div>
              <div className="banner_boxes square">
                <div className="boxes">
                  <img src={product1} alt="product-images" />
                </div>
                <div className="boxes">
                  <img src={product2} alt="product-images" />
                </div>
                <div className="boxes">
                  <img src={product3} alt="product-images" />
                </div>
                <div className="boxes">
                  <img src={product4} alt="product-images" />
                </div>
              </div>
            </div>
          </div> 
        </div> 
    </>
  );
}

export default Home;
