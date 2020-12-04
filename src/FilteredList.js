import React, { Component } from 'react';
import DisplayList from './DisplayList';
import 'fontsource-roboto';
import Box from '@material-ui/core/Box';
import { Button, Typography } from '@material-ui/core';

/**
 * This class takes care of most of the functionality of the application. It contains a state, which includes the filtering and sorting options, as well as the current cart and total.
 */
class FilteredList extends Component {

    /**
     * This is the constructor, which primarily contains the state. The state includes information about the flavor and type to be displayed, which is initially "All". It also includes sorting
     * information, which is initially blank, indicating no sort has been selected. The cart includes the id's of the producst and the quantities in the cart, which is used in the render function
     * to map items with a quantity higher than 0 to a cart display on the application. Another global variable is the cart total, which indicates the total price of the items currently in the cart.
     * @param  props 
     */
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
            this.cartTotal = 0;
      }
    
    
    /**
     * This method takes care of updating the state to the flavor selected, so that only items with the selected flavor will display. 
     * @param  event a click event which occurs when a user selects a radio button
     */
    onSelectFilterFlavor = (event) => {
      this.setState({flavor: event.target.value});
    }

    /**
     * This method takes care of updating the state to the type of product selected, so that only items with the selected type will display. 
     * @param  event  a click event which occurs when a user selects a radio button
     */
    onSelectFilterType = (event) => {
      this.setState({type: event.target.value});
    }

    /**
     * This method updates the state based on sorting values that are selected. For example, if a user selects "highest to lowest", the state will be updated 
     * and display items from highest price to lowers.
     * @param event a click event which occurs when a user selects a radio button
     */
    updateSorting =  (event) => {
      this.setState({sort: event.target.value});
    }

    /**
     * This method updates the state when adding an item to the cart. It takes in a product, and finds the particular product in the cart list and updates the quantity in  the cart.
     * Then, it updates the cart item and increments the cart total.
     * @param product the product that is to be added to the cart
     */
    addToCart = (product) => {
      let cart = [...this.state.cart];
      let cartItem = this.state.cart.find(item => item.id == product.id)
      cartItem.quantity += 1;
      var index = cart.indexOf(product);
      cart[index] = cartItem;
      this.setState({ cart });
      this.cartTotal += this.props.list.find(item => item.id == product.id).price;
    }

    /**
     * This method updates the state when removing a product from the cart. It takes in a product, and finds the particular product in the cart list and updates the quantity in  the cart.
     * Then, it updates the cart item and decrements the cart total.
     * @param product the product that is to be removed from the cart
     */
    removeFromCart = (product) => {
      let cart = [...this.state.cart];
      let cartItem = this.state.cart.find(item => item.id == product.id)
      cartItem.quantity -= 1;
      var index = cart.indexOf(product);
      cart[index] = cartItem;
      this.setState({ cart });
      this.cartTotal -= this.props.list.find(item => item.id == product.id).price;
    }
    
    /**
     * This is the render method, which updates whenever a change is made in the options of the application.
     */
    render() {
      let products = this.props.list;

      // checks the value of sorting and sorts the products based on the option selected
      if(this.state.sort === "loToHi") {
        products.sort((x, y) => (x.price - y.price))
      } else if (this.state.sort === "hiToLo") {
        products.sort((x, y) => (y.price - x.price))
      } else {
        products.sort((x, y) => (x.id - y.id))
      }

      // checks the flavor selected and filters the products accordingly
      if (this.state.flavor != "All") {
        products = products.filter(product => product.flavor === this.state.flavor);
      }

      // checks the type selected and filters the products accordingly
      if (this.state.type != "All") {
        products = products.filter(product => product.type === this.state.type);
      }

      // sets the cart to be only the items in the cart list that have positive quantities
      let cart = this.state.cart.filter(product => product.quantity > 0);

      
    // This is the return statement. It returns a div, containing everything in the site. 
		return (
      <div className="site">
        {/* This is the main banner of the site, containing the title. */}
        <div className="title">
        <img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/768/768213.svg"/> &nbsp;
        Jeff's Dessert Shop</div>
        {/* This is the main div, which contains the sidebar and main portion of the site, containing the products. */}
        <div className="sidebar-and-main"> 
         {/* This is the sidebar div, which contains the sidebar. */}
          <div className="sidebar-div">
            {/* This the div containing the Flavor section of the sidebar */}
            <div className="sidebar-section">
              <Typography variant="h5">Flavor:</Typography>
              {/* This is a div containing all the options for flavors. */}
              <div className="options-box">
                {/* This is a label containing the radio button corresponding to "All" flavors. */}
                <label className="container"> 
                  <Typography>All
                    {/* This button calls onSelectFilterFlavor and updates the state according to the flavor selected */}
                    <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="All" defaultChecked/>
                  </Typography>
                </label>
                {/* This is a label containing the radio button corresponding to "Strawberry" flavors. */}
                <label className="container"> 
                  <Typography>Strawberry
                    {/* This button calls onSelectFilterFlavor and updates the state according to the flavor selected */}
                    <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="Strawberry"/>
                  </Typography>
                </label>
                {/* This is a label containing the radio button corresponding to "Vanilla" flavors. */}
                <label className="container"> 
                  <Typography>Vanilla
                    {/* This button calls onSelectFilterFlavor and updates the state according to the flavor selected */}
                    <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="Vanilla"/>
                  </Typography>
                </label>
                {/* This is a label containing the radio button corresponding to "Chocolate" flavors. */}
                <label className="container">
                  <Typography>Chocolate
                    {/* This button calls onSelectFilterFlavor and updates the state according to the flavor selected */}
                    <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="Chocolate"/>
                  </Typography>
                </label>
                {/* This is a label containing the radio button corresponding to "Other" flavors. */}
                <label className="container"> 
                  <Typography>Other
                    {/* This button calls onSelectFilterFlavor and updates the state according to the flavor selected */}
                    <input name="flavor-button" type="radio" id="flavor" onClick={this.onSelectFilterFlavor} value="Other"/>
                  </Typography>
                </label>
              </div>
            </div>

            {/* This the div containing the Type section of the sidebar */}
            <div className="sidebar-section">
              <Typography variant="h5">Type:</Typography>
                {/* This is a div containing all the options for types. */}
                <div className="options-box">
                  {/* This is a label containing the radio button corresponding to "All" types. */}
                  <label className="container">
                    <Typography>All
                      {/* This button calls onSelectFilterType and updates the state according to the type selected */}
                      <input name="type-button" type="radio" id="flavor" onClick={this.onSelectFilterType} value="All" defaultChecked/>
                    </Typography>
                  </label>
                  {/* This is a label containing the radio button corresponding to "Cupcake" types. */}
                  <label className="container">
                    <Typography>Cupcakes
                      {/* This button calls onSelectFilterType and updates the state according to the type selected */}
                      <input name="type-button" type="radio" id="type" onClick={this.onSelectFilterType} value="Cupcake"/>
                    </Typography>
                  </label>
                  {/* This is a label containing the radio button corresponding to "Cake" types. */}
                  <label className="container">
                    <Typography>Cakes
                      {/* This button calls onSelectFilterType and updates the state according to the type selected */}
                      <input name="type-button" type="radio" id="type" onClick={this.onSelectFilterType} value="Cake"/>
                    </Typography>
                  </label>
                  {/* This is a label containing the radio button corresponding to "Cheesecake" types. */}
                  <label className="container">
                    <Typography>Cheesecakes
                      {/* This button calls onSelectFilterType and updates the state according to the type selected */}
                      <input name="type-button" type="radio" id="type" onClick={this.onSelectFilterType} value="Cheesecake"/>
                    </Typography>
                  </label>
                </div>
              </div>
              
              {/* This the div containing the Sorting section of the sidebar */}
              <div className="sidebar-section">
                <Typography variant="h5">Sort by Price:</Typography>
                {/* This is a div containing all the options for sorting. */}
                <div className="options-box">
                  {/* This is a label containing the radio button corresponding to default sorting. */}
                  <label className="container">
                    <Typography>Default
                      {/* This button calls updateSorting and updates the state according to the sorting selected */}
                      <input name="sort-button" type="radio" id="price" onClick={this.updateSorting} value="" defaultChecked/>
                    </Typography>
                  </label>
                  {/* This is a label containing the radio button corresponding to sorting from lowest to highest price. */}
                  <label className="container">
                    <Typography>Lowest to Highest
                      {/* This button calls updateSorting and updates the state according to the sorting selected */}
                      <input name="sort-button" type="radio" id="price" onClick={this.updateSorting} value="loToHi"/>
                    </Typography>
                  </label>
                  {/* This is a label containing the radio button corresponding to sorting from highest to lowest price. */}
                  <label className="container">
                    <Typography>Highest to Lowest
                      {/* This button calls updateSorting and updates the state according to the sorting selected */}
                      <input name="sort-button" type="radio" id="price" onClick={this.updateSorting} value="hiToLo"/>
                    </Typography>
                  </label>
                </div>
              </div>
              {/* This the div containing the Cart section of the sidebar */}
              <div className="sidebar-section">
                <Typography variant="h5">Cart (Total: ${this.cartTotal}):</Typography>
                {/* This portion maps each product in the cart to relevant information that should be displayed. */}
                {cart.map(product =>
                  // This is the div containing the entire cart.
                  <div className="cart">
                    {/* This is the div containing a single cart item */}
                    <div className="cart-item">
                      {/* This is the div containing all the content of each cart item, excluding the "remove" button. */}
                      <div className="cart-main">
                        {/* This displays the image of the item. */}
                        <img className="mini-image" src={this.props.list.find(item => item.id == product.id).image}/>
                        {/* This div contains the text that is relevant for display */}
                        <div className="cart-item-text">
                          <Typography><Box fontWeight="fontWeightBold">{this.props.list.find(item => item.id == product.id).name}</Box></Typography>
                          <Typography>Quantity: {product.quantity}</Typography>
                          <Typography>Price: ${this.props.list.find(item => item.id == product.id).price}</Typography>
                        </div>
                      </div>
                      {/* This is a button that removes an item from the cart by calling removeFromCart. */}
                      <Button onClick={() => this.removeFromCart(product)} variant="contained">Remove 1 from Cart</Button>
                    </div>
                  </div>
                )}
                {/* This is a div containing the Checkout button. */}
                <div className="options-box">
                  <Button variant="contained">Checkout</Button>
                </div>
              </div>
            </div>

          {/* This is the main div, which contains the display of the list of products, which is taken care of by DisplayList. */}
          <div className="main-div">
            <DisplayList list={products} state={this.state} addToCart={this.addToCart}/>
          </div>
        </div>
      </div>      
		);
	}

}

export default FilteredList