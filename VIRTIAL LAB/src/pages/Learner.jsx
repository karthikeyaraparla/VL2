import React from 'react'
import "./Learner.css"

const e1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741014780/e1_wv7cvz.png';
const e2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741014762/e3_uansah.png';
const e3 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741014761/e2_xfgklp.png';
const e4 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741014761/e4_iyv2sb.png';
const e5 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741014761/e5_jngs6t.png';
const e6 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741014760/e6_vbs19w.png';
const e7 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741014760/e7_jk8l19.png';
const e8 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741014759/e8_eugsqk.png';


const Learner = () => {
  return (
    <div>
<div className="navsp">
<div className="navs">
        <button>Popular</button>
        <button>Recents</button>
        <button>All Experiments</button>
        <button>Starred</button>
      </div>
</div>

      <div className="expr">
          <div className="boxes">
            <img src={e1} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
          <div className="boxes">
            <img src={e2} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
          <div className="boxes">
            <img src={e3} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
      </div>
      <div className="expr1">
          <div className="boxes">
            <img src={e4} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
          <div className="boxes">
            <img src={e5} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
          <div className="boxes">
            <img src={e6} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
      </div>
      <div className="expr1">
          <div className="boxes">
            <img src={e7} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
          <div className="boxes">
            <img src={e8} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
          <div className="boxes">
            <img src={e1} alt="" />
            <h2>Bubble Sort</h2>
            <h3>Computer Science and</h3>
            <p>The aim of this experiment is to understand the basics of graphs and their representations and to understand</p>
            <button>Add to Favourites</button>
          </div>
      </div>
      
    </div>
  )
}

export default Learner
