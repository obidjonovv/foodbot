
import { useState } from 'react';
import './App.css';
import Card from './components/card/Card'
import Cart from './components/Cart/Cart';
const { getData } = require("./db/db")

const foods = getData()


function App() {

   const [cartItems, setCartItems] = useState([])

   const onAdd = (food)=>{
     const exist = cartItems.find(x=>x.id === food.id)
     if (exist) {
      setCartItems(cartItems.map((x) => 
         x.id === food.id ? {...exist, quantify: exist.quantify + 1} : x
        )
      );
     } else{
      setCartItems([...cartItems, {...food, quantify:1 }]);
     }
   };

   const onRemove = (food)=>{
    const exist = cartItems.find((x) => x.id === food.id);
    if(exist.quantify === 1){
      setCartItems(cartItems.filter(x=>x.id !== food.id))
    }else{
      setCartItems(cartItems.map(x=>
        x.id === food.id ? {...exist,quantify: exist.quantify -1} : x
        )
      );
    }
   }

  return (
    <>
    <h1 className='heading'>Order Food</h1>
    <Cart cartItems={cartItems} />
     <div className='cards__container'>
    {foods.map(food=>{
      return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>
    })}
    </div>
    </>
  );
}

export default App;
