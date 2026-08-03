import React from "react";
import LayerButton from "./LayerButton";

function LayerSidebar({
  layers,
  activeLayerIndex,
  onSelectLayer,
}) {
  return (
    <div className="layer-sidebar">
      <header className="panel-heading">
        <p className="panel-heading__eyebrow">
          Explore
        </p>

        <h2 className="panel-heading__title">
          Anatomy Layers
        </h2>

        <p className="panel-heading__description">
          Select a system to view its anatomy and explore
          highlighted regions.
        </p>
      </header>

      <div className="layer-sidebar__list">
        {layers.map((layer, index) => (
          <LayerButton
            key={`${layer.buttonName}-${index}`}
            layer={layer}
            index={index}
            isActive={index === activeLayerIndex}
            onSelect={onSelectLayer}
          />
        ))}
      </div>

      <div className="layer-sidebar__tip">
        <span aria-hidden="true">ⓘ</span>

        <p>
          Hover over a highlighted region to learn more about it.
        </p>
      </div>
    </div>
  );
}

export default LayerSidebar;