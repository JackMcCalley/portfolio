import React from "react";
import examplephoto128 from "../images/examplephoto128.png";
import p3dexamplephoto1 from '../images/p3dexamplephoto1.png'
import Project from './Project'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Projects() {
  var description128 = "128 Productions is an events coordination company located in Denver, CO. Written in React.js. Incorporated Contentful CMS for event management and photo galleries. Displays a developed and advanced understanding of React Hooks and headless content management systems."
  var descriptionp3d = "Precision Digital Dental Designs was a Dental startup company that specialized in Surgical Guides and 3D Modeling. Developed in ReactJS on Rails with AWS and Shopify integration. Uses a RESTful Rails API for user data and file management, Shopify for payment, and AWS for file storage."
  return (
    <ThemeProvider theme={darkTheme}>
      <Project image={examplephoto128} title='128 Productions' description={description128} link="https:www.128productions.com" target="_blank" />
      <Project image={p3dexamplephoto1} title='P3D Guides' description={descriptionp3d} link="https://p3d-frontend.herokuapp.com/" target="_blank"/>
    </ThemeProvider>
  );
}
