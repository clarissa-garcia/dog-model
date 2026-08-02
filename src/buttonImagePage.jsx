import React, { useState } from "react";
import { ButtonImageContainer } from "./images/ButtonImageContainer";

import AnatomyLayout from "./components/layout/AnatomyLayout";
import LayerSidebar from "./components/layers/LayerSidebar";
import ModelViewer from "./components/model/ModelViewer";
import InformationPanel from "./components/information/InformationPanel";

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
  );
}

export default ButtonImagePage;