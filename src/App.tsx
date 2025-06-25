import React from 'react';
import Card from './components/Card'; 


const cardInfo = {
  coverImageLink: '/blog-card/living-room.jpg', 
  category: 'Interior', 
  title: 'Top 5 Living Room Inspirations', 
  description: 'Curated vibrants colors for your living, make it pop & calm in the same time.', 
  CTALink: ''
}

export default function App() {
  return (
    <div className="wrapper">
      <Card info={cardInfo}/>
    </div>
  )
}