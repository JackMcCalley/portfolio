import React from "react";
import "../themes/Header.css";
import "../themes/Navbar.css";
import "../themes/Projects.css";
import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Project(props) {
  let image = props.image;
  let title = props.title;
  let description = props.description;
  let link = props.link;
  let target = props.target || null;
  return (
    <Container className="projectsBody">
      <Box
        sx={{
          width: "60rem",
          height: "auto",
        }}
      >
        <Card sx={{ display: "flex", flexWrap: "wrap" }}>
          <CardMedia
            component="img"
            sx={{ width: "40rem", minHeight: "auto" }}
            image={image}
          />
          <Box
            sx={{
              display: "flex",
              width: "20rem",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                <a
                  className="colorhover"
                  href={link}
                  target={target}
                  rel="noreferrer"
                >
                  {title}
                </a>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <br />
                {description}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.link"
                component="div"
              >
                  More Details
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
