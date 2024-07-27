import React from 'react'
import candles from './candles.jpg'
import candle1 from './image1.jpeg'
import './story.css';
function OurStory() {
  return (
    <>
    {/* <div id="main_head" className='azh-content-wrapper az-enable-transition'>
        <img src={candles} alt="" />
    </div> */}
    <div className="container">
    <div className="story">
        <h1>Our Story</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, provident!</p>
    </div>
    <hr />
    <div className="first" >
    <img src={candles} alt="" data-aos="fade-left" />
    </div>
    <p className='para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod distinctio sint fugit provident, obcaecati unde quo aut necessitatibus velit repellendus doloremque dolor dolores sit aperiam. Excepturi neque consequatur praesentium ipsa. Aspernatur dolores suscipit laborum nemo, doloribus non minus, fugiat, quidem delectus ut perspiciatis harum qui quo alias voluptate repellat!</p>
    <img src={candle1} alt="" className='second' data-aos="fade-right"/>
    <p className='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod distinctio sint fugit provident, obcaecati unde quo aut necessitatibus velit repellendus doloremque dolor dolores sit aperiam. Excepturi neque consequatur praesentium ipsa. Aspernatur dolores suscipit laborum nemo, doloribus non minus, fugiat, quidem delectus ut perspiciatis harum qui quo alias voluptate repellat!</p>
    </div>
    </>
  )
}
export default OurStory
