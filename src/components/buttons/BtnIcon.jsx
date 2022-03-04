import "./button.css";

export function BtnIcon({ Icon, cnames, onClick }) {
  return (
    <button type="button" className={cnames.join(" ")} onClick={onClick}>
      <Icon />
    </button>
  );
}
