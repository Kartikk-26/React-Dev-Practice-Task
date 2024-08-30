import React from 'react';
import MyData from './Day2/MyData'

function App() {
  const Array = [
    {
      productName : "Iphone 16",
      price : "$900",
      description : "This has the best Security"
    },

    {
      productName : "Samsung S13",
      price : "$800",
      description : "This has the best Camera"
    },

    {
      productName : "OnePlus",
      price : "$85",
      description : "This has the best UI/UX"
    }
  ]
  
  
  
  return (
    <div>
      <h1>Product List :</h1>
      {
        Array.map((value,index)=>(
          <MyData 
          key = {index}
          pname = {value.productName}
          price = {value.price}
          pdescription = {value.description}
          />
        ))
      }
    </div>
    
  )
}

export default App