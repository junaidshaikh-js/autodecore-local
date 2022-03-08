import "./button.css";

export function BtnIcon({ children, cnames, onClick, disabled }) {
  return (
    <button
      type="button"
      className={cnames.join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
