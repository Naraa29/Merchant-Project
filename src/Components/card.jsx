import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  // Array of objects containing image URLs and text content for each card
  const cardsData = [
    {
      image: "/assets/images/image1.png",
      title: "Another Title",
      text: "Some other text content",
    },
    {
      image: "/assets/images/image1.png",
      title: "Another Title",
      text: "Some other text content",
    },
    {
      image: "/assets/images/image1.png",
      title: "Another Title",
      text: "Some other text content",
    },
    {
      image: "/assets/images/image1.png",
      title: "Another Title",
      text: "Some other text content",
    },
    {
      image: "/assets/images/image1.png",
      title: "Another Title",
      text: "Some other text content",
    },
    {
      image: "/assets/images/image1.png",
      title: "Another Title",
      text: "Some other text content",
    },
  ];

  return (
    <div className="container">
      <h2
        style={{
          textAlign: "center",
          margin: "40px 200px",
          fontSize: "1.2em",
          fontWeight: "normal",
          textAlign: "center",
          lineHeight: "1.6",
          color: "rgb(0, 48, 126)",
        }}
      >
        Үндсэн хүсэлтүүд
      </h2>
      <div
        className="cards-container"
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start", // Align items to the start of the cross axis (vertically)
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center", // Center text within the container
        }}
      >
        {cardsData.map((card, index) => (
          <Card key={index} sx={{ width: 345, margin: "10px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt="Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
