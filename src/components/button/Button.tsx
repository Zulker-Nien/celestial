import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "googleSignIn",
  inverted: "inverted",
  default: "",
};
type ButtonType = "google" | "inverted" | "default";

interface IButtons {
  children: any;
  buttonType: ButtonType;
  type: "submit" | undefined;
}
const Button = ({ children, buttonType, ...otherProps }: IButtons) => {
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
