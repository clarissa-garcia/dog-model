import React from "react";

function AnatomyLayout({ sidebar, model, information }) {
  return (
    <main className="anatomy-page">
      <section className="anatomy-workspace">
        <aside className="anatomy-workspace__sidebar">
          {sidebar}
        </aside>

        <section className="anatomy-workspace__viewer">
          {model}
        </section>

        <aside className="anatomy-workspace__information">
          {information}
        </aside>
      </section>
    </main>
  );
}

export default AnatomyLayout;