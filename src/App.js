import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProduct from './Components/AllProduct/AllProduct';
import Menu from './Components/Menu/Menu';
import { useEffect, useState } from 'react';

function App() {
 const [cartCount, setCartCount]=useState(0);

 const addCartCount=()=>{
  setCartCount(cartCount+1);
}

  return (
    <div className="App">
      <Menu cartCount={cartCount}></Menu>
      <AllProduct addCart={addCartCount}></AllProduct>
    </div>
  );
}

export default App;
