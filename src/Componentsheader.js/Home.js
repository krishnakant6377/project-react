import React from 'react'
import '../App.css'
import Header from '../Header'
import { ContextData } from './ContextApi';
import { useContext } from 'react';
import './asdf.css'


const Home = () => {
  const [data] = useContext(ContextData);
  console.log(data)
  return (
    <div >
<Header />

      Its All About !!!!
      <h2 className="home-latest-fitness-stories-title">
        Mountains
      </h2>
      <hr className="underline" />
      <div className="article-wrapper">
        {data.filter((value) => value.category === "mountain").map((val) => (
            <div key={val.id} className="sports">
           
                
                <img src={val.image} alt="" className="sports-img" />
              

             
              <p className="texts">{val.name}</p>
              <p className="texts">{val.height}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
