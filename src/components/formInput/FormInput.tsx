import { InputHTMLAttributes, FC } from "react";
import { Group, FormInputLabel, Input } from "./FormInput.styles";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <div>
        <Input {...otherProps} />
        {label && (
          <FormInputLabel
            shrink={Boolean(
              otherProps.value &&
                typeof otherProps.value === "string" &&
                otherProps.value.length
            )}
          >
            {label}
          </FormInputLabel>
        )}
      </div>
    </Group>
  );
};

export default FormInput;
