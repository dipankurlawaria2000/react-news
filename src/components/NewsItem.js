import React from "react"
import  "./NewsItem.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const NewsItem = ({title , description , url , urlToImage}) => 

{
    return (
        <Card className="bg-dark text-white">
  <Card.Img src={urlToImage} alt="Card image" className="news-image"/>
  <Card.ImgOverlay>
    <Card.Title className="news-title">{title}</Card.Title>
    <Card.Text className="news-text">
      <a href={url}>{description}</a>
      <p>Click to know More !</p>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
    );
};

export default NewsItem;
