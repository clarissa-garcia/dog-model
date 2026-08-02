import React from "react";

function AnatomyLayout({ sidebar, model, information }) {
  return (
    <main className="anatomy-layout">
      <aside className="anatomy-layout__sidebar">
        {sidebar}
      </aside>

      <section className="anatomy-layout__model">
        {model}
      </section>

      <aside className="anatomy-layout__information">
        {information}
      </aside>
    </main>
  );
}

export default AnatomyLayout;