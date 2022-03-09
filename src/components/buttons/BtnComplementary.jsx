import "./button.css";

export function BtnComplementary({ children, onClick, cnames }) {
  return (
    <button className={"btn btn-complementary " + cnames} onClick={onClick}>
      {children}
    </button>
  );
}
