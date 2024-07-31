import React from 'react'
import candles from '../Images/image1.jpeg'
import candle1 from '../Images/candles.jpg'
import './story.css';
function OurStory() {
  return (
    <div className='whole'>
    <div className="container">
    <div className="story">
        <h2>Our Story</h2>
        <p>Lorem , dolor sit amet consectetur adipisicing elit. Odit, ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, provident!</p>
    </div>
    <hr />
    <div className="first" >
    <img src={candles} alt="" data-aos="fade-left" />
    </div>
    <p className='para1'>Lorem ipsum dolor amet consectetur adipisicing elit. Perferendis quod distinctio sint fugit provident, obcaecati unde quo aut necessitatibus velit repellendus doloremque dolor dolores sit aperiam. Excepturi neque consequatur praesentium ipsa. Aspernatur dolores suscipit laborum nemo, doloribus non minus, fugiat, quidem delectus ut perspiciatis harum qui quo alias voluptate repellat!</p>
    <img src={candle1} alt="" className='second' data-aos="fade-right"/>
    <p className='para2'>Lorm ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod distinctio sint fugit provident, obcaecati unde quo aut necessitatibus velit repellendus doloremque dolor dolores sit aperiam. Excepturi neque consequatur praesentium ipsa. Aspernatur dolores suscipit laborum nemo, doloribus non minus, fugiat, quidem delectus ut perspiciatis harum qui quo alias voluptate repellat!</p>
    </div>
    </div>
  )
}
export default OurStory

