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
    return null;
  }

  const regions = activeLayer.textField?.[0]?.array ?? [];

  return (
    <div className="model-section">
      <header className="model-section__header">
        <div>
          <p className="model-section__eyebrow">
            Current system
          </p>

          <h2>{activeLayer.buttonName}</h2>
        </div>

        <div className="model-section__tools">
          <button
            type="button"
            className="model-tool-button"
            aria-label="Zoom controls will be added later"
            disabled
          >
            −
          </button>

          <span className="model-section__zoom">100%</span>

          <button
            type="button"
            className="model-tool-button"
            aria-label="Zoom controls will be added later"
            disabled
          >
            +
          </button>
        </div>
      </header>

      <div className="model-viewer">
        <div className="model-viewer__canvas">
          <svg
            className="model-viewer__svg"
            viewBox="300 160 3625 2700"
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

        <div className="model-viewer__legend">
          <span className="model-viewer__legend-dot" />

          <span>Interactive region</span>
        </div>
      </div>
    </div>
  );
}

export default ModelViewer;