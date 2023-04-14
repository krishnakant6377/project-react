import React from 'react'
import Header from '../Header'
import '../App.css'
import { ContextData } from './ContextApi';
import { useContext } from 'react';
const Food = () => {
  const [data] = useContext(ContextData);
  return (
    <div >
    <Header />
    
          Its All About !!!!
          <h2 className="home-latest-fitness-stories-title">
           Food
          </h2>
          <hr className="underline" />
          <div className="article-wrapper">
            {data.filter((value) => value.category === "food").map((val) => (
                <div key={val.id} className="sports">
               
                    
                    <img src={val.image} alt="" className="sports-img" />
                  
    
                 
                  <p className="texts">{val.name}</p>
                  <p className="texts">{val.details}</p>
                  <p className="texts">{val.content}</p>
                  
                </div>
              ))}
          </div>
        </div>
  )
  
}

export default Food
