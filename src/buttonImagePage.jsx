import React, { useState } from "react";
import { ButtonImageContainer } from "./images/ButtonImageContainer";

import AnatomyLayout from "./components/layout/AnatomyLayout";
import Header from "./components/layout/Header";
import InformationPanel from "./components/information/InformationPanel";
import LayerSidebar from "./components/layers/LayerSidebar";
import ModelViewer from "./components/model/ModelViewer";
import "./App.css";

function ButtonImagePage() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const activeLayer = ButtonImageContainer[activeLayerIndex];
  const displayedRegion = hoveredRegion ?? selectedRegion;

  function handleSelectLayer(index) {
    setActiveLayerIndex(index);
    setHoveredRegion(null);
    setSelectedRegion(null);
  }

  function handleRegionEnter(region) {
    setHoveredRegion(region);
  }

  function handleRegionLeave() {
    setHoveredRegion(null);
  }

  function handleRegionSelect(region) {
    setSelectedRegion(region);
  }

  return (
    <div className="button-image-page">
      <Header />

      <AnatomyLayout
        sidebar={
          <LayerSidebar
            layers={ButtonImageContainer}
            activeLayerIndex={activeLayerIndex}
            onSelectLayer={handleSelectLayer}
          />
        }
        model={
          <ModelViewer
            activeLayer={activeLayer}
            activeRegion={displayedRegion}
            onRegionEnter={handleRegionEnter}
            onRegionLeave={handleRegionLeave}
            onRegionSelect={handleRegionSelect}
          />
        }
        information={
          <InformationPanel
            activeLayer={activeLayer}
            displayedRegion={displayedRegion}
          />
        }
      />
    </div>
  );
}

export default ButtonImagePage;