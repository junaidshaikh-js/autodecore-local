import "./button.css";

export function BtnComplementary({ children, cnames }) {
  return (
    <button className={"btn btn-complementary " + cnames}>{children}</button>
  );
}
