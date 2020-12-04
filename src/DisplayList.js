import React, { Component } from 'react';
import './DisplayList.css';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import {typograpy } from '@material-ui/system';
import Box from '@material-ui/core/Box';

/**
 * This class takes care of displaying the list of products in a grid form in the main portion of the website.
 */
class DisplayList extends Component {
    constructor(props) {
            super(props);
        
      }
    
    /**
     * The render function maps each product to its item card, which includes product name, flavor, type, price, and an image of the product.
     * Each item card also includes a Button that allows users to add the item to their cart. 
     */
    render() {
		return (
      <div>
        <div className="products">
          {this.props.list.map(product => 
            <div className="product-div" key={product.id}>
              <img className="preview-image" src={product.image} alt={product.name}/>
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
		);
	}

}

export default DisplayList