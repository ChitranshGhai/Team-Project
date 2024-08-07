import React from 'react'
import candles from '../Images/image1.jpeg'
import candle1 from '../Images/candles.jpg'
import './story.css';
function OurStory() {
  return (
    <div className="our-story">
      <h1 className="title">Our Story</h1>
      <p className="subtitle">Crafting Serenity, One Candle at a Time: The Journey of Passion, Perseverance, and Sustainability</p>
      
      <div className="section-1">
        <div className="section-content-1">
          <h2 id='Heading'>Inspiration</h2>
          <p id='Para'>Sirimiri Candles, founded by Geetansha Ghai, is a vibrant startup dedicated to creating natural scented candles. Inspired by a passion for aromatherapy and a desire to promote wellness, Geetansha embarked on this entrepreneurial journey to craft candles that are not only aromatic but also beneficial for mental and physical health. Sirimiri Candles offers a diverse range of natural scents, each meticulously formulated to provide a unique sensory experience. From calming lavender and invigorating eucalyptus to exotic sandalwood and refreshing citrus, each candle is a testament to Geetansha's commitment to quality and her keen eye for detail.</p>
        </div>
        <div className="section-image-1">
          <img src={candles} alt="Inspiration" />
        </div>
      </div>

      <div className="section-2">
        <div className="section-image-2">
          <img src={candle1} alt="Perseverance" />
        </div>
        <div className="section-content-2">
          <h2 id='Heading'>Perseverance</h2>
          <p id='Para'>The path to establishing Sirimiri Candles was fraught with challenges. Geetansha faced numerous hurdles, from sourcing high-quality natural ingredients to mastering the delicate art of candle making. Financial constraints and market competition added to the difficulties, but her perseverance and unwavering dedication helped her overcome these obstacles. Geetansha also had to educate herself on the nuances of running a business, from marketing and branding to customer service and supply chain management. Despite the setbacks, her passion for creating eco-friendly and health-conscious products kept her motivated, eventually leading Sirimiri Candles to carve out a niche in the competitive market of natural scented candles.</p>
        </div>
      </div>
    </div>

  )
}
export default OurStory

