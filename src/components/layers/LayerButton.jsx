import React from "react";

function LayerButton({ layer, index, isActive, onSelect }) {
  function handleClick() {
    onSelect(index);
  }

  return (
    <button
      type="button"
      className={`layer-button ${
        isActive ? "layer-button--active" : ""
      }`}
      aria-pressed={isActive}
      onClick={handleClick}
    >
      <span
        className="layer-button__icon"
        aria-hidden="true"
      >
        {index + 1}
      </span>

      <span className="layer-button__content">
        <span className="layer-button__name">
          {layer.buttonName}
        </span>

        <span className="layer-button__description">
          View anatomy layer
        </span>
      </span>

      <span
        className="layer-button__indicator"
        aria-hidden="true"
      >
        {isActive ? "✓" : "›"}
      </span>
    </button>
  );
}

export default LayerButton;