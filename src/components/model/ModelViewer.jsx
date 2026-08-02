import React from "react";
import startingpic from "../../images/startingpic.png";
import HotspotLayer from "./HotspotLayer";

function ModelViewer({
  activeLayer,
  activeRegion,
  onRegionEnter,
  onRegionLeave,
  onRegionSelect,
}) {
  if (!activeLayer) {
    return <p>No anatomy layer is available.</p>;
  }

  const regions = activeLayer.textField?.[0]?.array ?? [];

  return (
    <div className="model-viewer">
      <svg
        className="model-viewer__svg"
        viewBox="0 0 4204 3294"
        role="img"
        aria-label={`Interactive canine anatomy model showing ${activeLayer.buttonName}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <image
          className="model-viewer__base"
          href={startingpic}
          width="4204"
          height="3294"
          preserveAspectRatio="none"
        />

        <image
          className="model-viewer__layer"
          href={activeLayer.imageName}
          width="4204"
          height="3294"
          preserveAspectRatio="none"
        />

        <HotspotLayer
          regions={regions}
          activeRegionId={activeRegion?.id}
          onRegionEnter={onRegionEnter}
          onRegionLeave={onRegionLeave}
          onRegionSelect={onRegionSelect}
        />
      </svg>
    </div>
  );
}

export default ModelViewer;