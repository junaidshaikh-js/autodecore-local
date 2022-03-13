import { Link } from "react-router-dom";
import { useStateContext } from "../../context";

export function Category({ name, sources }) {
  const { dispatch } = useStateContext();
  return (
    <div className="bg-white my-1">
      <section className="category-section  txt-center p-sm pb-1 ">
        <header className="py-1">
          <h2 className="h3">{name}</h2>
        </header>

        <div className="category-container gap-1 m-sm">
          {sources.map(({ name, image }) => {
            return (
              <Link to="/products">
                <figure
                  key={name}
                  onClick={() => {
                    dispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: {
                        isChecked: true,
                        value: name.toLowerCase(),
                      },
                    });
                  }}
                >
                  <img src={image} alt="" />
                </figure>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
