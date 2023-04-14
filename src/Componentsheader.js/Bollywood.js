import React from 'react'
import Header from '../Header'
import '../App.css'
import { ContextData } from './ContextApi';
import { useContext } from 'react';
const Bollywood = () => {
  const [data] = useContext(ContextData);
  return (
    <div >
    <Header />
    
          Its All About !!!!
          <h2 className="home-latest-fitness-stories-title">
            Bollywood
          </h2>
          <hr className="underline" />
          <div className="article-wrapper">
            {data.filter((value) => value.category === "bollywood").map((val) => (
                <div key={val.id} className="sports">
               
                    
                    <img src={val.image} alt="" className="sports-img" />
                  
    
                    <p className="texts">{val.content}</p> <br/>
                  <p className="texts">{val.desc}</p>
                  
                </div>
              ))}
          </div>
        </div>
  )
}

export default Bollywood
