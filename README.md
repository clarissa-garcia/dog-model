# Interactive Canine Anatomy Model

An interactive educational web application developed for the Kerry Blue Terrier Foundation.

The application allows users to select individual canine anatomy layers or combine multiple layers on top of a dog model. This provides a flexible way to explore how different anatomical systems relate to one another.

## Live Demo

[View the live project](https://clarissa-garcia.github.io/dog-model/)

## Features

- Select and display individual anatomy layers
- Combine multiple anatomical systems on one model
- Interact with highlighted anatomical regions
- Support mouse and touchscreen input
- Use the application directly in a web browser
- Deploy the application through GitHub Pages

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

The application uses a shared SVG coordinate system to keep each anatomy layer aligned with the base dog model. When a user selects a layer, the corresponding image is displayed over the model in the correct position.

Interactive SVG paths define selectable anatomical regions. Mouse and touch events allow users to interact with those regions across desktop, tablet, and mobile devices.

## My Role

I developed the application for the Kerry Blue Terrier Foundation and was responsible for:

- Building the interactive anatomy interface
- Implementing anatomy-layer selection and stacking
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
```

2. Open the project directory:

```bash
cd dog-model
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open the following address in your browser:

```text
http://localhost:3000
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

## Deployment

Deploy the application to GitHub Pages:

```bash
npm run deploy
```

## Technical Challenges

### Aligning Anatomy Layers

Each anatomy layer must remain precisely aligned with the same base model. The application uses a shared SVG `viewBox` and consistent positioning so that users can stack multiple layers without the images shifting out of place.

### Supporting Multiple Input Methods

Desktop users interact with the model using a mouse, while mobile and tablet users rely on touch controls. The application handles both mouse and touch events so that the interactive regions work across different device types.

### Managing Changing Requirements

The application was developed through a long-running, project-based collaboration. Features and presentation requirements evolved as the foundation reviewed the model, requiring the interface to be updated while preserving existing functionality.

## Project Status

The interactive model is available as a working demonstration. Decisions regarding its final publication and distribution are managed by the Kerry Blue Terrier Foundation.

## Future Improvements

- Improve keyboard accessibility
- Improve screen-reader support
- Add clearer indicators for selected layers
- Add a button to clear all selected anatomy layers
- Improve the layout on smaller screens
- Add zoom and pan controls
- Expand automated test coverage
- Add guided anatomy lessons
- Add more detailed labels and descriptions

## Acknowledgments

Created for the Kerry Blue Terrier Foundation.
