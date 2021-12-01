
import React, { Component } from "react";
import rp from "request-promise";
import cheerio from "cheerio";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const About = () => {
  return (
    <div>
      <Card className="card-section" style={{ width: '40rem' }}>
        <Card.Img className="news-image" variant="top" src="https://tms-outsource.com/blog/wp-content/uploads/2019/05/secure-fintech-app-write-secure-code.jpg" style={{ width: '100%' }} />
        <Card.Body>
          <Card.Title className="card-title">Dipankur Lawaria</Card.Title>
          <Card.Text className="card-text">
            Web Developer, Programmer and Technical Content Writer
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default About
