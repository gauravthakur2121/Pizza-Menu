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
function Pizza(){
  return(
    <div>
      <img src="pizzas/spinaci.jpg" alt='spinaci.jpg'/>
      <h3>Pizza spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta chees</p>

    </div>
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
  return(
    <main className="menu">
    <h2>Our Menu</h2>
    <Pizza/>
    <Pizza/>
    <Pizza/>

  </main>
  
  );
}
function Footer(){
  const hour = new Date().getHours();
  const openhour = 10;
  const closehour = 22;

 
  return(
    <>
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
    
    </>



  );
}

export default App
