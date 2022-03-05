import "./button.css";

export function BtnIcon({ children, cnames, onClick }) {
  return (
    <button type="button" className={cnames.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}
