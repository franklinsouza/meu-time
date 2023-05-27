const Input = ({
  placeholder,
  disabled,
  name,
  styles,
}: {
  placeholder: string;
  disabled: boolean;
  name: string;
  styles: string;
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      className={styles}
    />
  );
};

export default Input;
