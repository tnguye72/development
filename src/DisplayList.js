import React, { Component } from 'react';
import './DisplayList.css';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import {typograpy } from '@material-ui/system';
import Box from '@material-ui/core/Box';

class DisplayList extends Component {
    constructor(props) {
            super(props);
        
      }

    render() {
		return (
      <div>
        
        
        <div className="products">
              
              {this.props.list.map(product => 
                  <div className="product-div" key={product.id}>
                    <img className="preview-image" src={product.image}/>
                    <Typography variant='h6' > <Box fontWeight="fontWeightBold">{product.name}</Box></Typography>
                    <Typography> Main Flavor: &nbsp;   {product.flavor}</Typography>
                    <Typography> Type:  &nbsp;  {product.type}</Typography>
                    <Typography> Price:  &nbsp;  ${product.price}</Typography>

                    <div className="button">
                    <Button onClick={() => this.props.addToCart(product)} variant="contained">Add 1 to Cart</Button>
                    </div>
                    
                  </div>
              )}
          </div>
      </div>
            
           // <img src="https://www.melskitchencafe.com/wp-content/uploads/2014/01/vanilla-bean-cheesecake1.jpg"/>

		);
	}

}

export default DisplayList