import { Group, FormInputLabel, Input } from "./FormInput.styles";

const FormInput = ({ label, ...otherProps }: any) => {
  return (
    <Group>
      <div>
        <Input {...otherProps} />
        {label && (
          <FormInputLabel shrink={otherProps.value.length}>
            {label}
          </FormInputLabel>
        )}
      </div>
    </Group>
  );
};

export default FormInput;
