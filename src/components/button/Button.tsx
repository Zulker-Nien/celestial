import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.styles";

export const BUTTON_TYPE_CLASSES = {
  google: "googleSignIn",
  inverted: "inverted",
  default: "default",
};
interface ButtonProps {
  children: any;
  buttonType:
    | typeof BUTTON_TYPE_CLASSES.google
    | typeof BUTTON_TYPE_CLASSES.inverted
    | typeof BUTTON_TYPE_CLASSES.default;
  onClick?: any;
  type?: "submit" | "button" | undefined;
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) =>
  ({
    [BUTTON_TYPE_CLASSES.default]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
