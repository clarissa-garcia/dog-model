import React from "react";

function InformationPanel({ activeLayer, displayedRegion }) {
  const fallbackText =
    activeLayer?.textField?.[0]?.fallbackText ??
    "Select or hover over a highlighted region to learn more.";

  return (
    <section
      className="information-panel"
      aria-live="polite"
      aria-atomic="true"
    >
      {displayedRegion ? (
        <>
          <p className="information-panel__eyebrow">
            Highlighted region
          </p>

          <h2>{displayedRegion.bodyName}</h2>

          <p className="information-panel__id">
            Region {displayedRegion.id}
          </p>

          <p>{displayedRegion.action}</p>
        </>
      ) : (
        <>
          <p className="information-panel__eyebrow">
            Current layer
          </p>

          <h2>{activeLayer?.buttonName ?? "Canine Anatomy"}</h2>

          <p>{fallbackText}</p>
        </>
      )}
    </section>
  );
}

export default InformationPanel;