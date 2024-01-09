import React from 'react';
import "./index.css";



  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  /*<Pizza
  name=" pizza spainaci"
  ingredients="Tomato, mozarella, spinach, and ricotta chees"
  photoName="pizzas/spinaci.jpg"
  price="10"
  
  
  />

  <Pizza
  name="pizza funghi"
  ingredients="Tomato , Mashroom"
  price='10'
  photoName="pizzas/funghi.jpg"
  />
  */
  

  
  const App = () => {
  return (
    <>
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
      </div>
      
    </>
  );
}


function Header(){
  const style = {}
  return (
    <div className='header footer'>
  <h1 style={{style}}>Fast React Pizza Com.</h1>
  </div>
  );


}
function Menu(){
 const pizzas = pizzaData;
  return(
    <main className="menu">
    <h2>Our Menu</h2>
    <p>
      Authentic italian cuisine. 6 creative Dishes to choose from. All from
       our stone oven all organic, all Delicious
    </p>
    <ul className='pizzas'>
      {pizzas.map((pizza)=>(
        <Pizza pizzaobj = {pizza} key ={pizza.name}

      />
      ))}
        
    </ul>
    
   
    

  </main>
  
  );
}

function Pizza({pizzaobj}){

  if(pizzaobj.soldOut) return null;

  return(
    <li className='pizza'>
      <img src={pizzaobj.photoName} alt='spinaci.jpg'/>
      <div>
      <h3>{pizzaobj.name}</h3>
      <p>{pizzaobj.ingredients}</p>
      <span>{pizzaobj.price }</span>

    </div>
    </li>
  );

}

function Footer(){
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isopen = hour>=openhour && hour<=closehour
  console.log(isopen)

 
  return(  
    <footer className='footer'>
      {isopen ? (
        <Order closehour={closehour} openhour={openhour}/>
      ):(
        <p>We are happy to welcome you between {openhour}.00 and {closehour}.00
        </p>
      )}
    </footer>
      
    );
      }

  function Order({openhour , closehour}){
    return (
    <div className='order'>
        <p>
          We are open from {openhour}.00 to {closehour}.00 . Come visit Gaurav Restaurant
          or order online
        </p>
        <button className='btn'>Order</button>
      </div>
    );
  }




export default App
