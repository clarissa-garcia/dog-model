import React from "react";
import LayerButton from "./LayerButton";

function LayerSidebar({
  layers,
  activeLayerIndex,
  onSelectLayer,
}) {
  return (
    <div className="layer-sidebar">
      <header className="layer-sidebar__heading">
        <h2>Anatomy Layers</h2>
        <p>Select a layer to explore its highlighted regions.</p>
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
    </div>
  );
}

export default LayerSidebar;