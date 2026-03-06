import type { JSX } from "react";

interface ButtonProp {
  label: string;
  variant: "primary" | "secondary" | "danger";
  onclick?: () => void;
  disabled?: boolean;
}

const ButtonProps = ({
  label,
  onclick,
  variant,
  disabled,
}: ButtonProp): JSX.Element => {
  const variantColor = {
    primary: "blue",
    secondary: "yellow",
    danger: "crimson",
  } as const;
  return (
    <div>
      <h2 style={{ color: variantColor[variant] }}>{variant.toUpperCase()}</h2>
      <button onClick={() => alert({ onclick })} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default ButtonProps;
