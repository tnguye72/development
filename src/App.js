import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList'

// This is the product list, which contains id, name, image, flavor, type, and price of each product.
const productList = [
  { 
    id: 1,
    name: "Strawberry Cupcake", 
    image: "https://preppykitchen.com/wp-content/uploads/2018/06/Strawberry-cupcakes-feature-n.jpg",
    flavor: "Strawberry",
    type: "Cupcake",
    price: 5,
  },
  { 
    id: 2,
    name: "Vanilla Cupcake", 
    image: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/homemade-very-vanilla-cupcakes-3.jpg",
    flavor: "Vanilla",
    type: "Cupcake",
    price: 5,
  },
  { 
    id: 3,
    name: "Chocolate Cupcake", 
    image: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg",
    flavor: "Chocolate",
    type: "Cupcake",
    price: 5,
  },
  { 
    id: 4,
    name: "Lemon Blueberry Cupcake", 
    image: "https://bakerbynature.com/wp-content/uploads/2016/05/untitled-18-of-55-5.jpg",
    flavor: "Other",
    type: "Cupcake",
    price: 7,
  },
  { 
    id: 5,
    name: "Strawberry Cake", 
    image: "https://biancazapatka.com/wp-content/uploads/2019/05/strawberry-cream-naked-cake-recipe-erdbeer-sahne-torte.jpg",
    flavor: "Strawberry",
    type: "Cake",
    price: 37,
  },
  { 
    id: 6,
    name: "Vanilla Cake", 
    image: "https://cakebycourtney.com/wp-content/uploads/2020/02/IMG_4418-709x1024.jpg",
    flavor: "Vanilla",
    type: "Cake",
    price: 35,
  },
  { 
    id: 7,
    name: "Chocolate Cake", 
    image: "https://thecrumbykitchen.com/wp-content/uploads/2019/03/Triple-Chocolate-Cake-1.jpg",
    flavor: "Chocolate",
    type: "Cake",
    price: 37,
  },
  { 
    id: 8,
    name: "Salted Caramel Chocolate Cake", 
    image: "https://www.piesandtacos.com/wp-content/uploads/2020/06/Chocolate-Caramel-Cake-19.jpg",
    flavor: "Other",
    type: "Cake",
    price: 45,
  },
  { 
    id: 9,
    name: "Chocolate Peanut Butter Cake", 
    image: "https://www.alsothecrumbsplease.com/wp-content/uploads/2019/03/Peanut-Butter-Chocolate-Cake-40.jpg",
    flavor: "Other",
    type: "Cake",
    price: 45,
  },
  { 
    id: 10,
    name: "Green Tea Cake Roll", 
    image: "https://i.pinimg.com/originals/a4/a8/40/a4a840ca5eaf25fbd0434314aae4fed0.jpg",
    flavor: "Other",
    type: "Cake",
    price: 41,
  },
  { 
    id: 11,
    name: "Strawberry Cheesecake", 
    image: "https://www.lifeloveandsugar.com/wp-content/uploads/2019/04/No-Bake-Strawberry-Cheesecake5.jpg",
    flavor: "Strawberry",
    type: "Cheesecake",
    price: 10,
  },
  { 
    id: 12,
    name: "Vanilla Cheesecake", 
    image: "https://www.melskitchencafe.com/wp-content/uploads/2014/01/vanilla-bean-cheesecake1.jpg",
    flavor: "Vanilla",
    type: "Cheesecake",
    price: 10,
  },
  { 
    id: 13,
    name: "Chocolate Cheesecake", 
    image: "https://bakerbynature.com/wp-content/uploads/2018/08/No-BakeEspressoChocolateCheesecake-1-of-1.jpg",
    flavor: "Chocolate",
    type: "Cheesecake",
    price: 10,
  },
  { 
    id: 14,
    name: "Key Lime Cheesecake", 
    image: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/03/key-lime-pie-cheesecake-2.jpg",
    flavor: "Other",
    type: "Cheesecake",
    price: 10,
  }
 ]

// This function returns a div containing the entire application.
function App() {
  return (
    <div className="App">
		  <FilteredList list={productList} />
	</div>

  );
}

export default App;
