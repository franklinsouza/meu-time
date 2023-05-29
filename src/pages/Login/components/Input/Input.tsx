import { forwardRef } from 'react';
import { InputProps } from './Input.type';

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { placeholder, name, disabled, styles } = props;

  return (
    <input
      placeholder={placeholder}
      name={name}
      disabled={disabled}
      className={styles}
      ref={ref}
    />
  );
});

export default Input;
