import React, { Component } from 'react';
import DisplayList from './DisplayList';
import 'fontsource-roboto';
import Box from '@material-ui/core/Box';
// import { Navbar, Nav, NavDropdown, MenuItem, Form, FormControl, Button} from 'react-bootstrap';

import { Button, Typography } from '@material-ui/core';
// import { RadioGroup, FormControl, FormLabel, Radio, FormControlLabel } from '@material-ui/core';

class FilteredList extends Component {
    constructor(props) {
            super(props);
            this.state = {
                flavor: "All",
                type: "All",
                sort: "",
                cart: [
                  {id: 1, quantity: 0},
                  {id: 2, quantity: 0},
                  {id: 3, quantity: 0},
                  {id: 4, quantity: 0},
                  {id: 5, quantity: 0},
                  {id: 6, quantity: 0},
                  {id: 7, quantity: 0},
                  {id: 8, quantity: 0},
                  {id: 9, quantity: 0},
                  {id: 10, quantity: 0},
                  {id: 11, quantity: 0},
                  {id: 12, quantity: 0},
                  {id: 13, quantity: 0},
                  {id: 14, quantity: 0},
                ],
            };

            this.originalProductList = this.props.list;
            this.originalState = this.state;
            this.cartTotal = 0;
      }
    
    

    onSelectFilterFlavor = (event) => {
      this.setState({flavor: event.target.value});
    }

    onSelectFilterType = (event) => {
      this.setState({type: event.target.value});
    }

    updateSorting =  (event) => {
      this.setState({sort: event.target.value});
    }

    reset = () => {
      this.setState(this.originalState);
    }

    addToCart = (product) => {
      let cart = [...this.state.cart];
      let cartItem = this.state.cart.find(item => item.id == product.id)
      cartItem.quantity += 1;
      var index = cart.indexOf(product);
      cart[index] = cartItem;
      this.setState({ cart });
      this.cartTotal += this.props.list.find(item => item.id == product.id).price;
    }

    removeFromCart = (product) => {
      // const cart = this.state.cart.filter(k => product != k.product);
      // this.setState({ cart });
      // this.cartTotal -= product.price;
      // var cart = this.state.cart;
      // cartItem = this.state.cart.filter(item => product.key == item.key)[0];
      // cart
      // var index = cart.indexOf(product);
      // delete cart[index];
      // this.setState({ cart });
      
      let cart = [...this.state.cart];
      let cartItem = this.state.cart.find(item => item.id == product.id)
      cartItem.quantity -= 1;
      var index = cart.indexOf(product);
      cart[index] = cartItem;
      this.setState({ cart });
      this.cartTotal -= this.props.list.find(item => item.id == product.id).price;
    }
    
    

    render() {
      let products = this.props.list;

      if(this.state.sort === "loToHi") {
        products.sort((x, y) => (x.price - y.price))
      } else if (this.state.sort === "hiToLo") {
        products.sort((x, y) => (y.price - x.price))
      } else {
        products.sort((x, y) => (x.id - y.id))
      }
      if (this.state.flavor != "All") {
        products = products.filter(product => product.flavor === this.state.flavor);
      }

      if (this.state.type != "All") {
        products = products.filter(product => product.type === this.state.type);
      }

      let cart = this.state.cart.filter(product => product.quantity > 0);

      
      
		return (
          <div>
            <div className="title">
        <img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/768/768213.svg"/> &nbsp;
        Jeff's Dessert Shop</div>
          
            <div className="site">
              
              <div className="sidebar-div">
              <div className="all-sidebar-content">
                {/* <img className="logo-sidebar" src="https://www.flaticon.com/svg/static/icons/svg/768/768213.svg"/> */}
                <div className="sidebar-section">
                    <Typography variant="h5">Flavor:</Typography>
                    <div className="options-box">
                      <label className="container"> <Typography>All
                      <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="All" defaultChecked/>
                      </Typography>
                        
                      </label>
                      <label className="container"> <Typography>Strawberry
                      <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="Strawberry"/>
                      </Typography>
                        
                      </label>
                      <label className="container"> <Typography>Vanilla
                      <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="Vanilla"/>
                        </Typography>
                        
                      </label>
                      <label className="container"><Typography>
                      Chocolate
                        <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="Chocolate"/>
                        </Typography>
                      </label>
                      <label className="container"> <Typography>
                      Other
                        <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="Other"/>
                        </Typography>
                      </label>
                      
                  </div>
                  </div>

                  <div className="sidebar-section">
                    <Typography variant="h5">Type:</Typography>
                    <div className="options-box">
                      <label className="container"><Typography>
                      All
                        <input name="type-button" type="radio" id="flavor" onClick={this.onSelectFilterType} value="All" defaultChecked/>
                        </Typography>
                      </label>
                      <label className="container"><Typography>
                      Cupcakes
                        <input name="type-button" type="radio" id="type" onClick={this.onSelectFilterType} value="Cupcake"/>
                        </Typography>
                      </label>
                      <label className="container"><Typography>
                      Cakes
                        <input name="type-button" type="radio" id="type" onClick={this.onSelectFilterType} value="Cake"/>
                        </Typography>
                      </label>
                      <label className="container"><Typography>
                      Cheesecakes
                        <input name="type-button" type="radio" id="type" onClick={this.onSelectFilterType} value="Cheesecake"/>
                        </Typography>
                      </label>
                  </div>
                  </div>
                  <div className="sidebar-section">
                  <Typography variant="h5">Sort by Price:</Typography>
                <div className="options-box">
                  <label className="container"> <Typography>
                  Default
                    <input name="sort-button" type="radio" id="price" onClick={this.updateSorting} value="" defaultChecked/>
                    </Typography>
                  </label>
                  <label className="container"> <Typography>
                  Lowest to Highest
                    <input name="sort-button" type="radio" id="price" onClick={this.updateSorting} value="loToHi"/>
                    </Typography>
                  </label>
                  <label className="container"> <Typography>
                  Highest to Lowest
                    <input name="sort-button" type="radio" id="price" onClick={this.updateSorting} value="hiToLo"/>
                    </Typography>
                  </label>
          </div>
                  </div>

                  <div className="sidebar-section">

                  <div className="small-heading-text">Cart (Total: ${this.cartTotal}):</div>
                  
                  {cart.map(product =>
                    <div className="cart">
                      <div className="cart-item">
                        <div className="cart-main">
                     <div className="cart-item-container">
                     <img className="mini-image" src={this.props.list.find(item => item.id == product.id).image}/>
                       </div>
                      <div className="cart-item-text">
                      <div className="cart-item-container">
                      <Typography><Box fontWeight="fontWeightBold">{this.props.list.find(item => item.id == product.id).name}</Box></Typography>
                    
                      <Typography>Quantity: {product.quantity}</Typography>
           
                      <Typography>Price: ${this.props.list.find(item => item.id == product.id).price}</Typography>
                
                      </div>
                      </div>
                     </div>
                      
                     <Button onClick={() => this.removeFromCart(product)} variant="contained">Remove 1 from Cart</Button>
                      </div>
                      
                      
                      
                     
                    </div>
                    
                  )}

                  </div>
                  
                

                  </div>
                  </div>
                  
                <div className="main-div">
                <DisplayList list={products} state={this.state} addToCart={this.addToCart}/>
                </div>
            </div>  
            </div>
		);
	}

}

export default FilteredList