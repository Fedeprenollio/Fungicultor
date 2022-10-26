import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen";
import {URLConfig} from "@cloudinary/url-gen";
import {CloudConfig} from "@cloudinary/url-gen";

export const Images = () => {

  // Set the Cloud configuration and URL configuration
  let cloudConfig = new CloudConfig({cloudName: 'dewegl2jr'});
  let urlConfig = new URLConfig({secure: true});

  // Instantiate and configure a CloudinaryImage object.
  let myImage = new CloudinaryImage('Home/LaNiata', cloudConfig, urlConfig);

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/docs/shoes
//https://res.cloudinary.com/dewegl2jr/image/upload/v1657830048/LaNiata/owpksommqsqmu0zcjija.jpg
  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};