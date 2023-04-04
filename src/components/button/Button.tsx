import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "googleSignIn",
  inverted: "inverted",
  default: "",
};
interface ButtonProps {
  children: any;
  buttonType: "google" | "inverted" | "default";
  onClick?: any;
  type?: "submit" | "button" | undefined;
}

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={`buttonContainer ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
