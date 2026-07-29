# Interactive Canine Anatomy Model

An interactive educational web application created for the Kerry Blue Terrier Foundation.

The application allows users to select different canine anatomy layers and display them individually or combine several layers on top of the dog model. This gives users a more flexible way to explore how different anatomical systems relate to one another.

## Live Demo

[View the live project](https://clarissa-garcia.github.io/dog-model/)

## Features

- Select and display individual anatomy layers
- Combine multiple anatomical systems on one model
- Interact with highlighted regions for more information
- Support for both mouse and touchscreen input
- Responsive browser-based interface
- Deployed with GitHub Pages

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- SVG
- Bootstrap
- React Bootstrap
- styled-components
- Sass
- GitHub Pages

## How It Works

The application uses a shared SVG coordinate system to keep each anatomical image aligned with the base dog model. When a user selects an anatomy layer, that image is displayed over the model.

Interactive SVG paths are used to define specific regions of the anatomy. Mouse and touch events allow users to select these regions and view additional information.

## My Role

I developed the application for the Kerry Blue Terrier Foundation and was responsible for:

- Building the interactive anatomy interface
- Implementing the anatomy layer selection and stacking behavior
- Adding mouse and touchscreen interactions
- Rebuilding legacy frontend functionality with React
- Translating stakeholder feedback into application updates
- Deploying the application through GitHub Pages

## Running the Project Locally

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/clarissa-garcia/dog-model.git
Open the project directory:
cd dog-model
Install the dependencies:
npm install
Start the development server:
npm start
Open the following address in your browser:
http://localhost:3000
Production Build

Create an optimized production build:

npm run build

Deploy the application to GitHub Pages:

npm run deploy
Technical Challenges
Aligning Anatomy Layers

Each anatomy image needs to remain aligned with the same base model. The application uses a shared SVG view box and coordinate system so selected layers can be placed directly over one another.

Supporting Touch Devices

Desktop users can interact with the model using a mouse, while mobile and tablet users need touch-based controls. The application includes separate touch handling so the interactive regions remain usable across different devices.

Managing Changing Requirements

The project was completed through a long-running, project-based collaboration where features and presentation requirements changed over time. This required keeping the interface flexible and updating existing behavior without rebuilding the application from scratch.

Project Status

The interactive model is currently available as a demonstration. Final publication and distribution of the complete educational material depend on approval of the associated book and illustration rights.

Future Improvements
Improve keyboard accessibility
Improve screen-reader support
Add clearer indicators for selected layers
Add a button to clear all anatomy layers
Improve the layout on smaller screens
Add zoom and pan controls
Expand automated test coverage
Add guided anatomy lessons
Add more detailed labels and descriptions
Acknowledgments

Created for the Kerry Blue Terrier Foundation.
