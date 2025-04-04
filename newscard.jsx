import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './newscard.css';
import logo from '../media/flag.jpg';

const HorizontalScrollCards = () => {
  // Sample card data
  const cards = [
    {
      title: "Card 1",
      text: "This is the first card content.",
      img: logo
    },
    {
      title: "Card 2",
      text: "This is the second card with more content.",
      img: logo
    },
    {
      title: "Card 3",
      text: "Third card with different information.",
      img: logo
    },
    {
      title: "Card 4",
      text: "Fourth card in the horizontal scroll group.",
      img: logo
    },
    {
        title: "Card 1",
        text: "This is the first card content.",
        img: logo
      },
      {
        title: "Card 2",
        text: "This is the second card with more content.",
        img: logo
      },
      {
        title: "Card 3",
        text: "Third card with different information.",
        img: logo
      },
      {
        title: "Card 4",
        text: "Fourth card in the horizontal scroll group.",
        img: logo
      }
  ];

  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4 text-dark-blue">News Flash</h2>
      
      <div className="position-relative">
        {/* Horizontal scrolling container */}
        <div className="d-flex flex-nowrap overflow-auto pb-3 scroll-container">
          
          {/* Cards with consistent width and spacing */}
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 me-3" style={{ width: '18rem' }}>
              <Card className="h-100 horizontal-card">
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title className="text-dark-blue">{card.title}</Card.Title>
                  <Card.Text className="text-secondary">
                    {card.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
          
          {/* See More Button - now a standalone button */}
          <div className="flex-shrink-0 d-flex align-items-center" style={{ width: 'auto', padding: '0 1.5rem' }}>
            <Button 
              variant="outline-dark-blue" 
              className="see-more-button d-flex flex-column align-items-center justify-content-center"
              style={{ height: '20%', minWidth: '150px' }}
            >
              <div className="mb-2">
                <i className="bi bi-chevron-right text-dark-blue" style={{ fontSize: '1.5rem' }}></i>
              </div>
              <span className="text-dark-blue fw-bold">See More</span>
              <small className="text-muted">Past News</small>
            </Button>
          </div>
          
        </div>
        
        {/* Gradient fade effect at the end */}
        <div className="position-absolute top-0 end-0 h-100 gradient-fade"></div>
      </div>
    </div>
  );
};

export default HorizontalScrollCards;