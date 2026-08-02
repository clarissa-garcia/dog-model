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
      {layer.buttonName}
    </button>
  );
}

export default LayerButton;