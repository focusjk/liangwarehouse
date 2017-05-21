import React, { Component } from 'react';
import Cart from './container/Cart';
import Footer from './container/Footer';
import Home from './container/Home';

class App extends Component {
  render() {
    return (
      <div>
		<Home />
		

		<Cart />
       	
		<Footer />
      </div>
    );
  }
}

export default App;

