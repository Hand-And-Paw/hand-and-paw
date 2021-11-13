export const findYourPerfectCompanionComponent = () => {
  const section = document.createElement("section");
  section.className = "page-intro";
  section.innerHTML = `    <div class="container">
    <article>
      <h2 class="section-header">Find your perfect companion</h2>
      <p>
        Each animal has their own personality. It may take some time to
        find a perfect match, but it totally worth. Don't rush to make a
        choice. <br />
        Click on the animal if you would like to read more about it.
      </p>
    </article>
  </div>`;

  return section;
};
