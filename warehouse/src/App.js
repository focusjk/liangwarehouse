import React, { Component } from 'react';
import Cart from './container/Cart';
import Footer from './container/Footer';
import Home from './container/Home';
import List1 from './container/List1';

class App extends Component {
  render() {
    return (
      <div>
		
		<Home />

		<div className="whole">
			<List1 />
			<List1 />
		</div>

		<Cart />
       	
		<Footer />
		
      </div>
    );
  }
}

export default App;


