import React from "react";

function HotspotLayer({
  regions,
  activeRegionId,
  onRegionEnter,
  onRegionLeave,
  onRegionSelect,
}) {
  return (
    <g className="hotspot-layer">
      {regions.map((region) => {
        const isActive = activeRegionId === region.id;

        return (
          <path
            key={region.id}
            id={region.id}
            d={region.path}
            className={`hotspot ${
              isActive ? "hotspot--active" : ""
            }`}
            onMouseEnter={() => onRegionEnter(region)}
            onMouseLeave={onRegionLeave}
            onClick={() => onRegionSelect(region)}
          >
            <title>{region.bodyName ?? region.id}</title>
          </path>
        );
      })}
    </g>
  );
}

export default HotspotLayer;