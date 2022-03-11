export function Category({ name, sources }) {
  return (
    <div className="bg-white my-1">
      <section className="category-section  txt-center p-sm pb-1 ">
        <header className="py-1">
          <h2 className="h3">{name}</h2>
        </header>
        <div className="category-container gap-1 m-sm">
          {sources.map(({ name, image }) => {
            return (
              <figure key={name}>
                <img src={image} alt="" />
              </figure>
            );
          })}
        </div>
      </section>
    </div>
  );
}
