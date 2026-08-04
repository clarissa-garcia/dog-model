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
      <header className="panel-heading">
        <p className="panel-heading__eyebrow">
          Learn
        </p>

        <h2 className="panel-heading__title">
          Region Details
        </h2>

        <p className="panel-heading__description">
          Information about the selected anatomical region appears here.
        </p>
      </header>

      {displayedRegion ? (
        <article className="region-card">
          <div className="region-card__label">
            Highlighted region
          </div>

          <h3 className="region-card__title">
            {displayedRegion.bodyName || displayedRegion.id}
          </h3>

          {displayedRegion.id && (
            <p className="region-card__identifier">
              Region ID: {displayedRegion.id}
            </p>
          )}

          <div className="region-card__divider" />

          <p className="region-card__description">
            {displayedRegion.action}
          </p>

          {/* <button
            type="button"
            className="region-card__action"
          >
            View region details
          </button> */}
        </article>
      ) : (
        <div className="information-panel__empty">
          {/* <div
            className="information-panel__empty-icon"
            aria-hidden="true"
          >
            +
          </div> */}

          <h3>{activeLayer?.buttonName}</h3>

          <p>{fallbackText}</p>
        </div>
      )}

      <div className="information-panel__instructions">
        <h3>How to explore</h3>

        <ol>
          <li>Select an anatomy system.</li>
          <li>Find a highlighted region.</li>
          <li>Hover or click to view details.</li>
        </ol>
      </div>
    </section>
  );
}

export default InformationPanel;